#include "../utils/utils.h"
#include "fcgi_stdio.h"
#include "ui.h"
#include <stdio.h>
#include <time.h>

void render_footer() {
  print_html_tag("h1", "footer");
  print_html_tag("h4", "about");
  print_html_tag("h4", "systemInfo?");
  print_html_tag("h4", "serverInfo?");
  print_html_tag("h4", "randomItem?");
  printf("<h4>Last update: %ld</h4>", time(NULL));
  print_html_tag("/body", NULL);
  print_html_tag("/html", NULL);
}
