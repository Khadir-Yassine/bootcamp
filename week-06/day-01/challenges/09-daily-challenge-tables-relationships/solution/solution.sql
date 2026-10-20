BEGIN;
-- Part I: UNIQUE(customer_id) enforces at most one profile per customer.
CREATE TEMP TABLE customer(id SERIAL PRIMARY KEY,first_name TEXT,last_name TEXT NOT NULL);
CREATE TEMP TABLE customer_profile(id SERIAL PRIMARY KEY,isLoggedIn BOOLEAN DEFAULT false,customer_id INT NOT NULL UNIQUE REFERENCES customer(id));
INSERT INTO customer(first_name,last_name) VALUES ('John','Doe'),('Jerome','Lalu'),('Lea','Rive');
INSERT INTO customer_profile(customer_id,isLoggedIn) VALUES ((SELECT id FROM customer WHERE first_name='John'),true),((SELECT id FROM customer WHERE first_name='Jerome'),false);
SELECT c.first_name FROM customer c JOIN customer_profile p ON p.customer_id=c.id WHERE p.isLoggedIn=true;
SELECT c.first_name,p.isLoggedIn FROM customer c LEFT JOIN customer_profile p ON p.customer_id=c.id;
SELECT count(*) AS not_logged_in FROM customer c LEFT JOIN customer_profile p ON p.customer_id=c.id WHERE p.isLoggedIn IS NOT TRUE;
-- Part II
CREATE TEMP TABLE book(book_id SERIAL PRIMARY KEY,title TEXT NOT NULL,author TEXT NOT NULL);
INSERT INTO book(title,author) VALUES ('Alice In Wonderland','Lewis Carroll'),('Harry Potter','J.K Rowling'),('To kill a mockingbird','Harper Lee');
CREATE TEMP TABLE student(student_id SERIAL PRIMARY KEY,name TEXT NOT NULL UNIQUE,age SMALLINT CHECK(age BETWEEN 0 AND 15));
INSERT INTO student(name,age) VALUES ('John',12),('Lera',11),('Patrick',10),('Bob',14);
CREATE TEMP TABLE library(book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,borrowed_date DATE NOT NULL,PRIMARY KEY(book_fk_id,student_fk_id));
INSERT INTO library VALUES
((SELECT book_id FROM book WHERE title='Alice In Wonderland'),(SELECT student_id FROM student WHERE name='John'),'2022-02-15'),
((SELECT book_id FROM book WHERE title='To kill a mockingbird'),(SELECT student_id FROM student WHERE name='Bob'),'2021-03-03'),
((SELECT book_id FROM book WHERE title='Alice In Wonderland'),(SELECT student_id FROM student WHERE name='Lera'),'2021-05-23'),
((SELECT book_id FROM book WHERE title='Harry Potter'),(SELECT student_id FROM student WHERE name='Bob'),'2021-08-12');
SELECT * FROM library;
SELECT s.name,b.title FROM library l JOIN student s ON s.student_id=l.student_fk_id JOIN book b ON b.book_id=l.book_fk_id;
SELECT avg(s.age) AS average_age FROM library l JOIN student s ON s.student_id=l.student_fk_id JOIN book b ON b.book_id=l.book_fk_id WHERE b.title='Alice In Wonderland';
DELETE FROM student WHERE name='Bob';
SELECT * FROM library; -- Bob's two junction rows were deleted automatically.
DO $$ BEGIN IF (SELECT count(*) FROM library)<>2 THEN RAISE EXCEPTION 'Cascade check failed';END IF;END $$;
ROLLBACK; -- Repeatable practice: undo all example changes.
