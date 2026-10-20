# More Advanced Notions on Databases

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Entity Relationship Diagram**

An ER diagram shows the relationship among entity sets. An entity set is a group of similar entities, and these entities can have attributes. In terms of DBMS, an entity is a table or attribute of a table in the database. The ER diagram shows the complete logical structure of a database by showing the relationship among tables and their attributes.

The diagram has different symbols to represent other relationships between tables as described above.

---

### **ORM**

**Object Relational Mapper**

ORM is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a “virtual object database” that can be used from within the programming language.

---

### **Transactions**

A transaction is a unit of work that is performed against a database. Transactions are units or sequences of work accomplished in a logical order, whether in a manual fashion by a user or automatically by a database program.

A transaction is the propagation of one or more changes to the database. For example, if you are creating a record or updating a record, or deleting a record from the table, you perform a transaction on that table. It is vital to control these transactions to ensure data integrity and to handle database errors.

Practically, you will club many SQL queries into a group, and you will execute all of them together as a part of a transaction.

---

### **Example**

If you have two clients that interact with the data simultaneously, you need to have multiple versions of the data to display to them, so they don’t get corrupted data.

EX: At the beginning of the session (T0), before anyone starts anything, let’s say we have two rows in the user table, ‘Nancy’, and ‘Bob’.
At T1, someone begins the transaction and inserts another user into the table.
At T2, a query is placed, selecting all users from the table.
They would only return two names. Because the INSERT command hasn’t been committed yet. Then if the first client commits their change, that would then be reflected in the database. A selection done after that, at T3, would show three users.

---

### **MVCC**

Multiversion Concurrency Control manages the various versions that may be created if clients make changes that create conflict concurrently.
See [here](https://en.wikipedia.org/wiki/Multiversion_concurrency_control)

---

### **ACID**

Transactions have the following four standard properties, usually referred to by the acronym ACID.

- **Atomicity** − ensures that all operations within the work unit are completed successfully. Otherwise, the transaction is aborted at the point of failure and all the previous operations are rolled back to their former state.

- **Consistency** − ensures that the database appropriately changes states upon a successfully committed transaction.

- **Isolation** − enables transactions to operate independently of and transparent to each other.

- **Durability** − ensures that the result or effect of a committed transaction persists in case of a system failure

---

### **Data Integrity**

The following categories of data integrity exist with each RDBMS −

- *Entity Integrity* − There are no duplicate rows in a table.

- *Domain Integrity* − Enforces valid entries for a given column by restricting the type, the format, or the range of values.

- *Referential integrity* − Rows cannot be deleted, which are used by other records.

- *User-Defined Integrity* − Enforces some specific business rules that do not fall into entity, domain, or referential integrity.

---

### **Database Normalization**

Database normalization is the process of efficiently organizing data in a database to eliminate redundant data, for example, storing the same data in more than one table.

---

### **More Examples**

**Primary Key**

Primary keys are guaranteed to be unique.

---

### **RELATIONAL DATABASES**

Part of the whole functionality of SQL is the relationship between various tables in a database.

For example, if we have a table of *users* (each with a unique id) and we have a table of *stocks* companies (each with a unique id), and we want to create a table called *user_stocks* that will show a relationship between users and stocks. This table needs to verify that the *user_id* passed to it is a valid id from the *users* table. We can use the command `user_id UUID NOT NULL REFERENCES users(id)` in our schema for *user_stocks*.

If we try to add a stock that isn’t present in the *stocks* table, we’ll get an error: *Key stock(id) not found in stocks*. The foreign key of a table **must be** a primary key of that table.

After we added a user’s purchase of stock and added it to the user_stocks table, we then want to find the email address of all users who own stocks. We’d select:

```javascript
SELECT email FROM users INNER JOIN user_stocks ON user_stocks.user_id = users.id;
```

If we want to print the name and email for all users who own stock in Google:

```javascript
SELECT first_name, email, stocks.symbol FROM users
INNER JOIN user_stocks ON user_stocks.user_id = users.id
INNER JOIN stocks ON stocks.id = user_stocks.stock_id
WHERE symbol = 'GOOG';
```

---

### **Aggregation**

If you’re selecting multiple columns (say the average price each user paid for their shares), you need to `GROUP BY` so it will know which values to include to average together. When using a condition on an aggregated value, instead of WHERE, you use the HAVING. You cannot, however refer to it by its alias. You’d have to rewrite the calculation you made for the aggregation. In the example below, the final line couldn’t refer to *Total_Quantity* even though it’s an alias in this command.

```javascript
SELECT email, stocks.symbol, AVG(open_price) AS Average_Open_Price, SUM(user_stocks.quantity) AS Total_Quantity FROM users
INNER JOIN user_stocks ON user_stocks.user_id = users.id
INNER JOIN stocks ON stocks.id = user_stocks.stock_id
GROUP BY symbol, email
HAVING SUM(user_stocks.quantity) > 5;
```
