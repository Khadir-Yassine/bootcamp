# Exercise 1

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise 1**

1. Create a structured HTML file linked to a JS file

2. Write a Javascript function that takes a parameter: *myAge*

3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

4. Call the function.

---

**5. Return statement**

Every function in JavaScript returns `undefined` unless otherwise specified.
When a function `returns` a value, it’s returning a result.
The return value is “returned” back to the “caller” of the function.

```javascript
function userInfo(userName, userAge) {
    let result = "My name is " + userName + ", my age is " + userAge;
    return result;
}

let girlInfo = userInfo("Sarah", 22);
console.log(girlInfo); //My name is Sarah, my age is 22
```

```javascript
function userInfo(userName, userAge) {
    if (userName === "Sarah") {
        let result = "Hey " + userName;
        return result;
    } else {
        return "You are not the right person";
    }
}

let girlInfo = userInfo("Sarah", 22);
console.log(girlInfo); //Hey Sarah
```

The return statement **stops the function execution immediately**.

```javascript
function userInfo(userName, userAge) {
    let result = "My name is " + userName + " my age is "  + userAge;
    return "hey";
    console.log(result); //not reached
}

let girlInfo = userInfo("Sarah", 22)
console.log(girlInfo) //hey
```

It’s possible to use `return` without a value. That causes the function to exit immediately.

```javascript
function userInfo(userName, userAge) {
    if (userName !== "Sarah") {
        return;
    } 
    alert("You are not the right person");
}

let girlInfo = userInfo("Sarah", 22);
console.log(girlInfo); //undefined
```

**IMPORTANT**:
A function **should do precisely what is suggested by its name**, no more.
Two independent actions usually deserve two functions.
Functions should be short and do precisely one thing. If that thing is big, maybe it’s worth to split the function into a few smaller functions.

---


[Worked solutions](../solutions.md)
