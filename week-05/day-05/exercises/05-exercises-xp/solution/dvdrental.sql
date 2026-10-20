-- Run against the restored dvdrental database: psql -d dvdrental -f dvdrental.sql
SELECT * FROM customer;
SELECT first_name || ' ' || last_name AS full_name FROM customer;
SELECT DISTINCT create_date FROM customer ORDER BY create_date;
SELECT * FROM customer ORDER BY first_name DESC,customer_id;
SELECT film_id,title,description,release_year,rental_rate FROM film ORDER BY rental_rate,film_id;
SELECT address,phone FROM address WHERE district='Texas';
SELECT * FROM film WHERE film_id IN (15,150);
-- Example favorite title; replace with your preference.
SELECT film_id,title,description,length,rental_rate FROM film WHERE title ILIKE 'Academy Dinosaur';
SELECT film_id,title,description,length,rental_rate FROM film WHERE title ILIKE 'Ac%';
SELECT * FROM film ORDER BY rental_rate,film_id LIMIT 10;
SELECT * FROM film ORDER BY rental_rate,film_id OFFSET 10 FETCH FIRST 10 ROWS ONLY;
SELECT c.first_name,c.last_name,p.amount,p.payment_date FROM customer c JOIN payment p USING(customer_id) ORDER BY c.customer_id,p.payment_date;
SELECT f.* FROM film f WHERE NOT EXISTS(SELECT 1 FROM inventory i WHERE i.film_id=f.film_id);
SELECT ci.city,co.country FROM city ci JOIN country co USING(country_id) ORDER BY co.country,ci.city;
SELECT c.customer_id,c.first_name,c.last_name,p.amount,p.payment_date,p.staff_id FROM customer c JOIN payment p USING(customer_id) ORDER BY p.staff_id,c.customer_id,p.payment_date;
