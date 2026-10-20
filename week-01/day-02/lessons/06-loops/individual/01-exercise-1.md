# Exercise 1

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise 1**

Create a structured HTML file linked to a JS file

1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Sample Output: //"0 is even" //"1 is odd" //"2 is even"

---

**For/In Loop**

Loops through the **properties of an object**. This loop continues until all of the properties of the Object are processed.

Loops also through the **index of an array**. This loop continues until all of the elements of the array are processed.

*Syntax*

```javascript
for (variable in object)
  statement`
```

```javascript
let person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(x) //fname lname age
  console.log(person[x]) // John Doe 25
}
```

*Syntax*

```javascript
for (variable in array)
  statement`
```

```javascript
let colors = ["blue", "yellow", "red"];

for (let i in colors) {
   console.log(i); //0 1 2
   console.log(colors[i]) //blue yellow red
}
```

---

**For/Of Loop**

Loops through the values of an **iterable** objects such as Arrays and Strings.

**Careful**: an object is not iterable

*Syntax*

```javascript
for (variable of object){
statement
}
```

```javascript
let colors = ["blue", "yellow", "red"];

for (let i of colors) {
   console.log(i); // logs blue, yellow, red
}
```

```javascript
//for of doesn't work for object
let person = {fname:"John", lname:"Doe", age:25};
for (let x of person) {
  console.log(x) 
} // Error: object is not iterable
```

---

**While Loop**

Allows code to be executed repeatedly, based on a given **Boolean condition**.

*Syntax*

```javascript
while (boolean condition)
{
   loop statements...
}
```

1. Checks the condition –> If it is evaluated to true, then the loop body statements are executed; otherwise, the first statement following the loop is executed.
When the condition becomes false, the loop terminates, which marks the end of its life cycle.

```javascript
let n = 0;
while (n < 3) {
  n++;
  console.log(n)
}
```

`for loops` and `while loops` are called **Entry Controlled loops** because the condition is tested before entering the loop body.

---

**Do while Loop**

Similar to `while loop,` but it checks for condition **after executing** the statements. This is an of **Exit Control Loop.**
The test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute whether the test condition is true or false at least once.

*Syntax*

```javascript
do
{
    statements..
}
while (condition);
```

```javascript
let i = 0;
do {
  console.log("The number is " + i)
  i++;
}
while (i < 10);
```

---
