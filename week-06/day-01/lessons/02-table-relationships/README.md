# Table Relationships

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Table relationships: one to one, one to many, many to many

---

## **Useful Resources**

- [Article on one to many relationship](https://www.lifewire.com/one-to-many-relationships-1019756)

- [Explanation on table relationships](https://medium.com/@prevailexcellent/laravel-many-to-many-relationship-complete-tutorial-16025acd5450)

---

### **One-To-One**

A one-to-one relationship between two entities exists when a particular entity instance exists in one table, and it can have only one associated entity instance in another table.

**Examples:**

- One person has one passport, and a passport has only one owner

- One movie has one scenario, and a scenario belongs only to one movie

In the database world, this sort of relationship is implemented like this: the id that is the PRIMARY KEY of the movies table is used as both the FOREIGN KEY and PRIMARY KEY of the scenarios table.

Let’s start our Hollywood database from scratch :

```javascript
CREATE TABLE movies (
  movie_id SERIAL,
  movie_title VARCHAR(45) NOT NULL,
  released_date date NOT NULL,
  PRIMARY KEY (movie_id)
);

/*
 one to one: a movie has one scenario
*/

CREATE TABLE scenarios (
  pk_movie_id INTEGER NOT NULL,
  scenario_story TEXT NOT NULL,
  PRIMARY KEY (pk_movie_id),
  CONSTRAINT fk_movie_id FOREIGN KEY (pk_movie_id) REFERENCES movies (movie_id)
);
```

The field *movie_id* is :

- the Primary Key of the table movies

- and the Primary Key and the Foreign Key and of the table scenarios.

```javascript
INSERT into movies(movie_title, released_date) VALUES 
('Good Will Hunting', '1997-12-02'),
('The Martian', '2015-09-11'),
('Oceans Twelve', '2004-12-10'),
('Up in the Air', '2009-09-5');

INSERT into scenarios(pk_movie_id, scenario_story) VALUES 
((SELECT movie_id FROM movies where movie_title = 'Up in the Air'),
'Ryan Bingham enjoys living out of a suitcase for his job, 
traveling around the country firing people, but finds that lifestyle 
threatened by the presence of a potential love interest, and a new hire.'),
((SELECT movie_id FROM movies where movie_title = 'The Martian'),
'In 2035, the crew of the Ares III mission to Mars is exploring 
Acidalia Planitia on Martian solar day (sol) 18 of their 31-sol expedition. ');
```

```javascript
SELECT movies.movie_title, movies.released_date, scenarios.scenario_story as scenario
FROM movies
FULL OUTER JOIN scenarios
ON movies.movie_id = scenarios.pk_movie_id;
```

---

### **One-to-Many**

A one-to-many relationship exists between two entities if an entity instance in one of the tables can be associated with multiple records (entity instances) in the other table.

The opposite relationship does not exist; that is, each entity instance in the second table can only be associated with one entity instance in the first table.

Examples:

- A review belongs to only one book. A book has many reviews.

- Category and films, film has only one category, but category can belong to a lot of films

In our database, a movie has only one director, but a director can direct many movies.

In the database world, this sort of relationship is implemented by ensuring that the director_id is the **PRIMARY KEY** of the `directors` table and is a **FOREIGN KEY** of the `movies` table.

In a one-to-many relationship, the place of the foreign key is important!

```javascript
CREATE TABLE directors (
  director_id SERIAL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (director_id)
);

/*
 one to many: A director directs many movies
*/

CREATE TABLE movies (
  movie_id SERIAL,
  movie_title VARCHAR(45) NOT NULL,
  released_date date NOT NULL,
  fk_director_id INTEGER NOT NULL,
  PRIMARY KEY (movie_id),
  FOREIGN KEY (fk_director_id) REFERENCES directors(director_id) ON DELETE CASCADE
);
```

---

### **Many-to-Many**

A many-to-many relationship exists between two entities if, for one entity instance, there may be multiple records in the other table and vice versa.

Example:

- A user can check out many books. A book can be checked out by many users (over time).

In the database world, this relationship is implemented by introducing a third cross-reference table that holds the relationship between the two entities.

An actor can play in many movies in our database, and a movie can star many actors.

Here, the third cross-reference table is called `actors_movies`:

```javascript
CREATE TABLE actors_movies (
  actor_id INTEGER NOT NULL,
  movie_id INTEGER NOT NULL,
  actor_role VARCHAR(30) NOT NULL,
  is_lead_role BOOLEAN NOT NULL,
  PRIMARY KEY (actor_id, movie_id),
  FOREIGN KEY (actor_id) REFERENCES actors(actor_id) ON UPDATE CASCADE,
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON UPDATE CASCADE
);
```

```javascript
INSERT into actors_movies(actor_id, movie_id, actor_role, is_lead_role) VALUES 
((SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney' ), 
(SELECT movie_id FROM movies where movie_title = 'Up in the Air'), 'Ryan Bingham', TRUE),

((SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney' ), 
(SELECT movie_id FROM movies where movie_title = 'Oceans Twelve'), 'Danny Ocean', FALSE),

((SELECT actor_id FROM actors where first_name = 'Matt' AND last_name = 'Damon' ),
(SELECT movie_id FROM movies where movie_title = 'Good Will Hunting'),'Will Hunting', TRUE);
```

![actors movies](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day3/actors%20movies.png?raw=true)
