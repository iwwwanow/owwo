export default class ckeckType {
  static string(variable: any) {
    if (!(typeof variable == "string")) {
      throw new Error(`${variable} is not string`);
    }
  }

  static number(variable: any) {
    if (!(typeof variable == "number")) {
      throw new Error(`${variable} is not number`);
    }
  }
}
