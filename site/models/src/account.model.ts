import type { SignupData } from "@site/interfaces";

class AccountModel {
  signupData: SignupData;

  constructor(signupData: SignupData) {
    this.signupData = signupData;
  }

  async writeData() {
    console.log(this.signupData);
  }
}

export { AccountModel };
