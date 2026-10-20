# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Exercise 1 : Items and customers**

**Instructions**

We will work on the *public* database that we created yesterday.

1. Use SQL to get the following from the database:
  
  1. All items, ordered by price (lowest to highest).
  2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
  3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
  4. All last names (no other columns!), in reverse alphabetical order (Z-A)

---

### **Exercise 2 : dvdrental database**

**Instructions**

**Setup**

1. We will install a [new sample database](http://www.postgresqltutorial.com/) on our PostgreSQL servers.
  
  1. Download this [sample database file](../../../../references/dvdrental-dataset.md)
  2. There is a single file called **dvdrental.tar** inside the zip. Extract it to your local directory.
**Tip** : If you are using Mac, after extracting the zip file you will get a folder called **dvdrental**
  3. Go to pgAdmin4, and navigate to *Databases* on the left panel.
  4. Right click > Create > Database…
  5. Type in the name of the new database: *dvdrental*, and click *Save*. Wait a few moments.
  6. Right click on *dvdrental* under *Databases* in the left panel.
  7. Click *Restore…*.
  8. Choose the following format *Directory*. and select the *dvdrental *folder
  9. For PC users: “Find your file in the window”. For Max users: “Find your folder in the window”. (you may have to check *Show hidden files and folders?*), and click the *Select* button.

***If you get errors:***

1. If you receive a “Utility not found” Error, you need to change pgadmin binary path. Check out [this video](https://www.youtube.com/watch?v=7cBkXKCY4Ew)

2. If you receive an error of binary path :
  
  - Go to your computer documents -> C: (on windows) -> Program Files -> PostgreSQL -> your version -> bin. Copy this path, it should be something like this : `C:\Program Files\PostgreSQL\15\bin`.
  - In pgAdmin select File -> Preferences -> Path -> Binary Path -> scroll down to PostgreSQL Binary Path -> Find your PostgreSQL version -> paste the path -> Save

3. If you see any other error messages, please save them and get assistance. If not, you should have a new database loaded into your server!
  
  - If you have a problem importing the database, here are the [DEFAULT instructions](https://neon.tech/postgresql/postgresql-getting-started/load-postgresql-sample-database)

**Diagram of the tables**

**Here is a diagram of the tables in the server. Take a look at it and learn about the tables, their columns, and the relationships between the different tables.**

![diagram](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day2/dvd-rental-sample-database-diagram.png?raw=true)

We will use the newly installed dvdrental database.

1. In the dvdrental database write a query to select all the columns from the “customer” table.

2. Write a query to display the names (**first_name**, **last_name**) using an alias named “**full_name**”.

3. Lets get all the dates that accounts were created. Write a query to select all the **create_date** from the “customer” table (there should be no duplicates).

4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.

5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.

6. Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.

7. Write a query to retrieve all movie details where the movie id is either 15 or 150.

8. Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

9. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.

10. Write a query which will find the 10 cheapest movies.

11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
**Bonus**: Try to not use LIMIT.

12. Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

13. You need to check your inventory. Write a query to get all the movies which are **not** in inventory.

14. Write a query to find which city is in which country.

15. **Bonus** You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

---

| Duration (approx) |
| --- |
| > 1h30 |
