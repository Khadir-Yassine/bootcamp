BEGIN;
CREATE TEMP TABLE actors(actor_id SERIAL PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(100) NOT NULL,age DATE NOT NULL,number_oscars SMALLINT NOT NULL);
INSERT INTO actors(first_name,last_name,age,number_oscars) VALUES ('Matt','Damon','1970-10-08',5),('George','Clooney','1961-05-06',2),('David','Tennant','1971-04-18',0),('Morgan','Freeman','1937-06-01',1),('Will','Smith','1968-09-25',1);

CREATE TEMP TABLE movies(movie_id SERIAL PRIMARY KEY,movie_title TEXT NOT NULL,actor_playing_id INT REFERENCES actors(actor_id));
INSERT INTO movies(movie_title,actor_playing_id) VALUES ('Good Will Hunting',1),('Oceans Eleven',1);
CREATE TEMP TABLE producers(producer_id SERIAL PRIMARY KEY,producer_name TEXT NOT NULL,movie_id INT NOT NULL REFERENCES movies(movie_id));
INSERT INTO producers(producer_name,movie_id) VALUES ('Demo Producer A',1),('Demo Producer B',2);
SELECT m.movie_title,p.producer_name FROM movies m INNER JOIN producers p USING(movie_id);
ROLLBACK; -- Repeatable practice: undo all example changes.
