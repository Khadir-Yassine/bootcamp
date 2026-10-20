# PostgreSQL Joins

Course source: [Geeks Institute](https://www.geeks.institute/).
## **PostgreSQL Joins**

---

![joins](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day3/joins%20.png?raw=true)

### **Joins**

PostgreSQL JOINS are used to retrieve data from multiple tables.

We saw `INNER JOIN` but they are more typical of PostgreSQL Joins:

- INNER JOIN (also called simple join)

- LEFT OUTER JOIN (also called LEFT JOIN)

- RIGHT OUTER JOIN (called also RIGHT JOIN)

- FULL OUTER JOIN (also called FULL JOIN)

---

### **INNER JOIN**

INNER JOINS returns all rows from multiple tables where the join condition is met. `INNER JOIN` returns a result set containing a row in the left table that matches the row in the right table.

It returns the records where *table1* and *table2* intersect.

```javascript
SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id;
```

![inner join](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day3/innerjoin.png?raw=true)

Here it returns all rows from the actors and movies tables where there is a **matching** `actor_id` value in both the actors and movies tables.

---

### **LEFT OUTER JOIN**

The `LEFT JOIN` returns a complete set of rows from the left table with the matching rows if available from the right table. If there is no match, the right side will have null values.

```javascript
SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
LEFT OUTER JOIN movies
ON actors.actor_id = movies.actor_playing_id;
```

![left join foreign key](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day3/left%20join.png?raw=true)

---

### **RIGHT OUTER JOIN**

The `RIGHT JOIN` is a reversed version of the left join. It produces a result set that contains all rows from the right table with matching rows from the left table. If there is no match, the left side will have null values.

```javascript
SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
RIGHT OUTER JOIN movies
ON actors.actor_id = movies.actor_playing_id;
```

---

### **FULL OUTER JOIN**

The `FULL JOIN` produces a result set that contains all rows from both the left and right tables, with the matching rows from both sides where available. If there is no match, the missing side contains null values.

```javascript
SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
FULL OUTER JOIN movies
ON actors.actor_id = movies.actor_playing_id;
```

**Exercise**

Create another table, called countries, with two fields : country_id and coutry_name. It has no foreign key. It's a table to test the PostgreSQL Joins.

- Use INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, and FULL OUTER JOIN to join the table countries with the table actors, depending on the comparaison of their primary key

- Look at the results, and analyse them to understand the difference between the types of PostgreSQL Joins

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
