export default function select_query(input) {
  // TODO переделай инпут на ...args
  query = "";

  if (typeof input === "string") select_single = input;

  query += `SELECT ${input}\n`;
  query += `FROM ${table_name}\n`;

  return this;
}
