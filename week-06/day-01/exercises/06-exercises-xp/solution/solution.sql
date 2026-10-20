BEGIN;
-- Exercise 1
SELECT * FROM language;
SELECT f.title,f.description,l.name FROM film f JOIN language l USING(language_id);
SELECT f.title,f.description,l.name FROM language l LEFT JOIN film f USING(language_id);
CREATE SCHEMA bootcamp_reviews_answer;
CREATE TABLE bootcamp_reviews_answer.new_film(id SERIAL PRIMARY KEY,name TEXT NOT NULL);
INSERT INTO bootcamp_reviews_answer.new_film(name) VALUES ('Learning SQL'),('Database Adventures');
CREATE TABLE bootcamp_reviews_answer.customer_review(
 review_id SERIAL PRIMARY KEY,
 film_id INT NOT NULL REFERENCES bootcamp_reviews_answer.new_film(id) ON DELETE CASCADE,
 language_id INT NOT NULL REFERENCES public.language(language_id),
 title TEXT NOT NULL,score SMALLINT NOT NULL CHECK(score BETWEEN 1 AND 10),
 review_text TEXT,last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);
INSERT INTO bootcamp_reviews_answer.customer_review(film_id,language_id,title,score,review_text)
SELECT 1,language_id,'Useful',9,'A practical lesson' FROM language ORDER BY language_id LIMIT 1;
INSERT INTO bootcamp_reviews_answer.customer_review(film_id,language_id,title,score,review_text)
SELECT 2,language_id,'Enjoyable',8,'Clear explanations' FROM language ORDER BY language_id LIMIT 1;
DELETE FROM bootcamp_reviews_answer.new_film WHERE id=1;
SELECT * FROM bootcamp_reviews_answer.customer_review; -- Only film 2's review remains.
-- Exercise 2
UPDATE film SET language_id=(SELECT language_id FROM language ORDER BY language_id DESC LIMIT 1) WHERE film_id IN (1,2);
SELECT conname,pg_get_constraintdef(oid) FROM pg_constraint WHERE conrelid='public.customer'::regclass AND contype='f';
-- customer.address_id and customer.store_id must reference existing parent rows.
DROP TABLE bootcamp_reviews_answer.customer_review;
SELECT count(*) AS outstanding_rentals FROM rental WHERE return_date IS NULL;
SELECT f.film_id,f.title,f.replacement_cost,count(*) AS outstanding_copies
FROM rental r JOIN inventory i USING(inventory_id) JOIN film f USING(film_id)
WHERE r.return_date IS NULL GROUP BY f.film_id,f.title,f.replacement_cost ORDER BY f.replacement_cost DESC,f.film_id LIMIT 30;
-- 1. Sumo wrestler + Penelope Monroe
SELECT DISTINCT f.* FROM film f JOIN film_actor fa USING(film_id) JOIN actor a USING(actor_id)
WHERE f.description ILIKE '%sumo%' AND a.first_name ILIKE 'Penelope' AND a.last_name ILIKE 'Monroe';
-- 2. Documentary, under one hour, R rated
SELECT f.* FROM film f JOIN film_category fc USING(film_id) JOIN category c USING(category_id)
WHERE c.name='Documentary' AND f.length<60 AND f.rating='R';
-- 3. Matthew Mahan; use a half-open range to include all of August 1.
SELECT DISTINCT f.* FROM customer c JOIN rental r USING(customer_id) JOIN payment p USING(rental_id) JOIN inventory i USING(inventory_id) JOIN film f USING(film_id)
WHERE c.first_name ILIKE 'Matthew' AND c.last_name ILIKE 'Mahan' AND p.amount>4
AND r.return_date>=TIMESTAMP '2005-07-28' AND r.return_date<TIMESTAMP '2005-08-02';
-- 4. Boat in title/description, descending replacement cost.
SELECT DISTINCT f.* FROM customer c JOIN rental r USING(customer_id) JOIN inventory i USING(inventory_id) JOIN film f USING(film_id)
WHERE c.first_name ILIKE 'Matthew' AND c.last_name ILIKE 'Mahan' AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%') ORDER BY f.replacement_cost DESC;
ROLLBACK; -- Repeatable practice: undo all example changes.
