BEGIN;
CREATE TEMP TABLE actors(actor_id SERIAL PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(100) NOT NULL,age DATE NOT NULL,number_oscars SMALLINT NOT NULL);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Matt','Damon','1970-10-08',5),('George','Clooney','1961-05-06',2),('David','Tennant','1971-04-18',0),('Morgan','Freeman','1937-06-01',1),('Will','Smith','1968-09-25',1);

SELECT * FROM actors ORDER BY actor_id LIMIT 4;
SELECT * FROM actors ORDER BY last_name DESC,actor_id LIMIT 4;
SELECT * FROM actors WHERE first_name ILIKE '%e%';
SELECT * FROM actors WHERE number_oscars>=5;
ROLLBACK; -- Repeatable practice: undo all example changes.
