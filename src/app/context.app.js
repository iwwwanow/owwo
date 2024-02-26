export class Context {
  constructor(req) {
    this.url = new URL(req.url);
    this.method = req.method;
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

  sendFile(path) {
    return new Response(Bun.file(path));
  }
}
