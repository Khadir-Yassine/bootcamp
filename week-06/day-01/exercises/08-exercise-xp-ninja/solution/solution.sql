BEGIN;
SELECT f.* FROM film f WHERE f.rating IN ('G','PG') AND EXISTS(
 SELECT 1 FROM inventory i WHERE i.film_id=f.film_id AND NOT EXISTS(
 SELECT 1 FROM rental r WHERE r.inventory_id=i.inventory_id AND r.return_date IS NULL));
CREATE SCHEMA bootcamp_waiting_answer;
CREATE TABLE bootcamp_waiting_answer.waiting_list(
 waiting_id SERIAL PRIMARY KEY,
 customer_id INT NOT NULL REFERENCES public.customer(customer_id),
 film_id INT NOT NULL REFERENCES public.film(film_id),
 joined_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(customer_id,film_id));
-- A title-level list lets a child take the next available copy at either store.
INSERT INTO bootcamp_waiting_answer.waiting_list(customer_id,film_id)
SELECT c.customer_id,f.film_id FROM (SELECT customer_id FROM customer ORDER BY customer_id LIMIT 2) c
CROSS JOIN (SELECT film_id FROM film WHERE rating IN ('G','PG') ORDER BY film_id LIMIT 1) f;
SELECT f.film_id,f.title,count(w.waiting_id) AS waiting_count FROM film f
LEFT JOIN bootcamp_waiting_answer.waiting_list w USING(film_id)
WHERE f.rating IN ('G','PG') GROUP BY f.film_id,f.title ORDER BY waiting_count DESC,f.film_id;
-- When a child receives a copy, the application deletes that child's film-level entry.
DELETE FROM bootcamp_waiting_answer.waiting_list WHERE waiting_id=(SELECT min(waiting_id) FROM bootcamp_waiting_answer.waiting_list) RETURNING *;
ROLLBACK; -- Repeatable practice: undo all example changes.
