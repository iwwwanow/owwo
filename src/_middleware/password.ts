export default class Password {
  static async verify(password: string, hash_pasword: string) {
    const verify_password = await Bun.password.verify(password, hash_pasword);
    if (!verify_password) throw new Error("Incorrect auth attemp");
  }

  static confirm(password: string, confirm: string) {
    if (password !== confirm) throw new Error("password mismatch");
    return;
  }
}
