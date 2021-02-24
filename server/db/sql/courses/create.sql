INSERT INTO courses(title, type, description, is_visible)
VALUES (${title}, ${type}, ${description}, ${is_visible})
RETURNING *
