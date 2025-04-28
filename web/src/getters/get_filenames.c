#include "getters.h"
#include <dirent.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Resources *get_filenames(const char *path) {
  int *count;
  struct Resources *resources = malloc(sizeof(struct Resources));

  struct dirent *entry;
  DIR *dp = opendir(path);
  if (dp == NULL) {
    perror("opendir");
    *count = 0;
    return NULL;
  }

  /* char **filenames = malloc(100 * sizeof(char *)); */
  resources->filenames = malloc(100 * sizeof(char *));
  if (resources->filenames == NULL) {
    perror("malloc");
    closedir(dp);
    *count = 0;
    return NULL;
  }

  int index = 0;
  while ((entry = readdir(dp))) {
    if (index < MAX_FILES_COUNT) {
      resources->filenames[index] = malloc(MAX_FILENAME_LENGTH * sizeof(char));

      if (resources->filenames[index] == NULL) {
        perror("malloc");
        for (int i = 0; i < index; i++) {
          free(resources->filenames[i]);
        }
        free(resources->filenames);
        closedir(dp);
        *count = 0;
        return NULL;
      }

      strncpy(resources->filenames[index], entry->d_name, MAX_FILENAME_LENGTH);
      resources->filenames[index][MAX_FILENAME_LENGTH - 1] = '\0';
      index++;
    }
  }

  closedir(dp);

  resources->count = index;
  return resources;
}
