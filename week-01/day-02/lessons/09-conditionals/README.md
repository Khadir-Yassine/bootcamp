# Conditionals

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Conditional JS**

JavaScript supports conditional statements, which are used to perform different actions based on various conditions.

---

**If…else**

JavaScript supports the following forms of if..else statement :

- if statement

- if…else statement

- if…else if… statement.

---

**1. if statement**

*Syntax*

```javascript
if (expression) {
   Statement(s) to be executed if the expression is true
}
```

```javascript
    let age = 20

    if (age > 18) {
        console.log("You're a big man")
    }
```

---

**2. if…else statement**

*Syntax*

```javascript
if (expression) {
   Statement(s) to be executed if expression is true
} else {
   Statement(s) to be executed if the expression is false
}
```

```javascript
    let age = 20

    if (age > 18) {
        console.log("We can go to a pub together !!")
    } else {
         console.log("Sorry...You have to stay at home tonight")
```

---

**3. if…else if… statement.**

*Syntax*

```javascript
if (expression 1) {
   Statement(s) to be executed if expression 1 is true
} else if (expression 2) {
   Statement(s) to be executed if expression 2 is true
} else if (expression 3) {
   Statement(s) to be executed if expression 3 is true
} else {
   Statement(s) to be executed if no expression is true
}
```

```javascript
    let age = 20

    if (age === 18) {
        console.log("It's your birthday !!) 
    } else if (age > 18) {
        console.log(We can go to a pub together !!")
    } else {
        console.log("Sorry...You have to stay at home tonight")
    }
```

---

**Exercise**

Make a keyless car!

This car will only let you drive if you are over 18. Make it do the following:

Using prompt() and alert(), ask a user for their age.

- IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off

- IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!

- IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"


[Worked solutions](solutions.md)
