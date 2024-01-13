export default function selectLast(input) {
  this.select(input);
  query += `ORDER BY rowid DESC\nLIMIT 1;`;
  return this;
}
