BEGIN;
CREATE TEMP TABLE customers(customer_id INT PRIMARY KEY,name TEXT NOT NULL);
CREATE TEMP TABLE orders(order_id INT PRIMARY KEY,customer_id INT REFERENCES customers(customer_id),order_value NUMERIC(12,2) NOT NULL);
INSERT INTO customers VALUES(1,'Lina'),(2,'Adam'),(3,'Omar');
INSERT INTO orders VALUES (1,1,60),(2,1,60),(3,2,150),(4,3,20);
SELECT c.name,sum(o.order_value) AS customer_total
FROM customers c JOIN orders o USING(customer_id)
GROUP BY c.customer_id,c.name
HAVING sum(o.order_value)>(SELECT avg(order_value) FROM orders);
ROLLBACK; -- Repeatable practice: undo all example changes.
