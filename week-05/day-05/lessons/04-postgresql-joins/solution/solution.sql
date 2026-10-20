BEGIN;
CREATE TEMP TABLE actors(actor_id SERIAL PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(100) NOT NULL,age DATE NOT NULL,number_oscars SMALLINT NOT NULL);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Matt','Damon','1970-10-08',5),('George','Clooney','1961-05-06',2),('David','Tennant','1971-04-18',0),('Morgan','Freeman','1937-06-01',1),('Will','Smith','1968-09-25',1);

CREATE TEMP TABLE countries(country_id INT PRIMARY KEY,country_name TEXT NOT NULL);
INSERT INTO countries VALUES (1,'Morocco'),(2,'France'),(10,'Japan');
SELECT * FROM actors a INNER JOIN countries c ON a.actor_id=c.country_id;
SELECT * FROM actors a LEFT OUTER JOIN countries c ON a.actor_id=c.country_id;
SELECT * FROM actors a RIGHT OUTER JOIN countries c ON a.actor_id=c.country_id;
SELECT * FROM actors a FULL OUTER JOIN countries c ON a.actor_id=c.country_id;
ROLLBACK; -- Repeatable practice: undo all example changes.
