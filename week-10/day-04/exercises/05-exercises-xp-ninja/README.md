# Exercises XP Ninja

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- Classes and Object

---

### **Exercise 1 : Call History**

**Instructions**

1. Create a class called `Phone`. This class takes a parameter called `phone_number`. When instantiating an object create an attribute called `call_history` which value is an empty list.

2. Add a method called `call` that takes both `self` and `other_phone` (i.e another `Phone` object) as parameters. The method should print a string stating who called who, and add this string to the phone’s `call_history`.

3. Add a method called `show_call_history`. This method should print the `call_history`.

4. Add another attribute called `messages` to your `__init__()` method which value is an empty list.

5. Create a method called `send_message` which is similar to the `call` method. Each message should be saved as a dictionary with the following keys:
  
  - *to* : the number of another `Phone` object
  - *from* : your phone number (also a `Phone` object)
  - *content*

6. Create the following methods: `show_outgoing_messages(self)`, `show_incoming_messages(self)`, `show_messages_from(self)`

7. Test your code !!!
