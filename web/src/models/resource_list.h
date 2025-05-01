#ifndef RESOURCE_LIST_H
#define RESOURCE_LIST_H

#include <stddef.h>

typedef struct ResourceList {
  struct Resource *data;
  size_t size;
  size_t capacity;
} ResourceList;

void ResourceList_init(ResourceList *list);

void ResourceList_add(ResourceList *list, const char *path, const char *name,
                      const char *mimetype, const char *cover);

void ResourceList_free(struct ResourceList *list);

#endif
