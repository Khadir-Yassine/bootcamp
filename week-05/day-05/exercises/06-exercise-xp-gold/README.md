# Exercise XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Exercise 1: DVD Rental**

**Instructions**

1. You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
  
  1. Find out how many films there are for each rating.
  2. Get a list of all the movies that have a rating of G or PG-13.
  
  1. Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
  3. Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
  4. Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).

---

### **Exercise 2: students table**

**Instructions**

Continuation of the Day1 Exercise XPGold : *students* table

**Update**

1. ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.

2. Change the last_name of David from ‘Grez’ to ‘Guez’.

**Delete**

1. Delete the student named ‘Lea Benichou’ from the table.

**Count**

1. Count how many students are in the table.

2. Count how many students were born **after** 1/01/2000.

**Insert / Alter**

1. Add a column to the student table called *math_grade*.

2. Add 80 to the student which id is 1.

3. Add 90 to the students which have ids of 2 **or** 4.

4. Add 40 to the student which id is 6.

5. Count how many students have a grade bigger than 83

6. Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.

7. Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.
**Bonus**: Count how many grades each student has.
  
  - **Tip**: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
  - **Tip** : Use an alias called **total_grade** to fetch the grades.
  - **Hint** : Use `GROUP BY`.

**SUM**

1. Find the sum of all the students grades.

---

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

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
