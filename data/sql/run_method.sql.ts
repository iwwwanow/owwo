export default function run_method(input?: string) {
  if (input) query = input;
  db.query(query).run();
  return;
}
