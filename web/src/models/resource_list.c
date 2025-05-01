#include "resource_list.h"
#include "resource.h"
#include <dirent.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void ResourceList_init(ResourceList *list) {
  list->data = NULL;
  list->size = 0;
  list->capacity = 0;
}

void ResourceList_add(ResourceList *list, const char *path, const char *name,
                      const char *mimetype, const char *cover) {
  if (list->size >= list->capacity) {
    list->capacity = (list->capacity == 0) ? 1 : list->capacity * 2;
    list->data = realloc(list->data, list->capacity * sizeof(Resource));
  }

  Resource *res = &list->data[list->size++];
  /* TODO strdup what is? */
  res->path = strdup(path);
  res->mimetype = strdup(mimetype);
  res->name = strdup(name);
  res->cover = strdup(cover);
}

void ResourceList_free(ResourceList *list) {
  for (size_t i = 0; i < list->size; i++) {
    free(list->data[i].path);
    free(list->data[i].mimetype);
    free(list->data[i].name);
    free(list->data[i].cover);
  }
  free(list->data);
  list->data = NULL;
  list->size = list->capacity = 0;
}
