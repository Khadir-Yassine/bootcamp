# HAVING and UNION clauses

Course source: [Geeks Institute](https://www.geeks.institute/).
## **HAVING and UNION clauses**

---

### **HAVING**

We often use the `HAVING` clause in conjunction with the `GROUP BY` clause to filter group rows that do not satisfy a specified condition.

*Syntax*

```javascript
SELECT
    column_1,
    aggregate_function (column_2)
FROM
    tbl_name
GROUP BY
    column_1
HAVING
    condition;
```

Example of HAVING - Get actors grouped by oscar count, only groups with 2+ actors

```javascript
SELECT number_oscars, COUNT(*) as actor_count
FROM actors 
GROUP BY number_oscars
HAVING COUNT(*) >= 2;
```

---

### **UNION**

The `UNION` operator combines result sets of two or more SELECT statements into a single result set.

*Syntax*

```javascript
SELECT
    column_1,
    column_2
FROM
    tbl_name_1
UNION
SELECT
    column_1,
    column_2
FROM
    tbl_name_2;
```

Example of UNION - Combine counts of actors with and without oscars

```javascript
SELECT 'Has Oscar' as status, COUNT(*) as count
FROM actors
WHERE number_oscars > 0
UNION
SELECT 'No Oscar' as status, COUNT(*) as count
FROM actors 
WHERE number_oscars = 0;
```

## Important:

Be careful if you `SELECT *` from the two tables, but they don’t have the same number of columns, you will get an error:

```javascript
-- ERROR:  each UNION query must have the same number of columns
```

So you have to set the same number of columns in each `SELECT`

---

## **Useful Resources**

- [Documentation HAVING](https://neon.tech/postgresql/postgresql-tutorial/postgresql-having)

- [Documentation UNION](https://neon.tech/postgresql/postgresql-tutorial/postgresql-union)

---
