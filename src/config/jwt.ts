export default function (): { name: string; secret: string } {
  const secret = process.env.JWT_SECRET;

  if (secret) {
    const config = {
      name: "jwt",
      secret,
      exp: "1h",
    };
    return config;
  } else {
    throw new Error("jwt secret undefined");
  }
}
