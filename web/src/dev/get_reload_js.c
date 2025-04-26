#include "get_reload_js.h"

const char *get_reload_js() {
  return "<script>\n"
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
}
