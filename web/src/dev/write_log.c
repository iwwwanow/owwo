#include <dirent.h>
#include <fcgi_stdio.h>
#include <stdio.h>

void write_log_message(const char *message) {
  FILE *logfile = fopen("/web/logs/myfcgi.log", "a");
  if (logfile) {
    fprintf(logfile, "%s\n", message);
    fclose(logfile);
  }
}
