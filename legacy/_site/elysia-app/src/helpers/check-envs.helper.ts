import { REQUIRED_ENV_NAMES } from "../elysia.constants.js";
import { getEnvErrorMessage } from "../getters/index.js";

const checkEnvs = () => {
  for (const ENV_NAME of REQUIRED_ENV_NAMES) {
    if (!process.env[ENV_NAME]) throw new Error(getEnvErrorMessage(ENV_NAME));
  }
};

export { checkEnvs };
