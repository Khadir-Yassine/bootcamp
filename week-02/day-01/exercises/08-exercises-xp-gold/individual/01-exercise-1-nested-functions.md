# Exercise 1 : Nested functions

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1 : Nested functions**

1. Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

2. Change the code below to **nested arrow functions**.

```javascript
let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

landscape()
```

---
