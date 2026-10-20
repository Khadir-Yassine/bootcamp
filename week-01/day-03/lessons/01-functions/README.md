# Functions

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What is a function?**

A `function` is a block of code designed to perform a specific task.
Functions allow the code to be called several times without repetition –> Avoid code duplication.

---

**1. Defining/Declaring a function**

A function definition consists of the `function` keyword, followed by:

- The name of the function.

- *Optional* : A list of parameters to the function, enclosed in parentheses and separated by commas.

- The JavaScript statements that define the function, enclosed in curly brackets, `{}`.

**Without parameters**

*Syntax*

```javascript
function fntName(){
    //statements
}
```

*Example*

```javascript
function drinkCoffee(){
    console.log("The user drinks coffee in the morning");
}
```

**With parameters**

**Parameters** are used when defining a function. A comma separate every parameter in the parentheses.

*Syntax*

```javascript
function myFunc(param1,param2, ..., paramN){
    //statement
}
```

Parameters are **only recognized** inside the function ! The parameters behave as local variables.

*Example*

```javascript
function userInfo (username, userAge) {
    console.log("My name is " + username + ", my age is " + userAge);
}
```

---

**2. Calling/Invoking a function**

A function executes when it’s **called**.

- If the function has no parameter, you invoke (ie. call) it with the function name, followed by empty parentheses.

```javascript
function calculus () {
    console.log(1+2);
}

calculus(); // 3
```

- If the function has parameters, you invoke it with the function name, followed by the number of **arguments** corresponding to the number of parameters (inside the parentheses)

**Arguments** are the values passed to the parameters, when the function is executed.

```javascript
function userInfo(userName, userAge) {
    console.log("My name is " + userName + ", my age is "  + userAge);
}

userInfo("Sarah", 22); //My name is Sarah, my age is 22
userInfo("Ben", 40); //My name is Ben, my age is 40
```

```javascript
function calculusSecond (a,b,c) {
    console.log(a+b+c);
}

calculusSecond(2,3,1);//6
```

---

**3. Default values**

If a parameter is not provided, then its value becomes `undefined`.

```javascript
function userInfo(userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

userInfo("Sarah");//My name is Sarah, my age is undefined
```

A default value will get passed if no argument was given during the invocation of the function.

```javascript
function userInfo(userName, userAge=20) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

userInfo("Sarah"); //My name is Sarah, my age is 20
userInfo("Ben", 40); //My name is Ben, my age is 40
```

---

**4. Local variables**

A variable declared inside a function is **only visible inside that function**.

```javascript
function userMoreInfo (userName, userAge) {
    let eyeColor = "blue"; //local variable 
    console.log("My name is " + userName + ", my age is "  + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes

// undefined in the global scope
console.log(eyeColor); //Uncaught ReferenceError: eyeColor is not defined
```

---

**5. Global variables**

Global variables are visible from any function.

```javascript
//global variable 
let eyeColor = "blue";

function userMoreInfo (userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes
console.log(eyeColor); // blue

function favoriteColor () {
    console.log("My favorite color is " + eyeColor);
}

favoriteColor(); //My favorite color is blue
```

---

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

**Exercise 2**

1. Create a structured HTML file linked to a JS file

2. Write a Javascript function that takes a parameter: *myAge*

3. In the function, return the age of my mum (my mum is twice my age)

4. Call the function

5. In the global scope, console.log the result of the function


[Worked solutions](solutions.md)
