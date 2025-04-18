#include <fcgi_stdio.h>
#include <stdlib.h>

int main() {
  while (FCGI_Accept() >= 0) {
    // Стандартный HTTP-заголовок
    printf("Content-Type: text/html\r\n\r\n");

    printf("<h1>Hello, FastCGI!</h1>");
    printf("<p>QUERY_STRING: %s</p>", getenv("QUERY_STRING"));
  }
  return 0;
}
