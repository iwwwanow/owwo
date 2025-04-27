#include <dirent.h>
#include <fcgi_stdio.h>
#include <stdio.h>
#include <stdlib.h>

#include "dev/dev.h"
#include "getters/getters.h"
#include "ui/ui.h"

#define MAX_FILENAME_LENGTH 256

int main() {
  const char *reload_js = get_reload_js();
  /* TODO env & fallback */
  const char *path = "/data/uploads/";
  int count;

  char **filenames = get_filenames(path, &count);
  if (filenames == NULL) {
    return -1;
  }

  for (int i = 0; i < count; i++) {
    write_log_message(filenames[i]);
    free(filenames[i]);
  }
  free(filenames);

  while (FCGI_Accept() >= 0) {
    printf("Content-Type: text/html\r\n\r\n");
    render_resource_page(reload_js);
  }

  return 0;
}
