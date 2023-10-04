export default class ckeckType {
  static async string(variable: string) {
    if (!(typeof variable === "string")) {
      throw new Error("${variable} is not string");
    }
  }
}
