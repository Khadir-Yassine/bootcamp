# Introduction to SQL Subqueries

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Introduction**

Subqueries, also known as nested queries, are a powerful feature of SQL that allow you to perform more complex queries by nesting one query inside another. Subqueries can be used in various parts of a SQL statement, including the `SELECT`, `FROM`, `WHERE`, and `HAVING` clauses. This lesson will introduce you to the basics of subqueries and demonstrate how they can enhance your data querying capabilities.

---

### **👩‍🏫 👩🏿‍🏫 What You’ll learn**

In this lesson, you will:

- Understand what subqueries are and where they can be used.

- Learn the different types of subqueries: scalar, row, column, and table subqueries.

- Explore the use of subqueries in the `SELECT`, `WHERE`, and `FROM` clauses.

- See real-world examples to grasp how subqueries solve complex database queries.

---

## **Prerequisites**

Before beginning this lesson, you should have:
- Basic knowledge of SQL syntax.
- Familiarity with fundamental SQL commands like `SELECT`, `FROM`, `WHERE`, and `JOIN`.
- Access to a relational database management system (RDBMS) like MySQL, PostgreSQL, or SQLite to practice SQL queries.

---

## **Resources**

- [MySQL: SUBQUERIES](https://www.youtube.com/watch?v=i5acg3Hvu6g)

- [Advanced SQL Tutorial | Subqueries](https://www.youtube.com/watch?v=m1KcNV-Zhmc)

---

### **Understanding SQL Subqueries**

**Definition**

A **subquery** is a query nested inside another SQL query. It can return data that will be used by the outer query. Depending on where they are used, subqueries can return a single value, a row set, or a column set.

**Types of Subqueries**

- **Scalar Subqueries**: Return a single value (one row and one column). Used in places where a single value is expected.

- **Column Subqueries**: Return a column of data (one column, multiple rows). Often used in the `WHERE` clause to filter data based on conditions met by the column data returned.

- **Row Subqueries**: Return a single row (multiple columns, one row). Useful for comparisons involving multiple columns.

- **Table Subqueries**: Return a complete table (multiple rows and columns). These are typically used in the `FROM` clause.

**Uses of Subqueries**

- **WHERE Clause**: To filter records based on complex conditions.

- **SELECT Clause**: To calculate values for each row.

- **FROM Clause**: To derive tables used in `JOIN` operations.

---

### **Examples of SQL Subqueries**

**Example 1: Subquery in a WHERE Clause**

Find employees who earn more than the average salary in their department.

```javascript
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    GROUP BY department_id
);
```

**Example 2: Subquery in a SELECT Clause**

List each product and the number of orders for that product.

```javascript
SELECT product_name, (
    SELECT COUNT(*)
    FROM orders
    WHERE orders.product_id = products.product_id
) AS order_count
FROM products;
```

**Example 3: Subquery in a FROM Clause**

Select all data from a derived table containing only recent orders.

```javascript
SELECT *
FROM (
    SELECT order_id, product_id, order_date
    FROM orders
    WHERE order_date > '2021-01-01'
) AS recent_orders;
```

---

**Exercise**

Identify customers who have placed orders totaling more than the average order value. This exercise will help you understand how to use subqueries to compare individual records against a calculated average.

Given two tables, `customers` and `orders`, write a SQL query using a subquery to find the names of customers whose total order value exceeds the average order value of all orders.

* **customers**

- `customer_id` (integer)

- `customer_id` (integer)

- `name` (string)

* **orders**

- `order_id` (integer)

- `customer_id` (integer, foreign key to `customers`)

- `order_value` (decimal)

---

### **SQL Query Setup**

```javascript
-- Sample Data for 'customers'
INSERT INTO customers (customer_id, name) VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Charlie');

-- Sample Data for 'orders'
INSERT INTO orders (order_id, customer_id, order_value) VALUES (1, 1, 100.00), (2, 1, 150.00), (3, 2, 200.00), (4, 3, 50.00);
```

Write a SQL query to select the name of each customer whose total spending on orders is greater than the average order value. Use a subquery to determine the average order value.

---

### **Conclusion**

SQL subqueries are a versatile tool that can significantly extend the capability of SQL queries. By understanding and utilizing subqueries, you can perform more complex analyses and derive insights from your data more effectively. Practice using these examples as a starting point to master the art of crafting sophisticated SQL queries with subqueries.
