import { Elysia } from "elysia";

import IndexController from "../controllers";

const router = new Elysia();

// INDEX
router
  .get("/", () => {
    return IndexController.renderIndex();
  })
  .get("/about", () => {
    return IndexController.renderAbout();
  })
  .get("/login", () => {
    return IndexController.renderLogin();
  })
  .get("/signup", () => {
    return IndexController.renderSignUp();
  });

// AUTH;

export default router;

// import { Database } from "bun:sqlite";
// const db = new Database("data/db.sqlite", { create: true });
// .get("/new-user", async ({ set }) => {
//   db.prepare(
//     `
// 		CREATE TABLE IF NOT EXISTS users (
// 		user_id INTEGER PRIMARY KEY AUTOINCREMENT,
// 		username TEXT,
// 		password TEXT);
// 		`
//   ).run();
//
//   db.prepare(
//     `
// 		INSERT INTO users (username, password) VALUES ('admin', 'admin')
// 		`
//   ).run();
//
//   set.redirect = "/";
// });
