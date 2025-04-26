#include "print_html_tag.h"
#include "fcgi_stdio.h"

void print_html_tag(const char *html_tag, const char *html_content) {
  if (html_content) {
    FCGI_printf("<%s>%s</%s>", html_tag, html_content, html_tag);
    return;
  }
  FCGI_printf("<%s>", html_tag);
}
