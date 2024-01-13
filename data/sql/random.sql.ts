export default function random(input: number) {
  query += "ORDER BY RANDOM()\n";
  query += `LIMIT ${input};`;
  return this;
}
