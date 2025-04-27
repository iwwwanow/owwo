#include <dirent.h>
#include <fcgi_stdio.h>
#include <stdio.h>

#include "dev/dev.h"
#include "ui/ui.h"

#define MAX_FILENAME_LENGTH 256

int main() {
  const char *reload_js = get_reload_js();

  while (FCGI_Accept() >= 0) {
    printf("Content-Type: text/html\r\n\r\n");
    render_resource_page(reload_js);
  }

  return 0;
}
