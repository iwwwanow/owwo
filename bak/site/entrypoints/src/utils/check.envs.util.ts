import { REQUIRED_ENVS_LIST } from "@site/domain";
import { EnvNotProvidedException } from "@site/domain";

export const checkEnvsUtil = () => {
  for (const env of REQUIRED_ENVS_LIST) {
    if (!process.env[env]) throw new EnvNotProvidedException();
  }
};
