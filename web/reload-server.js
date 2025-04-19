import { WebSocketServer } from "ws";
import { promisify } from "util";
import { glob } from "node:fs/promises";
import { watch } from "chokidar";
import { exec } from "child_process";
import { execSync } from "child_process";

const PORT = 8082;
const wss = new WebSocketServer({ port: PORT });
const execAsync = promisify(exec);

let isRunning = true;
const clients = new Set();

const watcher = watch(await Array.fromAsync(glob("**/*.c")), {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

wss.on("connection", (ws) => {
  console.log("New client connected");
  clients.add(ws);

  ws.on("close", () => {
    console.log("Client disconnected");
    clients.delete(ws);
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
    clients.delete(ws);
  });

  ws.send("connection_test");
});

watcher.on("change", async (path) => {
  console.log(`File changed: ${path}`);

  const { stdout: buildStdout } = await execAsync("/web/scripts/build.sh");
  console.log(buildStdout);
  const startStdout = execSync("/web/scripts/start.dev.sh", {
    stdio: "inherit",
  });
  console.log(startStdout);

  clients.forEach((client) => {
    if (client.readyState) {
      console.log(`Sending reload to client ${client._socket.remoteAddress}`);
      client.send("reload", (err) => {
        if (err) console.error("Send error:", err);
      });
    }
  });
});

process.on("SIGINT", () => {
  isRunning = false;
  watcher.close();
  wss.close();
  process.exit(0);
});
