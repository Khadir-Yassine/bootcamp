# Variable keywords

Course source: [Geeks Institute](https://www.geeks.institute/).
### **ES6**

It makes JavaScript better and easier to write and is used with modern web technologies like **React**, **Node.js**.
ES6 stands for EcmaScript 6. It’s also called EcmaScript 2015, or ES 2015. These are all different names for the ‘new Javascript’.

---

### **Reminder on Scopes**

**Local scope**

```javascript
function sayHello(){
    var name = "Sarah"
}
console.log(name) // undefined
```

---

**Global scope: Accessible everywhere**

```javascript
var name = "Sarah"

function sayHello(){
    console.log(name); //  "Sarah"
    name = "Mark";
    console.log(name); // "Mark"
}

sayHello()

console.log(name) // "Mark"
```

---

### **The problem with the keyword var**

**NEW with ES6: Block scope (Everything between curly brackets - if/else or for-loop)**

The `var` keyword make the variable inside a block accessible outside the block

```javascript
var age = 20

if (age > 18) {
    var canDrive = true 
    console.log(canDrive); // true
} 
console.log(canDrive);  // true
```

---

**Redeclaration**

```javascript
var name = "Sarah"
var name = "Dan"
console.log(name);  // "Dan"  
```

---

### **The solution with the keyword let**

**Support Block scope**

```javascript
let age = 20

if (age > 18) {
    console.log(age) // 20
    let canDrive = true 
    console.log(canDrive); // true
} 
console.log(canDrive); //ReferenceError: canDrive is not defined
```

---

The variable can not be redeclared, but is can be reassigned.

```javascript
let name = "Sarah"
let name = "Dan" // SyntaxError: Identifier 'name' has already been declared

name = "David"
console.log(name)
```

---

### **The solution with the keyword const**

**Support Block scope**

```javascript
let age = 20

if (age > 18) {
    const canDrive = true 
    console.log(canDrive); // true
} 
console.log(canDrive);  // ReferenceError: canDrive is not defined
```

---

Doesn’t allow redeclaration, and the value of the variable can not be changed.

```javascript
const name = "Sarah"
name = "David" // TypeError: Assignment to constant variable.
```

---

### **String and Variable Concatenation**

1st Way

```javascript
let name = "Lea"
let greetings = "Hello "+ name
console.log(greetings)
```

---

2nd Way

```javascript
let name = "Lea"
let greetings = `Hello ${name}`;
console.log(greetings)
```
