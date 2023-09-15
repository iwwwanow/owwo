// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import { exists } from "../deps.ts";

import { e, client } from "../config/edgedb.ts";
import { eta } from "../config/eta.ts";

export default class page {
  static async create({ request, response, params }) {
    const username = params.username;
    const result = await e
      .insert(e.Page, {
        authors: e.select(e.User, (user) => ({
          filter: e.op(user.username, "=", username),
        })),
      })
      .run(client);
    await response.redirect(`/${username}`);
  }

  static async index({ request, response, params }) {
    let editor$;
    const pageId = params.pageId;

    const page = await e
      .select(e.Page, () => ({
        authors: {
          username: true,
        },
        cover: true,
        title: true,
        desc: true,

        filter_single: { id: pageId },
      }))
      .run(client);

    if (request.auth) {
      editor$ = page.authors.some(
        (author) => author.username === request.username
      );
    }

    response.body = eta.render("./page", {
      request,
      params,
      page,
      editor$,
    });
  }

  static async state({ request, response, params }) {
    const pageId = params.pageId;

    const body = await request.body().value;
    const state = await body.get("button_page-state");
    const editor = request.headers.get("referer").split("/").at(-1);

    await e
      .update(e.Page, (page) => ({
        filter_single: { id: pageId },
        set: {
          state: state,
        },
      }))
      .run(client);

    await response.redirect(`/${editor}`);
  }

  static async meta({ request, response, params }) {
    const pageId = params.pageId;

    const formDataReader = await request.body({ type: "form-data" }).value;
    const formDataBody = await formDataReader.read({ maxSize: 10000000 }); // Max file size to handle

    const { title, desc } = formDataBody.fields;
    await e
      .update(e.Page, () => ({
        filter_single: { id: pageId },
        set: {
          title,
          desc,
        },
      }))
      .run(client);

    // TOOD странная точнка вначале. какбудто так быть не должно. Эта же точна сохраняется и при рендере
    let datadir = "./data";
    datadir = datadir + "/" + pageId;

    // TODO создавать папку при создании пользователя.
    // TODO создавать папку при создании страницы.

    const file = formDataBody.files[0];
    if (file.contentType !== "application/octet-stream") {
      if (!(await exists(datadir))) {
        await Deno.mkdir(datadir, { recursive: true });
      }
      const extention = file.contentType.split("/").at(-1);
      const filepath = `${datadir}/cover-${pageId}.${extention}`;
      await Deno.writeFile(filepath, file.content);

      await e
        .update(e.Page, () => ({
          filter_single: { id: pageId },
          set: {
            cover: filepath,
          },
        }))
        .run(client);
    }

    await response.redirect(`/page/${pageId}`);
  }

  static checkBin() {
    console.log("checkBin");
    e.delete(e.Page, (page) => ({
      filter: e.op(page.state, "=", "bin"),
    })).run(client);
  }
}
