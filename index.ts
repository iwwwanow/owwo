import { Elysia } from "elysia";
import { Eta } from "eta";
import { html } from "@elysiajs/html";

import { Database } from "bun:sqlite";

import * as path from "node:path";

const eta = new Eta({ views: "views" });

const db = new Database("data/db.sqlite", { create: true });

const router = new Elysia()
  .get("/", async () => {
    return await eta.render("./index", { name: "Ben" });
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

const app = new Elysia().use(html()).use(router).listen(8080);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
