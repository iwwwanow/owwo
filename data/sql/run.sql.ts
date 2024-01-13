export default function run(input?: string) {
  if (input) query = input;
  db.query(query).run();
  return;
}
