# Array methods

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Description :**

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
We will learn some built-in array methods in JavaScript that will make your life super easy and give you the ability to perform some magical operations on any Array and avoid code duplication. Also, you’ll learn what methods to use and when to use them.

---

## **What you will learn:**

Array methods:

- forEach()

- some()

- every()

---

## **Useful Resources :**

- [Video on](https://www.youtube.com/watch?v=B6_pnauRy2Q)`forEach` method

- [Video #2 on](https://www.youtube.com/watch?v=159EAISAxwg)`forEach` method

- [Video on](https://www.youtube.com/watch?v=l155liDxty8)`some` method

- [Video on](https://www.youtube.com/watch?v=jY1WZ29YOkM)`every` method

---

### **Array forEach Method**

The `forEach` method will call the function for each element in the array.

When using `forEach`, we have to specify a callback function. This callback will be executed on each element in the array.

---

**Example:**

```javascript
const myArray = [2, 3, 4, 5, 6]; 

//1st example with arrow function
myArray.forEach((number, index) => { 
    console.log("number: ", number) // logs each element of the array
    console.log("index: ", index) // logs each index of the array
}); 

//2nd example with arrow function
myArray.forEach((number, i, arr) => { 
    arr[i] = arr[i] * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]

//2nd example with function expression
myArray.forEach(function(number, i, arr) { 
    arr[i] = number * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]
```

---

**Exercise**

`const numbers = [10,11,12,15,20];`

Using the `for each` method, display only the even numbers in the array

---

### **Array some Method**

The `some()` method determines whether *at least one* element of the array matches the given predicate.

- It only returns `false` if *none* of the array elements match the predicate

Note : `some()` stops iterating over the array as soon as it finds an element that matches the predicate.

- In that case, it immediately returns `true` without inspecting the remaining elements.

---

**Example:**

```javascript
//1st example
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.some((value)=> { return (value%2 == 0); });
//output : true 
//because there is at least one even number in the array

//2nd example
myArr.some((value)=> { return (value < 0); });
//output: false 
//because there is no negative number in the array

//If the arrow function is only returning a value you don't need the return keyword
//If the arrow function takes only one parameter you can omit the parentheses
myArr.some(value => value < 0 );
//output: false 
//because there is no negative number in the array

//3rd example
function isEven(x) {
  console.log(x) 
  return (x % 2 == 0);
}

myArr.some((value) => isEven(value));
//output : 1 2 true
//stops iterating as soon as an even number is found 
```

---

**Exercise**

`const words = ["wow","hey","bye"];`

Check if **at least** one element of the array starts with the letter 'h'

---

### **Array every method**

The `every()` method determines whether *all* elements of the array match the predicate.

As soon as `every()` finds an array element that doesn’t match the predicate, it immediately returns `false` and doesn’t iterate over the remaining elements.

---

**Example:**

```javascript
//1st example
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.every((value)=> { return (value > 0); });
//output : true 
//because all the elements of the array are positive

//2nd example
myArr.every(value => value == 5 );
//output : false 
//because not all the elements of the array are equal to 5

//3rd example
myArr.every((value) => { 
    console.log(value); 
    return (value != 4); 
});
//output 1 2 3 4 false
//because as soon as an element in the array is equal to 4, the method every() stops iterating 
```

---

**Exercise**

`const words = ["hello","hey","hola"];`

Check if **all** the elements of the array start with the letter 'h'

## Worked solutions

[English explanations and runnable implementation](solutions.md).
