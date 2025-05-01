#include "../utils/utils.h"
#include "fcgi_stdio.h"
#include "ui.h"
#include <stdio.h>

void render_resource_child(char *filename) {
  print_html_tag("li", NULL);
  print_html_tag("h4", "child-file-type-icon");
  print_html_tag("h4", "child-file-cover");
  print_html_tag("h4", filename);
  FCGI_printf("<a href='%s'>%s</a>", filename, filename);
  /* TODO is needed? */
  /* TODO is only for directories? */
  /* print_html_tag("h4", "child-file-description"); */
  print_html_tag("/li", NULL);
}
