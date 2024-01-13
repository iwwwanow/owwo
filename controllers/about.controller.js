import render from "../middleware/render.middleware";

export default class AboutController {
  static async index(c) {
    const html = await render("About", { props: "data" });
    console.log(html);
    return c.html(html);
  }
}
