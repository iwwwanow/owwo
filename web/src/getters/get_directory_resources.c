#include <dirent.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>

#include "../models/resource_list.h"

bool is_reserved_name(const char *filename) {
  const char *reserved[] = {"cover.jpg", "thumb.png", NULL};
  for (int i = 0; reserved[i] != NULL; i++) {
    if (strcmp(filename, reserved[i]) == 0) {
      return true;
    }
  }
  return false;
}

void scan_directory(const char *dir_path, ResourceList *resources) {
  DIR *dir = opendir(dir_path);
  if (!dir) {
    perror("opendir");
    return;
  }

  struct dirent *entry;
  while ((entry = readdir(dir)) != NULL) {
    if (entry->d_name[0] == '.') {
      continue;
    }

    char full_path[1024];
    snprintf(full_path, sizeof(full_path), "%s/%s", dir_path, entry->d_name);

    struct stat statbuf;
    if (stat(full_path, &statbuf) != 0) {
      continue;
    }

    /* TODO S_ISDIR is? */
    if (S_ISDIR(statbuf.st_mode)) {
      scan_directory(full_path, resources);
    } else if (S_ISREG(statbuf.st_mode)) {
      /* TODO get mime */
      const char *mimetype = "application/octet-stream";

      /* TODO get coverpath */
      bool is_cover = is_reserved_name(entry->d_name);
      char *cover_str = is_cover ? strdup("1") : strdup("0");

      ResourceList_add(resources, full_path, entry->d_name, mimetype,
                       cover_str);
      free(cover_str);
    }
  }

  closedir(dir);
}
