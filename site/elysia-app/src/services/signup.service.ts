import { SignupController } from "@site/controllers";
import type { SignupDtoType } from "@site/dto";

class SignupService {
  static processPostRequest(signupData: SignupDtoType) {
    // TODO все проверки на уровне сервисов.
    // TODO на уровень контроллера только те данные, которые ему нужны
    SignupController.processSignup(signupData);
  }
}

export { SignupService };
