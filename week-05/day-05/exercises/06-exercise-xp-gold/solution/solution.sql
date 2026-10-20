BEGIN;
CREATE TEMP TABLE students(id SERIAL PRIMARY KEY,last_name TEXT NOT NULL,first_name TEXT NOT NULL,birth_date DATE NOT NULL);
INSERT INTO students(first_name,last_name,birth_date) VALUES ('Marc','Benichou','1998-11-02'),('Yoan','Cohen','2010-12-03'),('Lea','Benichou','1987-07-27'),('Amelia','Dux','1996-04-07'),('David','Grez','2003-06-14'),('Omer','Simpson','1980-10-03');
-- Demonstration identity; replace these sample values with your own if desired.
INSERT INTO students(first_name,last_name,birth_date) VALUES ('Demo','Learner','2000-01-01');

-- Exercise 2: students (Exercise 1 uses dvdrental.sql)
UPDATE students SET birth_date='1998-11-02' WHERE last_name='Benichou' AND first_name IN ('Lea','Marc');
UPDATE students SET last_name='Guez' WHERE first_name='David' AND last_name='Grez';
DELETE FROM students WHERE first_name='Lea' AND last_name='Benichou';
SELECT count(*) FROM students;
SELECT count(*) FROM students WHERE birth_date>DATE '2000-01-01';
ALTER TABLE students ADD COLUMN math_grade SMALLINT CHECK(math_grade BETWEEN 0 AND 100);
UPDATE students SET math_grade=80 WHERE id=1;
UPDATE students SET math_grade=90 WHERE id IN (2,4);
UPDATE students SET math_grade=40 WHERE id=6;
SELECT count(*) FROM students WHERE math_grade>83;
INSERT INTO students(first_name,last_name,birth_date,math_grade) SELECT first_name,last_name,birth_date,70 FROM students WHERE id=6;
SELECT first_name,last_name,count(math_grade) AS total_grade FROM students GROUP BY first_name,last_name ORDER BY first_name,last_name;
SELECT sum(math_grade) AS total FROM students;
-- Exercise 3: purchases
CREATE TEMP TABLE items(item_id SERIAL PRIMARY KEY,item_name TEXT NOT NULL,price NUMERIC(10,2) NOT NULL CHECK(price>=0));
INSERT INTO items(item_name,price) VALUES ('Small Desk',100),('Large desk',300),('Fan',80);
CREATE TEMP TABLE customers(customer_id SERIAL PRIMARY KEY,first_name TEXT NOT NULL,last_name TEXT NOT NULL);
INSERT INTO customers(first_name,last_name) VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson');
CREATE TEMP TABLE purchases(id SERIAL PRIMARY KEY,customer_id INT REFERENCES customers(customer_id) ON DELETE SET NULL,item_id INT REFERENCES items(item_id),quantity_purchased INT NOT NULL CHECK(quantity_purchased>0));
INSERT INTO purchases(customer_id,item_id,quantity_purchased) VALUES
((SELECT customer_id FROM customers WHERE first_name='Scott' AND last_name='Scott'),(SELECT item_id FROM items WHERE item_name='Fan'),1),
((SELECT customer_id FROM customers WHERE first_name='Melanie' AND last_name='Johnson'),(SELECT item_id FROM items WHERE item_name='Large desk'),10),
((SELECT customer_id FROM customers WHERE first_name='Greg' AND last_name='Jones'),(SELECT item_id FROM items WHERE item_name='Small Desk'),2);

SELECT * FROM purchases;
SELECT p.*,c.first_name,c.last_name FROM purchases p JOIN customers c USING(customer_id);
SELECT * FROM purchases WHERE customer_id=5;
-- A row cannot refer to two item IDs at once: use IN to list both desk types.
SELECT p.*,i.item_name FROM purchases p JOIN items i USING(item_id) WHERE i.item_name IN ('Large desk','Small Desk');
SELECT c.first_name,c.last_name,i.item_name FROM purchases p JOIN customers c USING(customer_id) JOIN items i USING(item_id);
INSERT INTO purchases(customer_id,item_id,quantity_purchased) VALUES (1,NULL,1);
-- This succeeds: a nullable foreign key permits NULL and only checks non-NULL values.
SELECT * FROM purchases WHERE item_id IS NULL;
ROLLBACK; -- Repeatable practice: undo all example changes.
