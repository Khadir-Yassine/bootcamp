BEGIN;
CREATE TEMP TABLE actors(actor_id SERIAL PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(100) NOT NULL,age DATE NOT NULL,number_oscars SMALLINT NOT NULL);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Matt','Damon','1970-10-08',5),('George','Clooney','1961-05-06',2),('David','Tennant','1971-04-18',0),('Morgan','Freeman','1937-06-01',1),('Will','Smith','1968-09-25',1);

SELECT count(*) AS actor_count FROM actors;
-- Missing required columns raise not_null_violation. Catch it so the script continues.
DO $$ BEGIN
  BEGIN INSERT INTO actors(first_name) VALUES ('Incomplete');
  EXCEPTION WHEN not_null_violation THEN RAISE NOTICE 'Expected NOT NULL rejection'; END;
END $$;
-- Empty strings are not NULL: they are allowed for VARCHAR unless a CHECK forbids them.
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('','','2000-01-01',0);
SELECT * FROM actors WHERE first_name='';
ROLLBACK; -- Repeatable practice: undo all example changes.
