export default function update_query(input: { [key: string]: string }) {
  if (table_name) {
    query += `UPDATE ${table_name}\n`;
  }

  query += "SET ";

  Object.keys(input).forEach((column, index, array) => {
    let value = input[column];
    query += `${column} = '${value}'`;
    if (index < array.length - 1) query += ",";
    query += "\n";
  });

  return this;
}
