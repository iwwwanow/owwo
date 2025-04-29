/* TODO didnt like it */
#include "../getters/getters.h"
#include "../utils/utils.h"
#include "fcgi_stdio.h"
#include "ui.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void render_resource_page(const char *reload_js, struct Resources *resources) {
  int count = 0;

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

  for (int i = 0; i < resources->count; i++) {
    render_resource_child(resources->filenames[i]);
  }

  print_html_tag("/ul", NULL);

  print_html_tag("hr/", NULL);

  render_footer();

  printf("</html>");
}
