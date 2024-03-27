export class Context {
  #req;
  #status = 200;
  #headers = {};

  constructor(req) {
    this.#req = req;
    this.method = req.method;
    this.url = new URL(req.url);
    this.body = req.body;
  }

  setHeader(name, value) {
    if (!name) throw new Error("need header name to set new header in context");
    if (!value)
      throw new Error("need header value to set new header in context");
    this.#headers[name] = value;
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
    return this.#response(i);
  }

  status(code) {
    this.#status = code;
    return this.#response("");
  }

  html(html) {
    this.setHeader("Content-Type", "text/html");
    return this.#response(html);
  }

  redirect(path) {
    return Response.redirect(path);
  }

  sendFile(path) {
    return this.#response(Bun.file(path));
  }

  #response(body) {
    return new Response(body, { headers: this.#headers, status: this.#status });
  }
}
