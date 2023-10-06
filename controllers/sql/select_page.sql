SELECT
  page_id,
  title,
  description,
  cover
FROM
  pages
WHERE
  page_id = $page_id;
