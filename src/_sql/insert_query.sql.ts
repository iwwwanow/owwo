export default function insert_query(input: { [key: string]: string }) {
  if (table_name) {
    query += `INSERT INTO ${table_name} `;
  }

  let columns: Array<string> = [];
  let values: Array<string> = [];
  //
  Object.keys(input).forEach((column, index, array) => {
    const value = input[column];
    columns.push(column);
    values.push(`'${value}'`);
  });
  //
  query += `(${columns.join(", ")})\n`;
  query += "VALUES\n";
  query += `(${values.join(", ")});`;

  return this;
}
