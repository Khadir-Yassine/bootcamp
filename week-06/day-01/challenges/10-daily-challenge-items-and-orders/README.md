# Daily Challenge: Items and Orders

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Instructions**

1. Create a table called `product_orders` and a table called `items`. You decide which fields should be in each table, although make sure the `items` table has a column called price.

2. There should be a one to many relationship between the `product_orders` table and the `items` table. An order can have many items, but an item can belong to only one order.

3. Create a function that returns the total price for a given order.

4. **Bonus** :
  
  1. Create a table called `users`.
  2. There should be a one to many relationship between the `users` table and the `product_orders` table.
  3. Create a function that returns the total price for a given order of a given user.
