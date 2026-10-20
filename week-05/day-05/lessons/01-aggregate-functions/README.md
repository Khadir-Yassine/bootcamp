# Aggregate Functions

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Aggregate Functions**

---

### **What is an aggregate function ?**

An **aggregate function** is a special kind of function that operates on several rows of a query at once, returning a single result.

| Function | Description |
| --- | --- |
| `avg(expression)` | Returns the average of the `expression` values from all rows in a group. |
| `count(expression)` | Returns the number of values, per each aggregated group of rows, for which `expression` is not `NULL` |
| `max(expression)` | Returns the maximum value of `expression` in the grouped rows |
| `min(expression)` | Returns the minimum value of `expression` in the grouped rows |
| `stddev(expression)` | Returns the standard deviation of the values of `expression` in the grouped rows |
| `sum(expression)` | Returns the sum of the values of `expression` in the grouped rows |
| `variance(expression)` | Returns the variance of the values of `expression` in the grouped rows |

---

**Alias : AS keyword**

SQL aliases are used to give a table, or a column in a table, a temporary name.
Aliases are often used to make column names more readable.
An alias only exists for the duration of the query.

**Alias Column Syntax**

```javascript
SELECT column_name AS alias_name
FROM table_name;
```

**Alias Table Syntax**

```javascript
SELECT column_name(s)
FROM table_name AS alias_name;
```

Example: get the first_name and age with aliases

```javascript
SELECT first_name AS name_actor, age AS birth_date FROM actors;
```

---

**Some examples of aggregations**

- Get the average number of oscars received by all the actors

```javascript
SELECT avg(number_oscars) AS average_number_oscars FROM actors;
```

- Get the number of first_name

```javascript
SELECT count(first_name) AS total_names FROM actors;
```

- Get the number of actors

```javascript
SELECT count(*) FROM actors;
```

- Get the maximum number of oscars

```javascript
SELECT max(number_oscars) AS best_actor FROM actors;
-- 1 row : best_actor -- 5
```

- Get the minimum number of oscars

```javascript
SELECT min(number_oscars) AS worst_actor FROM actors;
-- 1 row : worst_actor -- 2
```

- Get the sum of the oscars

```javascript
SELECT sum(number_oscars) AS total_oscars FROM actors;
```

---

### **Some more keywords**

**DISTINCT keyword**

The use of the `DISTINCT` keyword in an aggregate expression causes only grouped rows with unique values to be evaluated by the function. Any duplicate rows will be suppressed.

[Documentation SELECT DISTINCT](https://www.postgresqltutorial.com/postgresql-select-distinct/)

*Syntax*

```javascript
SELECT
   DISTINCT column_1
FROM
   table_name;
```

Let’s add another actor with first name ‘Matt’

```javascript
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Ross','03/01/1970', 0);

SELECT * FROM actors;
```

Now we have two actors with the same first_name but not the same last_name. If we want to SELECT rows with unique first_name values, we will get ‘Matt’ once, even if they are a few ‘Matt’ in the table.

```javascript
SELECT DISTINCT first_name FROM actors;
```

```javascript
SELECT DISTINCT first_name FROM actors ORDER BY first_name DESC;
```

---

**IN/NOT IN operator syntax**

You use the `IN` operator in the `WHERE` clause to check if a value matches any value in a list of values. The syntax of the `IN` operator is as follows:

```javascript
value IN (value1,value2,...)
```

- Get the actors which name is Matt, Lea or Davis

```javascript
SELECT * FROM actors WHERE first_name in ('Matt','Lea','Davis');
```

- Get the actors which name is not Matt, Lea or Davis

```javascript
SELECT * FROM actors WHERE first_name not in ('Matt','Lea','Davis');
```

---

**BETWEEN AND operator syntax**

You use the `BETWEEN` operator to match a value against a range of values. The following illustrates the syntax of the `BETWEEN` operator:

```javascript
value BETWEEN low AND high;
```

- Get the actors which birthdate is between two dates

```javascript
SELECT * FROM actors WHERE age between '1961-01-01' and '1962-01-01';
```

---

**GROUP BY clause**

The `GROUP BY` clause divides the rows returned from the `SELECT` statement into groups. For each group, you can apply an aggregate function e.g., `SUM()` to calculate the sum of items or `COUNT()` to get the number of items in the groups.

The `GROUP BY` clause must appear right after the `FROM` or `WHERE` clause. Following the `GROUP BY` clause is one column or a list of comma-separated columns.

Aggregate functions are generally only used in queries which make use of the `GROUP BY` clause to associate rows together by criteria.

*Syntax*

```javascript
SELECT 
   column_1, 
   column_2,
   aggregate_function(column_3)
FROM 
   table_name
GROUP BY 
   column_1,
   column_2;
```

**Example**:

Let’s say that this year, George Clooney received 1 more oscar. So we have to add a new record to our table:

```javascript
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES('George','Clooney','06/05/1961 ', 1);
```

We want to know how many oscars has each actor. Therefore we have to use the aggregate function `sum()`

If you don’t use `GROUP BY` while using an aggregate function, with several other fields, you will get an error :

```javascript
SELECT first_name, last_name, sum(number_oscars) FROM actors;
-- ERROR:  column "actors.first_name" must appear in the GROUP BY clause or be used in an aggregate function
-- LINE 31: SELECT first_name, last_name, sum(number_oscars) FROM actors...
```

So we have to write:

```javascript
SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name;
```

We can also play with other aggregate functions:

```javascript
SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name 
ORDER BY min(number_oscars);
```

**Exercise**

In the table actors, write the following commands:

- Get the average number of oscars in the table

- Get distinct actors depending on their number of oscars

- Get the actors born after 01/01/1970

- Get the actors which names are `David`, `Morgan` or `Will`

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
