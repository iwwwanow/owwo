// TODO если нету праймари элемента, то праймари будет первый элемент в объекте

const t_text = {
  type: "TEXT",
};

const t_integer = {
  type: "INTEGER",
};

const scheme = {
  users: {
    user_id: t_text,
    username: {
      type: "TEXT",
      // TODO index: true,
      unique: true,
    },
    password: t_text,
    text: t_text,
    markup: {
      type: "TEXT",
      default: "grid",
      allowed: ["list, grid"],
    },
    date_creation: t_integer,
    date_last: t_integer,
  },

  // authors
  user_pages: {
    rename: "authors",
    user_id: {
      type: "TEXT",
      primary: true,
      foreign_key: {
        ref_table: "users",
        ref_column: "user_id",
        on_delete: "CASCADE",
        on_update: "CASCADE",
      },
    },
    page_id: {
      type: "TEXT",
      primary: true,
      foreign_key: {
        ref_table: "pages",
        ref_column: "page_id",
        on_delete: "CASCADE",
        on_update: "CASCADE",
      },
    },
  },

  pages: {
    page_id: t_text,
    text: t_text,
    markup: {
      type: "TEXT",
      default: "grid",
      allowed: ["list, grid"],
    },
    type: {
      type: "TEXT",
      default: "close",
      allowed: ["open, close, invite"],
    },
    date_creation: t_integer,
    date_last: t_integer,
  },

  page_elements: {
    rename: "connections",
    page_id: {
      type: "TEXT",
      primary: true,
      foreign_key: {
        ref_table: "pages",
        ref_column: "page_id",
        on_delete: "CASCADE",
        on_update: "CASCADE",
      },
    },
    element_id: {
      type: "TEXT",
      primary: true,
      foreign_key: {
        ref_table: "elements",
        ref_column: "element_id",
        on_delete: "CASCADE",
        on_update: "CASCADE",
      },
    },
  },

  elements: {
    element_id: t_text,
    user_id: t_text,
    text: t_text,
    date_creation: t_integer,
    date_last: t_integer,
  },

  _triggers: {
    user_pages: {
      after_insert: "pages",
      insert_into: {
        table_name: "user_pages",
        column_name: "page_id",
        value: "NEW.page_id",
      },
    },

    page_elements: {
      after_insert: "elements",
      insert_into: {
        table_name: "pages",
        column_name: "element_id",
        value: "NEW.element_id",
      },
    },
  },
};

export default scheme;
