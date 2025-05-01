#include "dev.h"
#include <dirent.h>
#include <fcgi_stdio.h>
#include <stdio.h>

void write_log_message(char *string_template, char *message) {
  FILE *logfile = fopen("/web/logs/myfcgi.log", "a");
  if (logfile) {
    fprintf(logfile, string_template, message);
    fclose(logfile);
  }
}
