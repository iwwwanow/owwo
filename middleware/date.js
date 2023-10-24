import sql from "../controllers/sql";

export default class dbDate {
  static async update({ user_id, page_id, element_id }) {
    if (user_id) {
      sql("users")
        .update({ text, markup, date_lastModify: Date.now() })
        .where({ user_id })
        .run();
    } else if (page_id) {
      sql("pages")
        .update({ title, desc, markup, date_lastModify: Date.now() })
        .where({ page_id: params.page_id })
        .run();

      const author_ids = sql("authors")
        .select("user_id")
        .where({ page_id: params.page_id })
        .all();

      author_ids.forEach((author_id) => {
        sql("users")
          .update({ date_lastModify: Date.now() })
          .where({ user_id: author_id })
          .run();
      });
    } else if (element_id) {
      sql("elements")
        .update({ text, date_lastModify: Date.now() })
        .where({ element_id })
        .run();

      const page_ids = sql("connections")
        .select("page_id")
        .where({ element_id: params.element_id })
        .all();

      page_ids.forEach((page_id) => {
        sql("pages")
          .update({ date_lastModify: Date.now() })
          .where({ page_id })
          .run();
      });

      const author_id = sql("elements")
        .select("author_id")
        .where({ element_id: params.element_id })
        .get();

      sql("users")
        .update({ date_lastModify: Date.now() })
        .where({ user_id: author_id })
        .run();
    }
  }
}
