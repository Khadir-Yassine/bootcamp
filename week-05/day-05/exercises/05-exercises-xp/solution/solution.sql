BEGIN;
CREATE TEMP TABLE items(item_id SERIAL PRIMARY KEY,item_name TEXT NOT NULL,price NUMERIC(10,2) NOT NULL CHECK(price>=0));
INSERT INTO items(item_name,price) VALUES ('Small Desk',100),('Large desk',300),('Fan',80);
CREATE TEMP TABLE customers(customer_id SERIAL PRIMARY KEY,first_name TEXT NOT NULL,last_name TEXT NOT NULL);
INSERT INTO customers(first_name,last_name) VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson');

-- Exercise 1
SELECT * FROM items ORDER BY price,item_id;
SELECT * FROM items WHERE price>=80 ORDER BY price DESC,item_id;
SELECT first_name,last_name FROM customers ORDER BY first_name,last_name LIMIT 3;
SELECT last_name FROM customers ORDER BY last_name DESC;
ROLLBACK; -- Repeatable practice: undo all example changes.
