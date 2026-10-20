BEGIN;
CREATE TEMP TABLE students(id SERIAL PRIMARY KEY,last_name TEXT NOT NULL,first_name TEXT NOT NULL,birth_date DATE NOT NULL);
INSERT INTO students(first_name,last_name,birth_date) VALUES ('Marc','Benichou','1998-11-02'),('Yoan','Cohen','2010-12-03'),('Lea','Benichou','1987-07-27'),('Amelia','Dux','1996-04-07'),('David','Grez','2003-06-14'),('Omer','Simpson','1980-10-03');
-- Demonstration identity; replace these sample values with your own if desired.
INSERT INTO students(first_name,last_name,birth_date) VALUES ('Demo','Learner','2000-01-01');

SELECT first_name,last_name,birth_date FROM students ORDER BY last_name,first_name,id LIMIT 4;
SELECT first_name,last_name,birth_date FROM students ORDER BY birth_date DESC,id LIMIT 1;
SELECT first_name,last_name,birth_date FROM students ORDER BY id OFFSET 2 LIMIT 3;
ROLLBACK; -- Repeatable practice: undo all example changes.
