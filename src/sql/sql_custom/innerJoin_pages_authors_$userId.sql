SELECT
  l.page_id,
  l.title,
  l.desc
FROM
  pages l
  INNER JOIN authors r ON l.page_id = r.page_id
  AND r.user_id = $user_id
