# Exercise 3 : Items and customers

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 3 : Items and customers**

**Instructions**

We will work on the *public* database that we created yesterday.

**Part I**

1. Create a table named **purchases**. It should have 3 columns :
  
  - `id` : the primary key of the table
  - `customer_id` : this column references the table *customers*
  - `item_id` : this column references the table *items*
  - `quantity_purchased` : this column is the quantity of items purchased by a certain customer

2. Insert purchases for the customers, use subqueries:
  
  - Scott Scott bought one fan
  - Melanie Johnson bought ten large desks
  - Greg Jones bougth two small desks

The table *purchases* should look like this:

| id | customer_id | item_id | quantity_purchased |
| --- | --- | --- | --- |
| 1 | 3 | 3 | 1 |
| 2 | 5 | 2 | 10 |
| 3 | 1 | 1 | 2 |

Here is the explanation of the first row:

- id = 1, this is the auto-incrementing primary key

- customer_id = 3, because the id of **Scott Scott** in the *customers* table is 3

- item_id = 3, because the id of a **fan** in the *items* table is 3

- quantity_purchased = 1, because Scott Scott bought **one** fan

**Part II**

1. Use SQL to get the following from the database:
  
  1. All purchases. Is this information useful to us?
  2. All purchases, joining with the *customers* table.
  3. Purchases of the customer with the ID equal to 5.
  4. Purchases for a large desk **AND** a small desk

2. Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
  
  1. Customer first name
  2. Customer last name
  3. Item name

3. Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
