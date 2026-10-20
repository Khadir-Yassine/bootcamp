# Foreign Key, Inner Join

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Foreign Key, Inner Join**

---

### **Foreign key**

A FOREIGN KEY is a key used to link two tables together.

A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

The table containing the foreign key is called the **child table**, and the table containing the candidate key is called the referenced or **parent table**.

A table can have multiple foreign keys depending on its relationships with other tables.

![Foreign key](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day2/Postgresql-foreign-key-illustration.png?raw=true)

---

### **FOREIGN KEY constraint**

Let’s create a movies table with the `FOREIGN KEY` constraint. Our database will now have the table actors - the parent table and the table movies - the child table.

```javascript
CREATE TABLE movies(
 movie_id SERIAL,
 movie_title VARCHAR (50) NOT NULL,
 movie_story TEXT,
 actor_playing_id INTEGER,
 PRIMARY KEY (movie_id),
 FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
);
```

Let’s say, that :

- an actor can play in many movies

- a movie can only feature one actor

Let’s add some values into the movies table

```javascript
INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
    ( 'Good Will Hunting', 
    'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
    ( 'Oceans Eleven', 
    'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
    (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));
```

**movies table**

![insert foreign key](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day2/movie%20table.png?raw=true)

---

### **Inner Join**

Joining allows you to relate data in one table to the data in other tables. There are several kinds of joins that include`INNER JOIN, OUTER JOIN` and self-join. Today we will focus on the `INNER JOIN`.

The INNER JOIN keyword selects records that have matching values in both tables.

To join actors table to movies table:

- First, you specify the column in both tables from which you want to select data, in the `SELECT` clause

- Second, you specify the main table, i.e. `actors` in the `FROM` clause.

- Third, you specify the table that the main table joins to, i.e. movies in the `INNER JOIN` clause. In addition, you put a join condition after the `ON` keyword i.e, `actors.primary_key=movies.foreign_key`.

*INNER JOIN Syntax*

```javascript
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

Example to run:

```javascript
SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id;
```

if we run this, we get:

![inner join foreign key](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day2/innerjoin.png?raw=true)

**Exercise**

- Create another table called producers, with a foreign key:
  
  - movie_id. to link the producers table to the movies table

- Insert some record to the producers table

- Display movies and their producers using an INNER JOIN
