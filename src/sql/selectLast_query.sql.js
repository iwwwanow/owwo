export default function selectLast_query(input) {
  this.select(input);
  query += `ORDER BY rowid DESC\nLIMIT 1;`;
  return this;
}
