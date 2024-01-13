export default function select(input) {
  // TODO переделай инпут на ...args
  query = "";

  if (typeof input === "string") select_single = input;

  query += `SELECT ${input}\n`;
  query += `FROM ${table_name}\n`;

  return this;
}
