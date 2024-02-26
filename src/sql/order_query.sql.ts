export default function order_query(input: string) {
  query += "ORDER BY\n";
  query += `${input} DESC;`;
  return this;
}
