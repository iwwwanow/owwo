#ifndef UI_H
#define UI_H

#include "../getters/getters.h"

void render_resource_page(const char *reload_js, struct Resources *resources);
void render_resource_child(char *filename);
void render_footer();

#endif
