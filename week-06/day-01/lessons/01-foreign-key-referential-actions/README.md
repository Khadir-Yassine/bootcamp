# Foreign Key Referential Actions

Course source: [Geeks Institute](https://www.geeks.institute/).
Yesterday we talked about Foreign Key, but what will happen to the rows in the child table when a row in the parent table is deleted?

Let’s say that we have two new tables :

- **colors** table

- and **cars** table.

The colors table is the **parent** table, and the car table is the **child** table.

```javascript
SELECT cars.car_id, cars.car_name, colors.name as color
FROM cars
INNER JOIN colors
ON cars.car_color = colors.color_id;
```

![car/colors](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day3/cars%20colors.png?raw=true)

---

### **ON DELETE RESTRICT**

```javascript
CREATE TABLE cars(
car_id SERIAL PRIMARY KEY,
car_color INTEGER REFERENCES colors (color_id) ON DELETE RESTRICT,
car_name TEXT);
```

The clause `ON DELETE RESTRICT` written during the child table’s creation prevents deleting a record from the parent table if there is a foreign key associated with the child table.
The clause will reject the delete or update operation for the parent table.

In the example, we cannot delete the color “yellow” (Parent Table) because the parent row has a referencing child row: the car “BMW”.

```javascript
DELETE FROM colors where name = 'yellow';
-- ERROR:  update or delete on table "colors" violates foreign key constraint -- "cars_car_color_fkey" on table "cars"
-- DETAIL:  Key (color_id)=(3) is still referenced from table "cars".
```

---

### **ON DELETE CASCADE**

The `DELETE CASCADE` constraint *will* allow you to delete a parent record, but its corresponding child record will be deleted as well.

When you delete a row from the colors table, you also want to delete all rows in the cars table that reference the row in the colors table.

```javascript
CREATE TABLE cars(
car_id SERIAL PRIMARY KEY,
car_color INTEGER REFERENCES colors (color_id) ON DELETE CASCADE,
car_name TEXT);
```

```javascript
DELETE FROM colors where name = 'pink';
--DELETE 1
```

You see below that the color “pink” was deleted (Parent Table) **AND** the car with the color pink: “Bugatti” (Child Table) was also deleted. We deleted all the rows in the **cars** table that references the row in the **colors** table.

```javascript
SELECT cars.car_id, cars.car_name, colors.name as color
FROM colors
INNER JOIN cars
ON colors.color_id = cars.car_id;
```

![car/colors2](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day3/cars%20colors%202.png?raw=true)

---

# Understanding PostgreSQL Referential Actions

PostgreSQL offers several ways to handle what happens to related data when you update or delete records in a parent table. These are known as "referential actions" and help maintain the integrity of relationships between tables.

### NO ACTION

**What it means:** No special action is taken when parent data is modified or deleted.

- When a parent record is deleted or updated, PostgreSQL checks if any child records reference it

- If child records exist, PostgreSQL will raise an error by default (unless the constraint is deferred)

- The transaction will be blocked if there are dependent records

**Real-world example:**

```javascript
CREATE TABLE departments (
  dept_id SERIAL PRIMARY KEY,
  dept_name TEXT NOT NULL
);

CREATE TABLE employees (
  emp_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  dept_id INTEGER REFERENCES departments(dept_id) ON DELETE NO ACTION
);
```

If you try to delete a department that has employees, PostgreSQL will prevent the deletion with an error.

**Important distinction:** This is similar to RESTRICT but differs in that the constraint check can be deferred until later in the transaction if the constraint is defined as DEFERRABLE.

### CASCADE

**What it means:** Changes to parent records automatically propagate to child records.

- When a parent record is deleted, all child records that reference it are also deleted

- When a parent record's key is updated, the corresponding foreign key values in child records are automatically updated

**Real-world example:**

```javascript
CREATE TABLE departments (
  dept_id SERIAL PRIMARY KEY,
  dept_name TEXT NOT NULL
);

CREATE TABLE employees (
  emp_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  dept_id INTEGER REFERENCES departments(dept_id) ON DELETE CASCADE
);
```

If you delete a department, all employees in that department are automatically deleted.

For ON UPDATE CASCADE:

```javascript
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_code VARCHAR(20) UNIQUE
);

CREATE TABLE inventory (
  inventory_id SERIAL PRIMARY KEY,
  product_code VARCHAR(20) REFERENCES products(product_code) ON UPDATE CASCADE
);
```

If you change a product_code in the products table, all matching inventory records are automatically updated.

### SET NULL

**What it means:** Child record references are set to NULL when parent records are modified or deleted.

- Requires that the foreign key column(s) are nullable

- Creates a disconnection between tables rather than enforcing strict referential integrity

**Real-world example:**

```javascript
CREATE TABLE authors (
  author_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author_id INTEGER REFERENCES authors(author_id) ON DELETE SET NULL
);
```

If an author is deleted, all their books remain in the database but have their author_id set to NULL, indicating the author information is no longer available.

### SET DEFAULT

**What it means:** Child record references are reset to their default values when parent records are modified or deleted.

- Requires that the foreign key column(s) have default values specified

- Child records retain valid references to existing data

**Real-world example:**

```javascript
CREATE TABLE status_types (
  status_id SERIAL PRIMARY KEY,
  status_name TEXT NOT NULL
);

CREATE TABLE tasks (
  task_id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  status_id INTEGER DEFAULT 1 REFERENCES status_types(status_id) ON DELETE SET DEFAULT
);
```

If a status type is deleted, all tasks with that status revert to the default status (status_id=1, perhaps "Pending").

## RESTRICT vs NO ACTION

While these appear similar, they have a subtle difference:

- **RESTRICT**: The check is performed immediately when the update/delete is attempted

- **NO ACTION**: If the constraint is DEFERRABLE, the check can be postponed until the end of the transaction

```javascript
-- With RESTRICT, this will immediately fail if there are children
CREATE TABLE departments (
  dept_id SERIAL PRIMARY KEY,
  dept_name TEXT NOT NULL
);

CREATE TABLE employees (
  emp_id SERIAL PRIMARY KEY, 
  name TEXT NOT NULL,
  dept_id INTEGER REFERENCES departments(dept_id) ON DELETE RESTRICT
);

-- With DEFERRABLE NO ACTION, you could:
CREATE TABLE departments (
  dept_id SERIAL PRIMARY KEY,
  dept_name TEXT NOT NULL
);

CREATE TABLE employees (
  emp_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  dept_id INTEGER REFERENCES departments(dept_id) 
    ON DELETE NO ACTION DEFERRABLE INITIALLY DEFERRED
);
```

In the DEFERRABLE case, you could delete department records and their employees in any order within the same transaction, as long as by the end of the transaction no employee references a non-existent department.

## Best Practices

1. **ON DELETE CASCADE** is powerful but dangerous - use carefully as it can lead to unexpected data loss

2. **ON UPDATE CASCADE** is often useful for maintaining integrity when primary keys change

3. **SET NULL/DEFAULT** provide middle ground between CASCADE and RESTRICT

4. Always consider the business meaning of your database relationships when choosing actions

5. For critical data, consider using application-level logic instead of automatic cascading actions for better control and logging

## Visual Representation of Foreign Key Actions

```javascript
┌───────────────┐     ┌──────────────┐
│  DEPARTMENTS  │     │  EMPLOYEES   │
├───────────────┤     ├──────────────┤
│ dept_id (PK)  │◄────┤ dept_id (FK) │
│ dept_name     │     │ emp_id (PK)  │
└───────────────┘     │ name         │
                      └──────────────┘
```

When deleting a department:

- **NO ACTION/RESTRICT**: Error if employees exist in that department

- **CASCADE**: Delete all employees in that department

- **SET NULL**: Set dept_id to NULL for all employees in that department

- **SET DEFAULT**: Set dept_id to default value for all employees in that department

## **Useful Resources**

- [Deleting Records With Foreign Keys](https://www.youtube.com/watch?v=EWy9UP3VBAw)
