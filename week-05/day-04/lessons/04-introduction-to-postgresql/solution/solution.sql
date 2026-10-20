BEGIN;
CREATE TEMP TABLE actors(actor_id SERIAL PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(100) NOT NULL,age DATE NOT NULL,number_oscars SMALLINT NOT NULL);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Matt','Damon','1970-10-08',5),('George','Clooney','1961-05-06',2),('David','Tennant','1971-04-18',0),('Morgan','Freeman','1937-06-01',1),('Will','Smith','1968-09-25',1);

INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Meryl','Streep','1949-06-22',3);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Viola','Davis','1965-08-11',1);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Ada','Example','1980-01-01',0),('Ben','Example','1985-02-02',0),('Cara','Example','1990-03-03',0);
SELECT * FROM actors ORDER BY actor_id;
ROLLBACK; -- Repeatable practice: undo all example changes.
