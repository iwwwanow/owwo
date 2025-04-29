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

  struct Resources *resources = get_filenames(path);
  if (resources == NULL) {
    printf("resources is null");
    return -1;
  }

  while (FCGI_Accept() >= 0) {
    char *request_method = getenv("REQUEST_METHOD");
    char *request_uri = getenv("REQUEST_URI");
    char *path_info = getenv("PATH_INFO");
    char *query_string = getenv("QUERY_STRING");
    char *remote_addr = getenv("REMOTE_ADDR");

    write_log_message("%s\n", request_method);
    write_log_message("%s\n", request_uri);
    write_log_message("%s\n", query_string);
    write_log_message("%s\n", remote_addr);
    write_log_message("\n\n", NULL);

    printf("Content-Type: text/html\r\n\r\n");
    render_resource_page(reload_js, resources);
  }

  return 0;
}
