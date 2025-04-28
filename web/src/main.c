#include <dirent.h>
/* #include <fcgi_stdio.h> */
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

  struct Resources *resources = get_filenames(path);
  if (resources == NULL) {
    printf("resources is null");
    return -1;
  }

  printf("filenames count: %d\n", resources->count);
  for (int i = 0; i < resources->count; i++) {
    printf("filename: %s\n", resources->filenames[i]);
  }

  /* while (FCGI_Accept() >= 0) { */
  /*   printf("Content-Type: text/html\r\n\r\n"); */
  /*   render_resource_page(reload_js); */
  /* } */

  return 0;
}
