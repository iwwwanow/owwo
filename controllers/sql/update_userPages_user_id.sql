UPDATE user_pages
SET
  user_id = (
    SELECT
      user_id
    FROM
      users
    WHERE
      $username is username
  )
WHERE
  rowid = (
    SELECT
      MAX(rowid)
    FROM
      user_pages
  )
