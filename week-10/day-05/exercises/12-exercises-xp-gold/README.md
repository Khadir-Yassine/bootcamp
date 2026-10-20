# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Inheritance

---

### **Exercise 1: Bank Account**

**Instructions**

**Part I:**

1. Create a class called `BankAccount` that contains the following attributes and methods:
  
  - `balance` - (an attribute)
  - `__init__` : initialize the attribute
  - `deposit` : - (a method) accepts a positive int and adds to the `balance`, raise an **Exception** if the int is not positive.
  - `withdraw` : - (a method) accepts a positive int and deducts from the `balance`, raise an **Exception** if not positive

---

**Part II** : Minimum balance account

1. Create a `MinimumBalanceAccount` that inherits from `BankAccount`.

2. Extend the `__init__` method and accept a parameter called `minimum_balance` with a default value of 0.

3. Override the `withdraw` method so it only allows the user to withdraw money if the `balance` remains higher than the `minimum_balance`, raise an **Exception** if not.

---

**Part III**: Expand the bank account class

1. Add the following attributes to the `BankAccount` class:
  
  - `username`
  - `password`
  - `authenticated` (`False` by default)

2. Create a method called `authenticate`. This method should accept 2 strings : a username and a password. If the username and password match the attributes *username* and *password* the method should set the authenticated boolean to `True`.

3. Edit `withdraw` and `deposit` to only work if authenticated is set to `True`, if someone tries an action without being authenticated raise an **Exception**

---

**Part IV**: **BONUS** Create an ATM class

1. `__init__`:
  
  1. Accepts the following parameters: `account_list` and `try_limit`.
  2. Validates that `account_list` contains a list of `BankAccount` or `MinimumBalanceAccount` instances.
**Hint**: `isinstance()`
  3. Validates that `try_limit` is a positive number, if you get an invalid input raise an **Exception**, then move along and set `try_limit` to 2.
**Hint**: Check out [this tutorial](https://www.programiz.com/python-programming/exception-handling)
  4. Sets attribute `current_tries = 0`
  5. Call the method `show_main_menu` (see below)

1. Methods:
  
  1. `show_main_menu`:
  
  1. This method will start a while loop to display a menu letting a user select:
  
  - Log in : Will ask for the users `username` and `password` and call the `log_in` method with the username and password (see below).
  - Exit.
  2. `log_in`:
  
  1. Accepts a `username` and a `password`.
  2. Checks the `username` and the `password` against all accounts in `account_list`.
  
  - If there is a match (ie. use the `authenticate` method), call the method `show_account_menu`.
  - If there is **no match** with any existing accounts, increment the `current tries` by 1. Continue asking the user for a `username` and a `password`, until the limit is reached (ie. `try_limit` attribute). Once reached display a message saying they reached max tries and shutdown the program.
  3. `show_account_menu`:
  
  1. Accepts an instance of `BankAccount` or `MinimumBalanceAccount`.
  2. The method will start a loop giving the user the option to deposit, withdraw or exit.

## Worked solutions

[English explanations and runnable Python implementation](solutions.md).
