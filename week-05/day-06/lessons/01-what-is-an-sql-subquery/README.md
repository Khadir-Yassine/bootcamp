# What is an SQL subquery?

Course source: [Geeks Institute](https://www.geeks.institute/).
A query in SQL is used to retrieve, insert, or update the data in a table. A subquery is a query within a query.

![Illustration](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%204%20-%20Databases/W4D3/query.png?raw=true)

---

### **Clauses of a subquery**

There are three clauses of any subquery:

- A `SELECT` **clause**: specifies the field to be extracted from the specified table.

- A `FROM` **clause**: specifies the table from where the data is retrieved.

- A `WHERE` **clause**: specifies the condition on which the retrieval is based.

**Sample table of “employees”**

![Illustration](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%204%20-%20Databases/W4D3/db.png?raw=true)

**Sample table of “ratings”**

![Illustration](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%204%20-%20Databases/W4D3/db2.png?raw=true)

### **Code The following example uses all three clauses to display the employees who have a rating higher than 3.**

Table aliases temporarily assign tables new names during the execution of a query.
`AS` keyword is optional. It means that you omit the AS keyword like this:

```javascript
SELECT a.emp_id, a.first_name, a.last_name, b.rating
FROM Employee a, ratings b
WHERE a.emp_id = b.emp_id AND b.rating > 
(SELECT rating
FROM ratings
WHERE rating=3);
```

With the AS keyword

```javascript
SELECT a.emp_id, a.first_name, a.last_name, b.rating
FROM Employee AS a, ratings AS b
WHERE a.emp_id = b.emp_id AND b.rating > 
(SELECT rating
FROM ratings
WHERE rating=3);
```
