export default function random_query(input: number) {
  query += "ORDER BY RANDOM()\n";
  query += `LIMIT ${input};`;
  return this;
}
