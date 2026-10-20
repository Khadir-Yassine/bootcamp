BEGIN;
CREATE TEMP TABLE actors(actor_id SERIAL PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(100) NOT NULL,age DATE NOT NULL,number_oscars SMALLINT NOT NULL);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Matt','Damon','1970-10-08',5),('George','Clooney','1961-05-06',2),('David','Tennant','1971-04-18',0),('Morgan','Freeman','1937-06-01',1),('Will','Smith','1968-09-25',1);

SELECT avg(number_oscars) AS average_oscars FROM actors;
SELECT DISTINCT number_oscars FROM actors ORDER BY number_oscars;
-- If full representative rows are wanted, choose one deterministically per Oscar count.
SELECT DISTINCT ON(number_oscars) * FROM actors ORDER BY number_oscars,actor_id;
SELECT * FROM actors WHERE age>DATE '1970-01-01';
SELECT * FROM actors WHERE first_name IN ('David','Morgan','Will');
ROLLBACK; -- Repeatable practice: undo all example changes.
