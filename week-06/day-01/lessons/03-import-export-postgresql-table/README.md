# Import / Export PostgreSQL table

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What you will learn**

- Import Data from CSV in PostgreSQL

- Export PostgreSQL Table To CSV File

---

### **Useful Resources**

- [Documentation Import CSV File Into PostgreSQL Table](https://neon.tech/postgresql/postgresql-tutorial/import-csv-file-into-posgresql-table)

- [Documentation Export PostgreSQL Table To CSV File](https://neon.tech/postgresql/postgresql-tutorial/export-postgresql-table-to-csv-file)

---

### **What are CSV files, and why are they used?**

A CSV is a comma-separated values file that allows data to be saved in a tabular format.

These files serve several different business purposes. They help companies export a high volume of data to a more robust database, for instance.

---

### **I. Import Data from CSV in PostgreSQL**

The steps

- **Make a Table in PostgreSQL:** There *must* be a table to hold the data being imported. To copy the data, we must create a table with the proper table structure (number of columns, data types, etc.)

- **Create the data in an excel file, for example:**

*Syntax*

```javascript
COPY [Table Name](Optional Columns)
FROM '[Absolute Path to File]'
DELIMITER '[Delimiter Character]' CSV [HEADER];
```

- **Table Name** : items

- **Absolute Path** : the location of the csv file. In this example it is on the desktop, so the path is: “/Users/Desktop/actors.csv”

- **Delimiter Character** : ,”

- **HEADER** : the data does have a header

Let’s work with our table actors. (We don’t need to create another table, we will use the one we already have.) We have an excel file with these data :

![excel actors](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/excel%20actors.png?raw=true)

And the table actors with these data:

![old table actors](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/old%20table%20actors.png?raw=true)

With *pgadmin*

1. In Excel, File/Save As, select CSV, save your current sheet.

2. You have to change the file location, or PostgreSQL won’t let you access the file. The simplest option is to change the file location to one the server does have access to.
  
  - In Windows: move the file you’re trying to read temporarily to ‘`C:\Users\Public`’. The Public user home directory is readable and writeable by all users on the system.
  - In Mac or Linux: use the ‘`/tmp`‘ directory - again, this is accessible by all users.

3. Create a script in *pgadmin* and write

```javascript
COPY actors(first_name,last_name,age,number_oscars) 
FROM 'path_of_the_file(/tmp or /Users/Public)' DELIMITER ',' CSV HEADER;
```

Now our table actors look like this :

![new table actors](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/new%20table%20actors.png?raw=true)

With *psql*:

1. In Excel, File/Save As, select CSV, save your current sheet.

2. You can use the *psql* command, so you don’t need to change your file location

```javascript
your_db=# \copy [Table/Query] to '[Relative Path/filename.csv]' csv header
```

```javascript
Hollywood=# \copy actors(first_name,last_name,age,number_oscars) FROM 'path_initial_location' WITH CSV HEADER 
```

---

### **II. Export PostgreSQL Table To CSV File**

With *pgAdmin*

- You can create a new excel file (no need to make the columns) or use the one you already have. The file has to be in the `/tmp` (Mac or Linux) or ‘`C:\Users\Public`‘ (Windows)

- You don’t need to create a file because the COPY command will create it for you.

```javascript
COPY actors(actor_id, first_name,last_name,age,number_oscars) 
TO 'C:\Users\Public\export_db_actors.csv' DELIMITER ',' CSV HEADER;
```

```javascript
COPY actors(first_name,last_name) 
TO 'C:\Users\Public\export_db_actors.csv' DELIMITER ',' CSV HEADER;
```

In the second command, you will have only the first_name and last_name of the actors copied to your CSV file.

![export db actors](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/export%20db%20actors.png?raw=true)

```javascript
COPY actors(first_name,last_name) 
TO 'C:\Users\Public\export_db_actors.csv' DELIMITER ',' CSV HEADER;
```

With psql

- You can create a new excel file (no need to create the columns), or use the one you already have.

- You don’t need to create a file because the COPY command will create it for you.

```javascript
Hollywood=# \copy actors TO 'path_initial_location' WITH CSV HEADER 
```

```javascript
Hollywood=# \copy (SELECT * FROM actors WHERE number_oscars >=3) TO 'path_initial_location' WITH CSV HEADER 
```

In the second command, you will have only ‘Matt Damon’ copied to your CSV file.
