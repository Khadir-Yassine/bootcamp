BEGIN;
CREATE TEMP TABLE items(item_id SERIAL PRIMARY KEY,item_name TEXT NOT NULL,price NUMERIC(10,2) NOT NULL CHECK(price>=0));
INSERT INTO items(item_name,price) VALUES ('Small Desk',100),('Large desk',300),('Fan',80);
CREATE TEMP TABLE customers(customer_id SERIAL PRIMARY KEY,first_name TEXT NOT NULL,last_name TEXT NOT NULL);
INSERT INTO customers(first_name,last_name) VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson');
CREATE TEMP TABLE purchases(id SERIAL PRIMARY KEY,customer_id INT REFERENCES customers(customer_id) ON DELETE SET NULL,item_id INT REFERENCES items(item_id),quantity_purchased INT NOT NULL CHECK(quantity_purchased>0));
INSERT INTO purchases(customer_id,item_id,quantity_purchased) VALUES
((SELECT customer_id FROM customers WHERE first_name='Scott' AND last_name='Scott'),(SELECT item_id FROM items WHERE item_name='Fan'),1),
((SELECT customer_id FROM customers WHERE first_name='Melanie' AND last_name='Johnson'),(SELECT item_id FROM items WHERE item_name='Large desk'),10),
((SELECT customer_id FROM customers WHERE first_name='Greg' AND last_name='Jones'),(SELECT item_id FROM items WHERE item_name='Small Desk'),2);

SELECT first_name,last_name FROM (SELECT first_name,last_name FROM customers ORDER BY first_name DESC,last_name DESC LIMIT 2) last_two ORDER BY first_name,last_name;
DELETE FROM purchases WHERE customer_id=(SELECT customer_id FROM customers WHERE first_name='Scott' AND last_name='Scott');
SELECT * FROM customers WHERE first_name='Scott' AND last_name='Scott';
SELECT p.*,c.first_name,c.last_name FROM purchases p LEFT JOIN customers c USING(customer_id);
SELECT p.*,c.first_name,c.last_name FROM purchases p INNER JOIN customers c USING(customer_id);
-- The source then asks for Scott's purchase with blank customer fields. That contradicts
-- deleting his purchase: deleted rows cannot be restored by any JOIN. Demonstrate the
-- likely intended alternative: recreate purchase, then delete customer with SET NULL.
INSERT INTO purchases(customer_id,item_id,quantity_purchased) SELECT customer_id,3,1 FROM customers WHERE first_name='Scott';
DELETE FROM customers WHERE first_name='Scott' AND last_name='Scott';
SELECT p.*,c.first_name,c.last_name FROM purchases p LEFT JOIN customers c USING(customer_id);
SELECT p.*,c.first_name,c.last_name FROM purchases p INNER JOIN customers c USING(customer_id);
ROLLBACK; -- Repeatable practice: undo all example changes.
