export default function (): { name: string; secret: string } {
  const secret = process.env.JWT_SECRET;
  if (typeof secret === "string") {
    const config = {
      name: "jwt",
      secret,
    };
    return config;
  } else {
    throw new Error("jwt secret undefined");
  }
}
