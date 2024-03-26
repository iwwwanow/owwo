export class Context {
  #req;

  constructor(req) {
    this.#req = req;
    this.method = req.method;
    this.url = new URL(req.url);
    this.body = req.body;
  }

  addParams(params) {
    this.params = params;
  }

  addParam(name, value) {
    if (!name) throw new Error("Need paramName to set it to context");
    if (!value) throw new Error("Need paramValue to set it to context");
    if (!this.params) this.params = {};
    this.params[name] = value;
  }

  send(i) {
    return new Response(i);
  }

  status(code) {
    return new Response("", { status: code });
  }

  html(html) {
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  }

  redirect(path) {
    return Response.redirect(path);
  }

  async #getFormData() {
    const formData = await this.#req.formData();
    return formData;
  }

  async getData() {
    const formData = await this.#getFormData();
    const json = JSON.stringify(formData);
    const data = await JSON.parse(json);
    return data;
  }

  sendFile(path) {
    return new Response(Bun.file(path));
  }
}
