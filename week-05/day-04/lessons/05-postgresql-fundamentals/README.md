# PostgreSQL Fundamentals

Course source: [Geeks Institute](https://www.geeks.institute/).
## **PostgreSQL Fundamentals**

---

## **What you will learn**

- The clause: WHERE, LIKE, ORDER BY, LIMIT …

---

## **Useful Resources**

- [SQL tutorial on tables](https://launchschool.com/books/sql_first_edition/read/multi_tables)

- [PostgreSQL Cheat Sheet #1](../../../../references/postgresql-cheat-sheet-reference.md)

- [PostgreSQL Cheat Sheet #2](../../../../references/postgresql-cheat-sheet.md)

---

**SELECT columns from a table**

To select only one column from a table :

```javascript
SELECT
   first_name
FROM
   actors;
```

To select multiple columns from a table :

```javascript
SELECT
   first_name,
   last_name,
   age
FROM
   actors;
```

[Tutorial Here](https://www.dofactory.com/sql/select)

---

`WHERE`

[Documentation on WHERE](https://neon.tech/postgresql/postgresql-tutorial/postgresql-where)
[Tutorial Here](https://www.dofactory.com/sql/where)

You can use PostgreSQL `WHERE` clause to filter rows returned from the `SELECT` statement. The `condition` must evaluate to true, false, or unknown.

*Syntax*

```javascript
SELECT select_list
FROM table_name
WHERE condition;
```

You can use comparison operators:

| Operator | Description |
| --- | --- |
| = | Equal |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |
| <> or != | Not equal |
| AND | Logical operator AND |
| OR | Logical operator OR |

```javascript
SELECT * FROM actors WHERE first_name = 'Matt';

SELECT * FROM actors WHERE number_oscars >= 3;

SELECT last_name FROM actors WHERE first_name != 'Matt' ;
```

---

**AND/OR/NOT**

You may create multiple criteria for filtering rows using `AND` , `OR` , `NOT`

```javascript
SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  AND 
last_name = 'Damon' ;
-- 1 row is retrieved, with the field last_name and first_name
```

---

![and](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/and%20-%20sql.png?raw=true)

---

```javascript
SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  AND 
last_name = 'Clooney' ;
-- 0 row is retrieved, because there is not an existing actor in the table, with the first_name "Matt" and the last_name "Clooney"
```

---

![and](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/and%232%20-%20sql.png?raw=true)

---

```javascript
SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  OR  
number_oscars = 2 ;
-- 2 rows are retrieved. 
```

---

![or](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/or%20-%20sql.png?raw=true)

---

Another example:

```javascript
SELECT * FROM customers WHERE (age > 30 OR num_of_children > 2) AND is_vip = TRUE;
```

You can use `NOT` to inverse the result of a condition.

The query above is equivalent to:

```javascript
SELECT * FROM customers WHERE (age > 30 OR num_of_children > 2) AND NOT (is_vip = FALSE);
```

---

**IS NULL/IS NOT NULL**

When comparing a column to `NULL` you should use the column `IS NULL` syntax.

- To retrieve all the customers with a phone number you should execute:

```javascript
SELECT * FROM customers WHERE phone_number IS NOT NULL;
```

- To retrieve all customers without age you should execute:

```javascript
SELECT * FROM customers WHERE age IS NULL;
```

---

**LIKE**

Sometimes you don’t want to compare a column to an exact value.
For instance you’d like to search for a specific keyword.

- Let’s say we are searching for actors that have the string ‘mon’ in their last_name.

```javascript
SELECT * FROM actors WHERE last_name LIKE '%mon%';
```

It will retrieve any record that has the string `mon` in the last_name column.

- If we wanted to retrieve all the last_names that END with “y” we’d execute the following:

```javascript
SELECT first_name FROM actors WHERE last_name LIKE '%y'
-- 1 row : first_name -- George
```

- If we wanted to retrieve all the last_names that START with “da” we’d execute the following:

```javascript
SELECT first_name FROM actors WHERE last_name LIKE 'da%'
-- 0 row 
```

`LIKE` is case sensitive. In Postgres, you can use `ILIKE` to perform case insensitive wildcard matches.

- If we wanted to retrieve all the first_names that START with “da” we’d execute the following:

```javascript
SELECT first_name FROM actors WHERE last_name ILIKE 'da%'
-- 1 row  : first_name -- Matt
```

[Documentation on LIKE](https://neon.tech/postgresql/postgresql-tutorial/postgresql-like)

---

**LIMIT & OFFSET**

We use `LIMIT` to limit the number of results we retrieve to a specific number.

*Syntax*

```javascript
SELECT
    *
FROM
    table_name
LIMIT n;
```

- If we want to retrieve the first actor

```javascript
SELECT * FROM actors LIMIT 1;
```

- You can combine it with a `WHERE` clause as well:

```javascript
SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 1;
```

The `OFFSET` keyword is an optional keyword that allows you to skip the first N rows.

- If we want to skip the first two actors and display the next three actors.

```javascript
SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 3 OFFSET 2;
```

---

**ORDER BY**

When you query data from a table, PostgreSQL returns the rows in an unspecified order. To sort the result set, you use the `ORDER BY` clause in the `SELECT` statement.

The `ORDER BY` clause allows you to sort rows returned from a `SELECT` statement in ascending or descending order based on the specified criteria.

```javascript
SELECT
    column_1,
    column_2
FROM
    table_name
ORDER BY
    column_1 [ASC | DESC],
    column_2 [ASC | DESC];
```

- If we want to get all the actors ordered in ascending order of the first_name (ie. sorted alphabetically by the “first_name” column)

```javascript
SELECT * FROM actors WHERE age > '1960-01-01' ORDER BY first_name ASC
```

![order](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/order%20-%20sql.png?raw=true)

---

**Exercise**

Use the table actors to retrieve :

- The first 4 actors

- The first 4 actors ordered in descending order of the last_name (ie. sorted DESCENDING by the "last_name" column))

- The actors that have the letter 'e' in their first_name

- The actors that got at least 5 oscars

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
