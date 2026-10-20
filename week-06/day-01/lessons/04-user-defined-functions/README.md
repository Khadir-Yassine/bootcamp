# User Defined Functions

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- How to create functions in PostgreSQL

---

## **Useful Information**

- [Documentation on User Defined Function](https://neon.tech/postgresql/postgresql-plpgsql/postgresql-create-function)

- [Documentation on Function Parameters](https://neon.tech/postgresql/postgresql-plpgsql/plpgsql-function-parameters)

---

### **Creating functions**

You can create functions in PostgreSQL :

*Syntax*

```javascript
CREATE FUNCTION function_name(p1 type, p2 type)
 RETURNS type AS $$
BEGIN
 -- logic
END;
$$ LANGUAGE language_name;
```

- function_name : the name of the function after the `CREATE FUNCTION` keywords.

- Then, a list of parameters inside the parentheses following the function name.

- Next, specify the return type of the function after the `RETURNS` keyword.

- After that, place the code inside the `BEGIN` and `END` block. The function always ends with a semicolon (;) followed by the `END` keyword.

- Finally, indicate the procedural language of the function, e.g., `plpgsql` in case PL/pgSQL is used.

Let’s work on the table actors.

```javascript
SELECT * from actors;
```

This is our table

![table actors](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/actors.png?raw=true)

For example,

If we want to retrieve the birthdate of each actor we have to create three SELECT requests. To make this process easier and quicker we can create a function :

```javascript
CREATE or REPLACE FUNCTION age_actor(fn varchar(50), lan varchar(100)) 
RETURNS date AS $birthdate$
BEGIN
   RETURN(SELECT age FROM actors WHERE actors.first_name = fn AND actors.last_name=lan);
END;
$birthdate$ LANGUAGE plpgsql;
```

- The parameters : `fn` with take a **first_name** as argument, `lan` will take a **last_name** as argument

- `RETURNS date AS $birthdate$` : the type of field that we want to return

- Inside the statement, we return the birthdate of each actor depending on it’s **first_name** and **last_name**

Then we call the function:

```javascript
SELECT * FROM age_actor('George', 'Clooney');
```

And we get :

![age actors](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/age%20actors.png?raw=true)

---

Another Example :

If we want to retrieve the **first_name** and **last_name** of each actor in one column, we must create three SELECT requests. To make this process easier and quicker, we can create a function :

```javascript
CREATE or REPLACE FUNCTION fullname_actor(fn varchar(50), lan varchar(100)) RETURNS VARCHAR(100) AS $fullname$
BEGIN
   RETURN(SELECT CONCAT(first_name, ' ', last_name) FROM actors WHERE actors.first_name = fn AND actors.last_name=lan);
END;
$fullname$ LANGUAGE plpgsql;
```

- The `CONCAT()` aggregate function concatenates two or more strings except NULL specified in the arguments.

Then we call the function:

```javascript
SELECT * FROM fullname_actor('George', 'Clooney');
SELECT * FROM fullname_actor('Matt', 'Damon');
```

![fullname GC](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/fullname%20actors%20GC.png?raw=true)

![fullname MD](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day4/fullname%20actors%20MD.png?raw=true)

---

Another Example:

In the actor’s table, we have only the birthdate of each actor. How can we do to retrieve their current age?

Let’s create a function :

```javascript
CREATE or REPLACE FUNCTION current_age_actor(fn varchar(50), lan varchar(100)) RETURNS int AS $current_age$
declare
    current_age integer;
    birthdate date;
    now_date date := CURRENT_DATE;
BEGIN
   birthdate := (SELECT age FROM actors WHERE actors.first_name = fn AND actors.last_name=lan);
   current_age := DATE_PART('year', now_date) - DATE_PART('year', birthdate);
   RETURN current_age;
END;
$current_age$ LANGUAGE plpgsql;
```

- `RETURNS int AS $current_age$`: The function returns an integer : the current age of the actor

- We declare some variable, that we will use in the function :

```javascript
  declare   
    current_age integer;
    birthdate date;
    now_date date := CURRENT_DATE; -- := means equal to
```

- Then we get the birthdate of each actor depending on their names.

- We compare the current date with their birthdate to get their age. We use Datetime Difference in years with the `DATE_PART()` function. [More on Datetime Difference](https://www.geeksforgeeks.org/postgresql-datediff-function/)

- Then we return the `current_age`.

Then we call the function:

```javascript
SELECT * FROM current_age_actor('George', 'Clooney');
```

---

Another Example:

If you want to return several columns:

```javascript
CREATE or REPLACE FUNCTION current_age_actor(fn varchar(50), lan varchar(100)) 
RETURNS RECORD AS $$
declare
    current_age integer;
    birthdate date;
    now_date date := CURRENT_DATE; 
    all_info RECORD;
BEGIN
   birthdate := (SELECT age FROM actors WHERE actors.first_name = fn AND actors.last_name=lan);
   current_age := DATE_PART('year', now_date) - DATE_PART('year', birthdate);
   SELECT fn , lan, current_age INTO all_info;
   RETURN all_info;
END;
$$ LANGUAGE plpgsql;
```

- `RETURNS RECORD AS $$` : `RECORD` variables have no predefined structure. They take on the actual row structure of the row they are assigned during a `SELECT` or `FOR` command. The substructure of a record variable can change each time it is assigned to. Note that `RECORD` is not a valid data type, only a placeholder to hold the result.

- `SELECT current_age, fn , lan INTO all_info` : The PostgreSQL `SELECT INTO` statement allows you to create a new table and inserts data returned by a query.

[More on SELECT INTO](https://neon.tech/postgresql/postgresql-tutorial/postgresql-select-into)

Then you call the function:

```javascript
SELECT * FROM current_age_actor('George', 'Clooney') AS (first_name varchar, last_name varchar, age integer);
```
