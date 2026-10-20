# 🌟 Exercise 1: DVD Rental

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **🌟 Exercise 1: DVD Rental**

**Instructions**

1. Get a list of all the languages, from the **language** table.

2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.

3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

4. Create a new table called *new_film* with the following columns : id, name. Add some new films to the table.

5. Create a new table called **customer_review**, which will contain film reviews that customers will make.
Think about the **DELETE** constraint: if a film is deleted, its review should be automatically deleted.
It should have the following columns:
  
  1. review_id – a primary key, non null, auto-increment.
  2. film_id – references the new_film table. The film that is being reviewed.
  3. language_id – references the language table. What language the review is in.
  4. title – the title of the review.
  5. score – the rating of the review (1-10).
  6. review_text – the text of the review. No limit on the length.
  7. last_update – when the review was last updated.

6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

7. Delete a film that has a review from the *new_film* table, what happens to the **customer_review** table?

---

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
