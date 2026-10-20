# Introduction to PostgreSQL

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Introduction to PostgreSQL**

---

### **About PostgreSQL**

PostgreSQL is an object-relational database management system.

---

**Install PostgreSQL**

- Mac Users : Follow this [Tutorial](https://flaviocopes.com/postgres-how-to-install/)- **Don’t go further than the line **`psql postgres`

- Windows and Linux Users : Follow this [Tutorial](https://www.guru99.com/download-install-postgresql.html) and Install the last updated version of PostgreSQL

- Linux user: Set your password for the postgres user, using these commands
  
  `shell sudo -u postgres psql`
  
  then
  
  `shell \password postgres`

---

Check if pgAdmin was installed during the process (ie. Look in the apps in your computer).
If pgAdmin is not installed, [download it here](https://www.pgadmin.org/download/)

---

**PgAdmin**

Once you have installed PostgreSQL successfully on your machine, open up **pgAdmin**. pgAdmin lets you do regular database-related tasks through a friendly graphical interface.

When you open up pgAdmin, you will see at the top-left corner the Server
–> Click on it

If you see a server named “PostgreSQL -version-” enlisted in the interface.
Connect to the server by entering the password that you gave during the installation. And you are good to go

---

If you don’t have any server, follow the below process

1. Right Click on Server -> Register new server

2. Under General tab enter a name for your server. ANY name you would like, it doesn’t matter. You could enter PgServer1 or whatever. Don’t change anything else.

3. Switch to Connection Tab
  
  ```javascript
Hostname/ Address : localhost
Port : 5432
Maintenance database : postgres (always)
Username : (the username you've chosen) - If you didn't change it, the username is by default postgres
Password : (the password you've chosen) - If you didn't set it, the password is by default root
```

4. Hit Save.

5. For Mac users, if you receive this error : postgres role doesn’t exist.
  
  1. Close pgadmin
  2. Open your terminal:
  
  - paste the command : `psql postgres` and enter. You will see `postgres#`
  - paste the command : `SHOW data_directory;` and enter. **Copy the path shown**
  - exit the psql shell by writing `\q`
  - cd into the path you copied and create a superuser. For example, if the path is `/opt/homebrew/bin/`:
  
  ```javascript
/opt/homebrew/bin/createuser -s postgres
```
  - paste the command : `psql postgres` and enter
  - paste the command : `\password postgres` and set a password for the postgres user
  - go back to Pgadmin and do the steps from 1 to 4

Another way, For Mac users, if you receive this error : postgres role doesn’t exist

1. Close pgadmin

2. Open your terminal:
  
  - paste the command : `psql postgres` and enter. You will see `postgres#`
  - paste the command : `createuser --superuser postgres` and enter
  - paste the command : `\password postgres` and set a password for the postgres user
  - go back to Pgadmin and do the steps from 1 to 4

---

**1. Create a database**

First, we need to create a new database to save our tables. Our database will hold data about actors, movies, and more....
In **pgAdmin** : Right Click on ‘Database’ and create a new database called **Hollywood**.

**2. DataTypes**

Before creating a table, we need to see the data types existing in PostgreSQL.

A data type specifies what kind of data you want to store in the table field.

Let’s see :

- **Numeric datatype**
  
  ![Illustration](https://raw.githubusercontent.com/devtlv/studentsGitHub/refs/heads/master/Python/Week7/Day1/numeric%20type.png)

- **String datatype**
  
  ![String datatype](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/string%20type.png?raw=true)

- **Date/time datatype**
  
  ![Date/time datatype](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/date%20time%20type.png?raw=true)

- **Other datatypes**
  
  ![Other type](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/other%20type.png?raw=true)

**3. Constraints**

Following are some of the most commonly used constraints available in SQL :

- **NOT NULL** Constraint − Ensures that a column cannot have a NULL value.

- **DEFAULT** Constraint − Provides a default value for a column when none is specified.

- **UNIQUE** Constraint − Prevents two records from having identical values in a particular column

- **PRIMARY KEY**− Uniquely identifies each row/record in a database table. It enforces the column values to be non-null and unique.

---

**4. Creating a table**

To create a table in **pgAdmin**, right-click on the created database and select *CREATE Script* from the options.

![script pgAdmin](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/script%20pgadmin.png?raw=true)

- To comment lines in the Script, you can click on `ctrl+/` or `command+/`

*Syntax to create a table*

```javascript
CREATE TABLE table_name (
 column_name TYPE column_constraint,
 table_constraint table_constraint
)
```

Create this table

```javascript
CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)
```

---

**Primary Key**

A primary key is a field in a table that uniquely identifies each row/record in a database table. Primary keys must contain unique values. A primary key column cannot have NULL values.

A table can have only one primary key, which may consist of single or multiple fields. When multiple fields are used as a primary key, they are called a composite key.

If a table has a primary key defined on any field(s), you cannot have two records with the same value of that field(s).

Whenever you create a table you specify which column is the primary key:

![Illustration](https://raw.githubusercontent.com/devtlv/studentsGitHub/refs/heads/master/Python/Week7/Day1/create%20table%20pgadmin.png)

- To execute the script, click on the lightning. You should receive the response “Query returned successfully.”

- Then go to *Schemas/Public/Tables*, you will see your table there

**5. Reading/viewing the data from the table : SELECT Statement**

[Documentation on SELECT](https://neon.tech/postgresql/postgresql-tutorial/postgresql-select)

According to the documentation: “One of the most common tasks, when you work with the database, is to query data from tables by using the `SELECT` statement.”

A database query is a request for data from a database. Usually, the request is to retrieve data; however, data can also be manipulated using queries. The data can come from one or more tables or even other queries.

*Syntax*

```javascript
SELECT
 column_1,
 column_2,
 ...
FROM
 table_name;
```

If we want to retrieve all the data from a table, we use the asterisk (*), which tells the database to retrieve everything.

```javascript
SELECT * FROM table_name;
```

Therefore, to retrieve everything from our table *actors*, in a Script, we can write :

```javascript
SELECT * FROM actors;
```

You will get the table with the columns. But the table is empty.

---

**6. Inserting some records : INSERT Statement**

[Documentation on INSERT](https://www.postgresqltutorial.com/postgresql-insert/)

According to the documentation:”PostgreSQL provides the `INSERT` statement that allows you to insert one or more rows into a table at a time.

*Syntax*

```javascript
INSERT INTO table(column1, column2, …)
VALUES (value1, value2, …);
```

To add multiple rows into a table at a time, you use the following syntax:

```javascript
INSERT INTO table (column1, column2, …)
VALUES
    (value1, value2, …),
    (value1, value2, …) ,...;
```

Insert these records to the table *actors* and execute the Script

```javascript
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);
```

Then, retrieve the table.

You will see that each of the actors has an actor-id even though we didn’t pass any. It’s because of the **SERIAL** pseudo-type that we passed in the creation of the table.

[Documentation on SERIAL](https://neon.tech/postgresql/postgresql-tutorial/postgresql-serial)

---

**Exercise**

- Add two more female actors in the table actors. Add them one by one

- Add three more actors, add all of them in one query !

- Retrieve everything from the table actors

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
