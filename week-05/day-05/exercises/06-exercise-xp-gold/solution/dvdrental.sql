BEGIN;
SELECT rating,count(*) FROM film GROUP BY rating ORDER BY rating;
SELECT * FROM film WHERE rating IN ('G','PG-13');
SELECT * FROM film WHERE rating IN ('G','PG-13') AND length<120 AND rental_rate<3 ORDER BY title;
-- Clearly fictional personal details, applied to a single known customer in a rollback transaction.
UPDATE customer SET first_name='Demo',last_name='Learner' WHERE customer_id=1;
UPDATE address SET address='123 Example Street' WHERE address_id=(SELECT address_id FROM customer WHERE customer_id=1);
ROLLBACK;
