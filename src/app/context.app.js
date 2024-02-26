export class Context {
  constructor(req) {
    this.url = new URL(req.url);
    this.method = req.method;
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
