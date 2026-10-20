BEGIN;
CREATE TEMP TABLE students(id SERIAL PRIMARY KEY,last_name TEXT NOT NULL,first_name TEXT NOT NULL,birth_date DATE NOT NULL);
INSERT INTO students(first_name,last_name,birth_date) VALUES ('Marc','Benichou','1998-11-02'),('Yoan','Cohen','2010-12-03'),('Lea','Benichou','1987-07-27'),('Amelia','Dux','1996-04-07'),('David','Grez','2003-06-14'),('Omer','Simpson','1980-10-03');
-- Demonstration identity; replace these sample values with your own if desired.
INSERT INTO students(first_name,last_name,birth_date) VALUES ('Demo','Learner','2000-01-01');

SELECT * FROM students ORDER BY id;
SELECT first_name,last_name FROM students;
SELECT first_name,last_name FROM students WHERE id=2;
SELECT first_name,last_name FROM students WHERE last_name='Benichou' AND first_name='Marc';
SELECT first_name,last_name FROM students WHERE last_name='Benichou' OR first_name='Marc';
SELECT first_name,last_name FROM students WHERE first_name ILIKE '%a%';
SELECT first_name,last_name FROM students WHERE first_name ILIKE 'a%';
SELECT first_name,last_name FROM students WHERE first_name ILIKE '%a';
SELECT first_name,last_name FROM students WHERE first_name ILIKE '%a_';
-- A single ID cannot be both 1 and 3: literal AND returns zero rows.
SELECT first_name,last_name FROM students WHERE id=1 AND id=3;
-- If the intended question meant either ID:
SELECT first_name,last_name FROM students WHERE id IN (1,3);
SELECT * FROM students WHERE birth_date>=DATE '2000-01-01';
ROLLBACK; -- Repeatable practice: undo all example changes.
