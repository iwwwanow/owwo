#include "getters.h"
#include <dirent.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char **get_filenames(const char *path, int *count) {
  struct dirent *entry;
  DIR *dp = opendir(path);
  if (dp == NULL) {
    perror("opendir");
    *count = 0;
    return NULL;
  }

  char **filenames = malloc(100 * sizeof(char *));
  if (filenames == NULL) {
    perror("malloc");
    closedir(dp);
    *count = 0;
    return NULL;
  }

  int index = 0;
  while ((entry = readdir(dp))) {
    if (index < MAX_FILES_COUNT) {
      filenames[index] = malloc(MAX_FILENAME_LENGTH * sizeof(char));
      if (filenames[index] == NULL) {
        perror("malloc");
        for (int i = 0; i < index; i++) {
          free(filenames[i]);
        }
        free(filenames);
        closedir(dp);
        *count = 0;
        return NULL;
      }
      strncpy(filenames[index], entry->d_name, MAX_FILENAME_LENGTH);
      filenames[index][MAX_FILENAME_LENGTH - 1] = '\0';
      index++;
    }
  }

  closedir(dp);
  *count = index;
  return filenames;
}
