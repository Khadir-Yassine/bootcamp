BEGIN;
CREATE TEMP TABLE users(user_id SERIAL PRIMARY KEY,name TEXT NOT NULL);
CREATE TEMP TABLE product_orders(order_id SERIAL PRIMARY KEY,user_id INT NOT NULL REFERENCES users(user_id),created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP);
CREATE TEMP TABLE items(item_id SERIAL PRIMARY KEY,order_id INT NOT NULL REFERENCES product_orders(order_id),name TEXT NOT NULL,price NUMERIC(12,2) NOT NULL CHECK(price>=0));
INSERT INTO users(name) VALUES ('Lina'),('Adam');
INSERT INTO product_orders(user_id) VALUES (1),(2),(1);
INSERT INTO items(order_id,name,price) VALUES (1,'Notebook',20),(1,'Pen',5),(2,'Desk',100);
CREATE FUNCTION pg_temp.order_total(wanted_order INT) RETURNS NUMERIC LANGUAGE sql STABLE AS $$
 SELECT coalesce(sum(price),0) FROM pg_temp.items WHERE order_id=wanted_order;
$$;
CREATE FUNCTION pg_temp.user_order_total(wanted_user INT,wanted_order INT) RETURNS NUMERIC LANGUAGE sql STABLE AS $$
 SELECT coalesce(sum(i.price),0) FROM pg_temp.product_orders o LEFT JOIN pg_temp.items i USING(order_id)
 WHERE o.user_id=wanted_user AND o.order_id=wanted_order;
$$;
SELECT pg_temp.order_total(1) AS expected_25,pg_temp.order_total(3) AS expected_0;
SELECT pg_temp.user_order_total(1,1) AS expected_25,pg_temp.user_order_total(2,1) AS expected_0;
DO $$ BEGIN IF pg_temp.order_total(1)<>25 OR pg_temp.user_order_total(2,1)<>0 THEN RAISE EXCEPTION 'Total check failed';END IF;END $$;
ROLLBACK; -- Repeatable practice: undo all example changes.
