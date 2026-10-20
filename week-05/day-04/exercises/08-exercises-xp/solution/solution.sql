BEGIN;
CREATE TEMP TABLE items(item_id SERIAL PRIMARY KEY,item_name TEXT NOT NULL,price NUMERIC(10,2) NOT NULL CHECK(price>=0));
INSERT INTO items(item_name,price) VALUES ('Small Desk',100),('Large desk',300),('Fan',80);
CREATE TEMP TABLE customers(customer_id SERIAL PRIMARY KEY,first_name TEXT NOT NULL,last_name TEXT NOT NULL);
INSERT INTO customers(first_name,last_name) VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson');

-- 1. All items
SELECT * FROM items;
-- 2. Above 80 (exclusive)
SELECT * FROM items WHERE price>80;
-- 3. At or below 300
SELECT * FROM items WHERE price<=300;
-- 4. No matching rows: no Smith was inserted.
SELECT * FROM customers WHERE last_name='Smith';
-- 5. Greg and Sandra Jones
SELECT * FROM customers WHERE last_name='Jones';
-- 6. Exclude Scott
SELECT * FROM customers WHERE first_name<>'Scott';
ROLLBACK; -- Repeatable practice: undo all example changes.
