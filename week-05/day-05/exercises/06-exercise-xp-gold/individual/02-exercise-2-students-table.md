# Exercise 2: students table

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
