#ifndef RESOURCE_H
#define RESOURCE_H

typedef struct Resource {
  char *path;
  char *mimetype;
  char *name;
  char *cover;
  /* TODO description */
} Resource;

#endif
