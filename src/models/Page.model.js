import { v4 as uuidv4 } from "uuid";

import sql from "../lib/sql.js";

export default class Page {
  constructor(pageId) {
    if (!pageId) {
      pageId = uuidv4();

      this.date_creation = Date.now();
      this.date_lastModify = Date.now();
    }

    this.id = pageId;
  }

  create() {
    sql("pages")
      .insert({
        page_id: this.id,
        date_creation: this.date_creation,
        date_lastModify: this.date_lastModify,
      })
      .run();
  }

  writeCover(buffer) {
    // writeFile(buffer, cover)
  }

  getCover(name) {
    // return buffer
    // or return filePath
  }

  removeCover(name) {
    removeFile(name);
  }

  getFile(name) {
    // return buffer
    // or return filePath
  }
  writeFile(buffer) {
    console.log(buffer);
  }

  removeFile(name) {}

  setPermissions(userId) {}

  getPermissions(authUserId) {
    const permissions = sql("authors")
      .select("type")
      .where({ page_id: this.id, user_id: authUserId })
      .get();
    return permissions;
  }
}
