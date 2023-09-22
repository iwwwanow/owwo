import { Elysia } from "elysia";
import { Database } from "bun:sqlite";
import { Eta } from "eta";

import * as path from "node:path";

const eta = new Eta({ views: path.join(import.meta.dir, "views") });

const db = new Database("data/db.sqlite", { create: true });

const router = new Elysia()
  .get("/", async () => {
    return eta.render("./index", { name: "Ben" });
  })
  .get("/new-user", async ({ set }) => {
    db.prepare(
      `
		CREATE TABLE IF NOT EXISTS users (
		user_id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT,
		password TEXT);
		`
    ).run();

    db.prepare(
      `
		INSERT INTO users (username, password) VALUES ('admin', 'admin')
		`
    ).run();

    set.redirect = "/";
  });

export default router;
