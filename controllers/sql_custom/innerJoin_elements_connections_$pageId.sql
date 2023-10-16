SELECT
  l.element_id,
  l.title,
  l.desc
FROM
  elements l
  INNER JOIN connections r ON l.element_id = r.element_id
  AND r.page_id = $page_id
