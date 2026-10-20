# Relational Database Basics

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Basic Notions of Relational Databases**

---

**1. What is RDBMS?**

**RDBMS** stands for **R**elational **D**atabase **M**anagement **S**ystem. RDBMS is the basis for SQL and for all modern database systems like MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.

A Relational database management system (RDBMS) is a database management system (DBMS) based on the relational model as introduced by E. F. Codd.

---

**2. What is a table?**

The data in an **RDBMS** is stored in database objects which are called **tables**. This table is a collection of related data entries, and it consists of **numerous columns and rows.**

Remember, a table is the most common and simplest form of data storage in a relational database. The following program is an example of a CUSTOMERS table

![table](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/table.jpg?raw=true)

---

**3. What is a field?**

Every table is broken up into smaller entities called **fields**.

For example, the CUSTOMERS table fields consist of ID, NAME, AGE, ADDRESS, and SALARY.

**A field is a column in a table** that is designed to maintain specific information about every record in the table.

---

**4. What is a Record or a Row?**

A record also called a row of data consist of individual entry that exists in a table. A record is a horizontal entity in a table.

For example, there are seven records in the above CUSTOMERS table. Let’s see a single row of data or record in the CUSTOMERS table:

![row](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/row.jpg?raw=true)

---

**5. What is a column?**

A column is a vertical entity in a table containing all information associated with a specific field in a table.

For example, a column in the CUSTOMERS table is ADDRESS, which represents location description and would be as shown below.

![column](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/column.jpg?raw=true)

---

**6. What is a NULL value?**

A `NULL` value in a table is a value in a field that appears to be blank, which means a field with a NULL value is a field with no value.

It is imperative to understand that a NULL value is different from a zero value or a field that contains spaces. A field with a NULL value is the one that has been left blank during record creation.
