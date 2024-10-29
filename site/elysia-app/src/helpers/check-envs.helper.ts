import { REQUIRED_ENV_NAMES } from "../elysia.constants";
import { getEnvErrorMessage } from "../getters";

const checkEnvs = () => {
  for (const ENV_NAME of REQUIRED_ENV_NAMES) {
    if (!process.env[ENV_NAME]) throw new Error(getEnvErrorMessage(ENV_NAME));
  }
};

export { checkEnvs };
