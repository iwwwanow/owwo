export default function order(input: string) {
  query += "ORDER BY\n";
  query += `${input} DESC;`;
  return this;
}
