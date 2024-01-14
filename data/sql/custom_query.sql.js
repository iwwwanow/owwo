export default async function custom_query(input) {
  const path = `./data/sql/sql_custom/${input}.sql`;
  const file = Bun.file(path);
  const query = await file.text();
  this.run(query);
  return;
}
