import crypto from "crypto";

export const checkEnvUtil = async () => {
  if (!process.env.JWT_SECRET) {
    const secret = crypto.randomBytes(64).toString("hex");
    console.log(`JWT_SECRET=${secret}`);
    throw new Error("need some secret");
  }
  return;
};
