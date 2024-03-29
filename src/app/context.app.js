export class Context {
  #req;
  #status = 200;
  #statusText = "";
  #headers = {};
  #cookies;
  #options = {
    status: this.#status,
    statusText: this.#statusText,
    headers: this.#headers,
  };
  #auth = {};

  constructor(req) {
    this.#req = req;
    this.method = req.method;
    this.url = new URL(req.url);
    this.headers = req.headers;
    this.body = req.body;
    this.#cookies = this.#getCookieObjFromReq(this.headers);
    this.view = {
      auth: this.getCookie("auth"),
    };
  }

  #getCookieObjFromReq(headers) {
    if (headers) {
      const cookieObj = {};
      const cookieStr = headers.get("cookie");
      if (cookieStr) {
        const cookieArr = cookieStr.split("; ");
        for (const cookieStr of cookieArr) {
          const [cookieName, cookieValue] = cookieStr.split("=");
          cookieObj[cookieName] = cookieValue;
        }
      }
      return cookieObj;
    }
  }

  setHeader(name, value) {
    if (!name) throw new Error("need header name to set new header in context");
    if (!value)
      throw new Error("need header value to set new header in context");
    this.#headers[name] = value;
  }

  getHeader(name) {
    if (!name) throw new Error("need header name to get header in context");
    const header = this.headers.get(name);
    return header;
  }

  getCookie(name) {
    if (!name) throw new Error("need cookie name to get cookie in context");
    const cookie = this.#cookies[name];
    return cookie || null;
  }

  setAuthUserId(userId) {
    this.#auth.userId = userId;
  }

  resetAuth() {
    this.#auth = {};
    this.setHeader(
      "Set-Cookie",
      "auth=deleted; expires=Thu, 16 Jul 1998 00:00:00 GMT"
    );
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

  sendFile(path) {
    return this.#response(Bun.file(path));
  }

  redirect(path) {
    return Response.redirect(path, this.#options);
  }

  #response(body) {
    return new Response(body, this.#options);
  }
}
