# files accepted:

- $avatar.gif (any static media + gif) - square, will be cached into webp?
- $cover.gif - cover uses in outter views. avatar in current page view
- если один из них отсутствует - заменяют друг друга

  - if it will be vmeste - avatar in priority

- $index.html - file will be rendered in iframe
  - it may be `md`
  - it may be `zip` with other files. needet to unzip
- $index.css
- $index.js

<!-- - #meta.json - link pages settings -->

- settings:
- #nested.json - settings, who applied on current & clidren directories
- #local.json - settings, who applied on current. higher priority

- files, sharted with `_` - private and not accepted with `api`, but can be accepted from user page request (cors)
- files, sharted with `$` - file used in page props, accepted with `api`
  - RESERVED BY OWWO NAMES
- files, sharted with `#` - file used in page settings, accepted with `api`

# root directory pages:

/about

- $index.md
- $index.css
- $index.js

- $index.md (html, zip)
- $index.css
- $index.js

# meta.json specs:

- title
- description

# settings specs:

- isFullSize(html)
