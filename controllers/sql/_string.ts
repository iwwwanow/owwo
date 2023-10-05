export default async function (path: string) {
  const file = Bun.file(path);
  const text = await file.text();
  return text;
}
