#ifndef GETTERS_H
#define GETTERS_H

#define MAX_FILENAME_LENGTH 256
#define MAX_FILES_COUNT 100

struct Resources {
  int count;
  char **filenames;
};

struct Resources *get_filenames(const char *path);

#endif
