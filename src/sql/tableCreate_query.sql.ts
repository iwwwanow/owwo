type Columns = {
  [key: string]: string;
};

export default function tableCreate_query({
  table_name,
  columns,
}: {
  table_name: string;
  columns: Columns;
}) {
  let query = "";
  query += `CREATE TABLE IF NOT EXISTS ${table_name} (\n`;

  Object.keys(columns).forEach((column, index, array) => {
    let data_type = "";
    data_type = columns[column];
    query += `${column} ${data_type}`;
    if (index < array.length - 1) query += ",";
    query += "\n";
  });

  query += ");";

  this.run(query);
}
