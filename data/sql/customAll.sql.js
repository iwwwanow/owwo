export default async function customAll(input) {
  const path = `./data/sql/sql_custom/${input}.sql`;
  const file = Bun.file(path);
  query = await file.text();
  return this;
}
