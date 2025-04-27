#include "../utils/utils.h"
#include "fcgi_stdio.h"
#include "ui.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void render_resource_page(const char *reload_js) {
  print_html_tag("html", NULL);

  print_html_tag("head", NULL);
  print_html_tag("title", "owwo");
  FCGI_printf(reload_js);
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

  render_resource_child();
  render_resource_child();
  render_resource_child();

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
