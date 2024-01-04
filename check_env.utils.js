export default async function () {
  if (!process.env.JWT_SECRET) throw new Error("need some secret");
  return;
}
