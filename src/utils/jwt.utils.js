import * as jose from "jose";

export class JwtUtils {
  static #jwtSecret = process.env.JWT_SECRET;
  static #secret = new TextEncoder().encode(this.#jwtSecret);

  static async createJwt(params) {
    const jwt = await new jose.SignJWT(params)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("168h")
      .sign(this.#secret);
    return jwt;
  }

  static async verifyJwt(jwt) {
    const { payload } = await jose.jwtVerify(jwt, this.#secret);
    return payload;
  }
}
