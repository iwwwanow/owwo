#include "../utils/utils.h"
#include "ui.h"
#include <stdio.h>

void render_resource_child() {
  print_html_tag("li", NULL);
  print_html_tag("h4", "child-file-type-icon");
  print_html_tag("h4", "child-file-cover");
  print_html_tag("h4", "child-file-title");
  print_html_tag("h4", "child-file-description");
  print_html_tag("/li", NULL);
}
