type Input = { [key: string]: string };

export default function where_query(input: Input) {
  query += "WHERE ";

  Object.keys(input).forEach((column, i) => {
    let value = (input as any)[column];
    if (i > 0) {
      query += "\nAND ";
    }
    query += `${column} = '${value}'`;
  });
  query += ";\n";

  return this;
}
