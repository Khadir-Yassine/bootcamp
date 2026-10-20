# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
