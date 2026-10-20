BEGIN;
-- Exercise 1
SELECT * FROM rental WHERE return_date IS NULL;
SELECT c.customer_id,c.first_name,c.last_name,count(*) AS outstanding_count
FROM customer c JOIN rental r USING(customer_id) WHERE r.return_date IS NULL GROUP BY c.customer_id,c.first_name,c.last_name;
-- actor_info may provide a useful overview; explicit joins avoid parsing its aggregated text.
SELECT * FROM actor_info WHERE first_name ILIKE 'Joe' AND last_name ILIKE 'Swank';
SELECT f.* FROM film f JOIN film_actor fa USING(film_id) JOIN actor a USING(actor_id)
JOIN film_category fc USING(film_id) JOIN category c USING(category_id)
WHERE a.first_name ILIKE 'Joe' AND a.last_name ILIKE 'Swank' AND c.name='Action';
-- Exercise 2: store locations, total viewing time, then available viewing time.
SELECT count(*) AS store_count FROM store;
SELECT s.store_id,ci.city,co.country FROM store s JOIN address a USING(address_id) JOIN city ci USING(city_id) JOIN country co USING(country_id);
SELECT i.store_id,sum(f.length) AS minutes,sum(f.length)/60.0 AS hours,sum(f.length)/1440.0 AS days
FROM inventory i JOIN film f USING(film_id) GROUP BY i.store_id;
CREATE TEMP VIEW available_inventory AS
 SELECT i.inventory_id,i.store_id,f.film_id,f.title,f.description,f.length
 FROM inventory i JOIN film f USING(film_id)
 WHERE NOT EXISTS(SELECT 1 FROM rental r WHERE r.inventory_id=i.inventory_id AND r.return_date IS NULL);
SELECT store_id,sum(length) AS minutes,sum(length)/60.0 AS hours,sum(length)/1440.0 AS days FROM available_inventory GROUP BY store_id;
SELECT c.* FROM customer c JOIN address a USING(address_id)
WHERE a.city_id IN (SELECT a2.city_id FROM store s JOIN address a2 USING(address_id));
SELECT c.* FROM customer c JOIN address a USING(address_id) JOIN city ci USING(city_id)
WHERE ci.country_id IN (SELECT ci2.country_id FROM store s JOIN address a2 USING(address_id) JOIN city ci2 USING(city_id));
-- A CHECK cannot query the category table; filter the relationship during INSERT.
CREATE TEMP TABLE safe_films(film_id INT PRIMARY KEY,title TEXT NOT NULL,description TEXT,length INT,
 CHECK((title||' '||coalesce(description,'')) !~* '(beast|monster|ghost|dead|zombie|undead)'));
INSERT INTO safe_films
 SELECT f.film_id,f.title,f.description,f.length FROM film f
 WHERE NOT EXISTS(SELECT 1 FROM film_category fc JOIN category c USING(category_id) WHERE fc.film_id=f.film_id AND c.name='Horror')
 AND (f.title||' '||coalesce(f.description,'')) !~* '(beast|monster|ghost|dead|zombie|undead)';
SELECT * FROM safe_films;
SELECT sum(length) AS minutes,sum(length)/60.0 AS hours,sum(length)/1440.0 AS days FROM safe_films;
-- Shelter stock totals count each physical available DVD, not just each distinct title.
SELECT a.store_id,sum(a.length) AS minutes,sum(a.length)/60.0 AS hours,sum(a.length)/1440.0 AS days
FROM available_inventory a JOIN safe_films s USING(film_id) GROUP BY a.store_id;
ROLLBACK; -- Repeatable practice: undo all example changes.
