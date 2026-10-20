BEGIN;
CREATE TEMP TABLE actors(actor_id SERIAL PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(100) NOT NULL,age DATE NOT NULL,number_oscars SMALLINT NOT NULL);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Matt','Damon','1970-10-08',5),('George','Clooney','1961-05-06',2),('David','Tennant','1971-04-18',0),('Morgan','Freeman','1937-06-01',1),('Will','Smith','1968-09-25',1);

UPDATE actors SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon';
UPDATE actors SET number_oscars=4 WHERE first_name='George' AND last_name='Clooney' RETURNING *;
ALTER TABLE actors RENAME COLUMN age TO birthdate;
DELETE FROM actors WHERE actor_id=(SELECT actor_id FROM actors ORDER BY actor_id DESC LIMIT 1) RETURNING *;
ROLLBACK; -- Repeatable practice: undo all example changes.
