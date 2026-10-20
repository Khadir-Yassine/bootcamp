# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
## **How to push your work to Github ?**

- Save the queries into a **sql file** (.sql extension) and push this file to Github.

- To save the file into an **sql file**, click on the “Save” button : the instructions are in the image below

![save pgadmin file](https://github.com/devtlv/studentsGitHub/blob/master/Python/Week7/Day1/save_file_pgadmin.png?raw=true)

---

### **Exercise 1 : DVD Rentals**

**Instructions**

1. Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?

2. Get a list of all customers who have not returned their rentals. Make sure to group your results.

3. Get a list of all the Action films with Joe Swank.
  
  - Before you start, could there be a shortcut to getting this information? Maybe a view?

---

### **Exercise 2 – Happy Halloween**

**Instructions**

There is a zombie plague approaching! The DVD rental company is offering to lend all of its DVDs to the local shelters, so that the citizens can watch the movies together in the shelters until the zombies are destroyed by the armed forces. Prepare tables with the following data:

1. How many stores there are, and in which city and country they are located.

2. How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.

3. Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)

4. A list of all customers in the cities where the stores are located.

5. A list of all customers in the countries where the stores are located.

6. Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).
**Hint : use the CHECK constraint**

7. For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
