export class Context {
  constructor(req) {
    this.url = new URL(req.url);
    this.method = req.method;
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

  html(html) {
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  }
}
