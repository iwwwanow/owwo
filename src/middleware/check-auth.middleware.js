import { timeoutUtil } from "../utils/timewout.utils";
import { JwtUtils } from "../utils/jwt.utils";

export const checkAuthMiddleware = async (c) => {
  const authCookie = c.getCookie("auth");
  try {
    if (authCookie) {
      const verifiedJwt = await JwtUtils.verifyJwt(authCookie);
      const { userId } = verifiedJwt;
      c.setAuthUserId(userId);
    }
  } catch (e) {
    console.error(e);
    c.resetAuth();
  }
};
