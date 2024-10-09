import { REQUIRED_ENV_NAMES } from "../elysia-app.constants";

const getEnvErrorMessage = (envName: string) =>
  `need "${envName}" env variable`;

const checkEnvs = () => {
  for (const ENV_NAME of REQUIRED_ENV_NAMES) {
    if (!process.env[ENV_NAME]) throw new Error(getEnvErrorMessage(ENV_NAME));
  }
};

export { checkEnvs };
