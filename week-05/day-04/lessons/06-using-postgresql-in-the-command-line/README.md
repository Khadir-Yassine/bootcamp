# Using PostgreSQL in the Command-line

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Using PostgreSQL in the Command-line**

---

### **psql**

The default installation of PostgreSQL comes with a `psql` prompt which is the terminal-like interface of PostgreSQL.
`pgAdmin`, on the other hand, provides a graphical interface for operating with databases in PostgreSQL.

According to the Documentation: “`psql` is a terminal-based front-end to PostgreSQL. It enables you to type in queries interactively, issue them to PostgreSQL, and see the query results. Alternatively, input can be from a file or from command line arguments. In addition,`psql` provides a number of meta-commands and various shell-like features to facilitate writing scripts and automating a wide variety of tasks.”

---

**psql shell**

With the `psql` shell you can do exactly the same statements as in `pgAdmin`.

In your command prompt, write the command `psql -u postgres`

`postgres` represents the default username for the PostgreSQL server. If you have also not created a new user, then your default username will also be `postgres`.

Then, enter your password. You should see this :

```javascript
postgres=#
```

**Mac users**

If you receive this error `-bash: psql: command not found`

Add this command to your terminal `export PATH=/Library/PostgreSQL/15/bin:$PATH`

then `psql -u postgres`

---

### **Some commands**

1. *Switch to postgres User* : `sudo -i -u postgres`

2. *Create Database*: `CREATE DATABASE hollywood;`

3. *Show Existing Databases*: `\l`

4. *Show Tables*: `\d`

5. *Show Tables in current database :* `\dt`

6. *Switch to another database:* `\c <database_name>`
  
  ```javascript
\c Hollywood 
# To switch to the Hollywood database
  \dt
# To see the current tables
```

7. *Describe a particular table* : `\d <table_name>`
  
  ```javascript
\d actors
# To get the fields of the actors table
```
  
  ![actors table](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day2/actors_table_psql.png?raw=true)

8. *Check the version of PostgreSQL :* `SELECT version();`

9. *See the previously executed command*: `\g`

10. *Enlisting all the available commands* : `\?`

11. *Knowing the syntaxes of PostgreSQL statements:* `\h <statement>`
  
  ```javascript
\h SELECT
# To get the syntax of a SELECT statement
# Response 
Command:     SELECT
Description: retrieve rows from a table or view
Syntax: ...
```

12. *Edit command in your own editor:* `\e` opens you editor. You can then modify the command, save the file, and close it. `psql` will execute the commands written in the file.

13 . *Quit psql* : `\q`

[More command in psql](https://www.postgresqltutorial.com/psql-commands/)

---

**Exercise**

- Open the psql shell and test the above commands on the table actors

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
