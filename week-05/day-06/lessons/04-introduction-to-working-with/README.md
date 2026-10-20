# Introduction to Working with...

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Introduction to Working with Temporary Tables in SQL**

### **Introduction**

Temporary tables are a useful feature in SQL that allows developers and database administrators to store intermediate results temporarily during data processing. These tables are crucial for complex SQL operations involving large datasets where breaking down the task into smaller, manageable parts is necessary. This lesson introduces the basics of temporary tables, their types, usage, and provides practical examples.

---

### **👩‍🏫 👩🏿‍🏫 What You’ll learn**

In this lesson, you will:

- Understand what temporary tables are and their benefits.

- Learn about the different types of temporary tables.

- Explore how to create, use, and manage temporary tables in SQL.

- See examples demonstrating the practical applications of temporary tables.

---

### **💼 Prerequisites**

Before starting this lesson, you should:

- Have basic knowledge of SQL and database concepts.

- Be familiar with creating and manipulating tables using SQL.

- Have access to a SQL database environment where you can practice creating and using temporary tables.

---

### **📖 Useful Resources**

- [Advanced SQL Tutorial | Temp Tables](https://www.youtube.com/watch?v=RF0LE3hYFr)

---

### **Understanding Temporary Tables**

**Definition**

Temporary tables are tables that exist temporarily on the database server during a session. They are automatically deleted when a session is closed. This feature helps in optimizing queries, managing large datasets, and maintaining data privacy during complex data manipulation tasks.

**Types of Temporary Tables**

- **Local Temporary Tables**: These are visible only to the current session and are deleted automatically when the session ends. In SQL Server, they are prefixed with a single hash (`#tableName`).

- **Global Temporary Tables**: These are visible to all sessions and are deleted when the last session referencing the table closes. In SQL Server, they are prefixed with a double hash (`##tableName`).

---

### **Examples of Working with Temporary Tables**

**Example 1: Creating and Using a Local Temporary Table**

Imagine you need to perform a complex query involving multiple aggregation steps. You can use a temporary table to store the intermediate results.

**SQL Code**

```javascript
-- Creating a local temporary table
CREATE TEMPORARY TABLE IF NOT EXISTS #TempEmployees AS
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;

-- Using the temporary table in a query
SELECT e.name, e.salary, t.avg_salary
FROM employees e
JOIN #TempEmployees t ON e.department_id = t.department_id
WHERE e.salary > t.avg_salary;
```

**Example 2: Managing a Global Temporary Table**

Use a global temporary table to share data between multiple sessions in a controlled environment, such as during a large-scale data migration.

```javascript
-- Creating a global temporary table
CREATE TABLE ##GlobalTempLocations (
    location_id INT,
    location_name VARCHAR(100)
);

-- Insert data into the global temporary table
INSERT INTO ##GlobalTempLocations (location_id, location_name)
VALUES (1, 'New York'), (2, 'London');

-- Accessing data from another session
SELECT * FROM ##GlobalTempLocations;
```

---

### **Conclusion**

Temporary tables are powerful tools in SQL for managing data temporarily during database sessions. They provide a way to handle complex data manipulation tasks more efficiently and securely. Understanding how to create and utilize temporary tables effectively can significantly enhance your SQL querying capabilities and data processing workflows. Practice with these examples and explore further applications in your database projects.
