# Update, Delete, Alter

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Update, Delete, Alter**

---

### **UPDATE a record**

To change the values of the records in a table, you use the `UPDATE` statement.

*Syntax*

```javascript
UPDATE table
SET column1 = value1,
    column2 = value2 ,...
WHERE
    condition;
```

If you want to change the values of the records of the whole table, you omit the `WHERE` clause :

```javascript
UPDATE table
SET column1 = value1,
    column2 = value2 ,...
```

`UPDATE` with returning clause:

```javascript
UPDATE table
SET column1 = value1,
    column2 = value2 ,...
WHERE
    condition;
RETURNING 
    column1, 
    column2;
```

---

**Some examples**

- Change the birthdate of ‘Matt Damon’

```javascript
UPDATE actors SET age='1970-01-01' WHERE first_name='Matt' AND last_name='Damon';
```

- Change the birthdate of ‘Matt Damon’ and return the changed record

```javascript
UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;
```

![img1](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day2/update%20and%20returning.png?raw=true)

---

### **DELETE a record**

To delete data from a table, you use PostgreSQL `DELETE` statement.

*Syntax*

```javascript
DELETE FROM table
WHERE condition;
```

To delete all rows in a table, you can omit the `WHERE` clause :

```javascript
DELETE FROM table;
```

You can also return the deleted record using `RETURNING`

- Delete the fourth record in the table and return it

```javascript
DELETE FROM actors WHERE actor_id=4
RETURNING actor_id, first_name, last_name, number_oscars;
```

---

### **TRUNCATE a table**

To delete all rows in a table, you can also use the `TRUNCATE` statement:

The `TRUNCATE TABLE` statement removes all rows from a table without scanning it. This is the reason why it is faster than the `DELETE` statement.

In addition, the `TRUNCATE TABLE` statement reclaims the storage right away.

`RESTART IDENTITY` restarts the SERIAL column.

(Example : If you want to add more records after you deleted all the rows, the SERIAL column will start again from 1.)

```javascript
TRUNCATE TABLE table_name RESTART IDENTITY;
```

---

### **ALTER a table**

To change the existing table structure, you use PostgreSQL `ALTER TABLE` statement.

*Syntax*

```javascript
ALTER TABLE table_name action;
```

- Add a new column

```javascript
ALTER TABLE table_name ADD COLUMN new_column_name TYPE;
```

- Remove an existing column

```javascript
ALTER TABLE table_name DROP COLUMN column_name;
```

- Rename an existing column

```javascript
ALTER TABLE table_name RENAME COLUMN column_name TO new_column_name;
```

- Rename a table

```javascript
ALTER TABLE table_name RENAME TO new_table_name;
```

- Change the data type of a column

```javascript
ALTER TABLE table_name
ALTER COLUMN column_name1 [SET DATA] TYPE new_data_type;
ALTER COLUMN column_name2 [SET DATA] TYPE new_data_type;
```

---

### **DROP a table**

To remove an existing table from the database, you use the `DROP TABLE` statement.

```javascript
DROP TABLE IF EXISTS table_name;
```

---

**Exercise**

In the table actors, write the following commands:

- Update the first name of Matt Damon to `Maty`

- Update the number of oscars of George Clooney to 4, and return the updated record

- Rename the `age` column by `birthdate`

- Delete one actor and return it
