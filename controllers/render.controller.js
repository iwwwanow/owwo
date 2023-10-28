import { eta } from "../config/eta";
import Data from "../middleware/data.middleware";

export default class Render {
  static async index(c) {
    c.props.data = await Data.index();

    console.log("index-props:", c.props);
    const html = eta.render("Index", c.props);

    c.headers["Content-Type"] = "text/html";
    return new Response(html, { headers: c.headers });
    // return new Response("text", { headers: c.headers });
  }

  static async profile(c) {
    const username = c.url.pathname.split("/").at(1);
    c.props.data = await Data.profile(username);

    if (
      c.props.client.auth &&
      c.props.client.auth.user_id === c.props.data.user_id
    ) {
      c.props.client.type = "owner";
      if (c.url.search && c.url.searchParams.get("mode"))
        c.props.client.mode = c.url.searchParams.get("mode");
    }

    console.log("profile-props:", c.props);
    const html = eta.render("Profile", c.props);
    console.log(c.headers);
    c.headers["Content-Type"] = "text/html";

    return new Response(html, { headers: c.headers });
  }

  static async page(c) {
    const page_id = c.url.pathname.split("/").at(2);

    c.props.data = await Data.page(page_id);

    if (
      c.props.client.auth &&
      c.props.data.authors.find(
        (author) => author.user_id === c.props.client.auth.user_id
      )
    ) {
      c.props.client.type = "owner";
      if (c.url.search && c.url.searchParams.get("mode"))
        c.props.client.mode = c.url.searchParams.get("mode");
    }

    // console.log("page-props:", c.props);
    const html = eta.render("Page", c.props);

    c.headers["Content-Type"] = "text/html";
    return new Response(html, { headers: c.headers });
  }

  static async element(c) {
    const element_id = c.url.pathname.split("/").at(2);

    c.props.data = await Data.element(element_id);

    if (
      c.props.client.auth &&
      c.props.data.author_id === c.props.client.auth.user_id
    ) {
      c.props.client.type = "owner";
      if (c.url.search && c.url.searchParams.get("mode"))
        c.props.client.mode = c.url.searchParams.get("mode");
    }

    console.log("element-props:", c.props);
    const html = eta.render("Element", c.props);

    c.headers["Content-Type"] = "text/html";
    return new Response(html, { headers: c.headers });
  }

  static about(c) {
    // console.log("about-props:", props);
    const html = eta.render("About", c.props);
    c.headers["Content-Type"] = "text/html";
    return new Response(html, { headers: c.headers });
  }
  static async login(c) {
    const html = eta.render("Login", c.props);
    c.headers["Content-Type"] = "text/html";
    return new Response(html, { headers: c.headers });
  }
  static signup(c) {
    const html = eta.render("Signup", c.props);
    c.headers["Content-Type"] = "text/html";
    return new Response(html, { headers: c.headers });
  }

  static error({ code, error }) {}
}
