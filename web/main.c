#include <fcgi_stdio.h>
#include <stdlib.h>
#include <time.h>

const char *reload_js =
    "<script>\n"
    "const ws = new WebSocket(`ws://${window.location.hostname}:8082`);"

    "ws.addEventListener('open', () => {"
    "  console.log('ws connected');"
    "  document.title = 'ws connected';"
    "});"

    "ws.addEventListener('message', (event) => {"
    "  if (event.data === 'reload') {"
    "    console.log('relod command received');"
    "    location.reload();"
    "  }"
    "});"

    "ws.addEventListener('error', (error) => {"
    "  console.error('ws error:', error);"
    "  document.title = 'ws connection error';"
    "});"
    "</script>\n";

int main() {
  while (FCGI_Accept() >= 0) {
    printf("Content-Type: text/html\r\n\r\n");
    printf("<html><head><title>FastCGI</title>%s</head>", reload_js);
    printf("<body><h1>Hello 9 FastCGI!</h1>");
    printf("<p>Last update: %ld</p></body></html>", time(NULL));
  }
  return 0;
}
