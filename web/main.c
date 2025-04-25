#include <dirent.h>
#include <fcgi_stdio.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_FILENAME_LENGTH 256

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

void print_html_tag(const char *html_tag, const char *html_content) {
  if (html_content) {
    printf("<%s>%s</%s>", html_tag, html_content, html_tag);
    return;
  }
  printf("<%s>", html_tag);
}

void log_message(const char *message) {
  FILE *logfile = fopen("/web/logs/myfcgi.log", "a");
  if (logfile) {
    fprintf(logfile, "%s\n", message);
    fclose(logfile);
  }
}

void print_child() {
  print_html_tag("li", NULL);
  print_html_tag("h4", "child-file-type-icon");
  print_html_tag("h4", "child-file-cover");
  print_html_tag("h4", "child-file-title");
  print_html_tag("h4", "child-file-description");
  print_html_tag("/li", NULL);
}

int main() {
  const char *path = "/data/uploads/";

  struct dirent *entry;
  DIR *dp = opendir(path);

  if (dp == NULL) {
    perror("opendir");
    return -1;
  }

  /* TODO change it to dynamic array */
  char filenames[100][MAX_FILENAME_LENGTH]; // Массив для хранения имен файлов
  int count = 0;

  while ((entry = readdir(dp))) {
    if (count < 100) {
      strncpy(filenames[count], entry->d_name, MAX_FILENAME_LENGTH);
      filenames[count][MAX_FILENAME_LENGTH - 1] = '\0';
      count++;
    }
  }

  closedir(dp);

  for (int i = 0; i < count; i++) {
    log_message(filenames[i]);
  }

  return 0;

  while (FCGI_Accept() >= 0) {
    printf("Content-Type: text/html\r\n\r\n");
    print_html_tag("html", NULL);

    print_html_tag("head", NULL);
    print_html_tag("title", "owwo");
    printf(reload_js);
    print_html_tag("/head", NULL);

    print_html_tag("body", NULL);
    print_html_tag("h1", "header");
    print_html_tag("h3", "to-profile-link");
    print_html_tag("hr/", NULL);

    print_html_tag("h1", "content:");
    print_html_tag("h3", "type-icon");
    print_html_tag("h3", "cover");
    print_html_tag("h3", "title");
    print_html_tag("h3", "description");
    print_html_tag("h3", "created-at");
    print_html_tag("h3", "updated-at");

    print_html_tag("hr/", NULL);
    print_html_tag("h2", "markdown-content");

    print_html_tag("hr/", NULL);
    print_html_tag("ul", NULL);

    print_child();
    print_child();
    print_child();

    print_html_tag("/ul", NULL);
    print_html_tag("hr/", NULL);

    print_html_tag("h1", "footer");
    print_html_tag("h4", "about");
    print_html_tag("h4", "systemInfo?");
    print_html_tag("h4", "serverInfo?");
    print_html_tag("h4", "randomItem?");
    printf("<h4>Last update: %ld</h4>", time(NULL));
    print_html_tag("/body", NULL);
    print_html_tag("/html", NULL);

    printf("</html>");
  }

  return 0;
}
