CREATE TABLE Book(ID SERIAL PRMARY KEY, TITLE TEXT NOT NULL. PUBLISHED BOOLEAN NOT NULL);
SELECT * FROM book
SELECT * FROM book WHERE id = $1
INSERT INTO book (title, author, published) VALUES ($1, $2, $3)
UPDATE book SET tile=value, author=value, publsihed=value WHERE id-VALUE
DELETE FROM book WHERE id =$1
