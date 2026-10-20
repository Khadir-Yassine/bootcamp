# Exercise XP

Course source: [Geeks Institute](https://www.geeks.institute/).
### **🌟 Exercise 1 : Find the numbers divisible by 23**

**Instructions**

1. Create a function call `displayNumbersDivisible()` that takes no parameter.

2. In the function, loop through numbers 0 to 500.

3. Console.log all the numbers divisible by 23.

4. At the end, console.log the sum of all numbers that are divisible by 23.

  ```javascript
Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
368 391 414 437 460 483
Sum : 5313
```

5. **Bonus**: Add a parameter **divisor** to the function.

  ```javascript
displayNumbersDivisible(divisor)
  Example:
displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
and their sum
displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
and their sum
```

---

### **🌟 Exercise 2 : Shopping List**

**Instructions**

```javascript
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
```

1. Add the `stock` and `prices` objects to your js file.

2. Create an array called `shoppingList` with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

3. Create a function called `myBill()` that takes no parameters.

4. The function should return the total price of your `shoppingList`. In order to do this you must follow these rules:

  1. The item must be in stock. (*Hint* : check out `if .. in`)
  2. If the item is in stock find out the price in the `prices` object.

5. Call the `myBill()` function.

6. **Bonus:** If the item is in stock, decrease the item’s stock by 1

---

### **Exercise 3 : What’s in my wallet ?**

**Instructions**

**Note**: Read the illustration (point 4), while reading the instructions

1. Create a function named `changeEnough(itemPrice, amountOfChange)` that receives two arguments :

  - an item price
  - and an array representing the amount of change in your pocket.

2. In the function, determine whether or not you can afford the item.

  - If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should **return** `true`
  - If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should **return** `false`

3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

  ```javascript
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01
```

  4. To illustrate:

After you created the function, invoke it like this:

```javascript
changeEnough(4.25, [25, 20, 5, 0])
```

- The value `4.25` represents the item’s price

- The array `[25, 20, 5, 0]` represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.

- The function should return `true`, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you `6.25 + 2 + .25 + 0 = 8.50` which is bigger than 4.25 (the total amount due)

Examples

```javascript
changeEnough(14.11, [2,100,0,0]) => returns false
changeEnough(0.75, [0,0,20,5]) => returns true
```

---

### **🌟 Exercise 4 : Vacations Costs**

**Instructions**

Let’s create functions that calculate your vacation’s costs:

1. Define a function called `hotelCost()`.

  - It should ask the user for the number of nights they would like to stay in the hotel.
  - If the user doesn’t answer or if the answer is not a number, ask again.
  - The hotel costs $140 per night. The function should `return` the total price of the hotel.

2. Define a function called `planeRideCost()`.

  - It should ask the user for their destination.
  - If the user doesn’t answer or if the answer is not a string, ask again.
  - The function should `return` a different price depending on the location.

  - “London”: 183$
  - “Paris” : 220$
  - All other destination : 300$

3. Define a function called `rentalCarCost()`.

  - It should ask the user for the number of days they would like to rent the car.
  - If the user doesn’t answer or if the answer is not a number, ask again.
  - Calculate the cost to rent the car. The car costs $40 everyday.

  - If the user rents a car for more than 10 days, they get a 5% discount.
  - The function should `return` the total price of the car rental.

4. Define a function called `totalVacationCost()` that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
**Hint:** You have to call the functions `hotelCost()`, `planeRideCost()` and `rentalCarCost()` inside the function `totalVacationCost()`.

5. Call the function `totalVacationCost()`

6. **Bonus**: Instead of using a `prompt` inside the 3 first functions, only use a prompt inside the `totalVacationCost()` function. You need to change the 3 first functions, accordingly.

---

### **🌟 Exercise 5 : Users**

**Instructions**

Create a new structured HTML file and a new Javascript file

```javascript
<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>
```

1. Add the code above, to your HTML file

2. Using Javascript:

  1. Retrieve the `div` and console.log it
  2. Change the name “Pete” to “Richard”.
  3. Delete the second `<li>` of the second `<ul>`.
  4. Change the name of the first `<li>` of each `<ul>` to your name. (*Hint* : use a loop)

3. Using Javascript:

  1. Add a class called `student_list` to both of the `<ul>'s`.
  2. Add the classes `university` and `attendance` to the first `<ul>`.

4. Using Javascript:

  1. Add a “light blue” background color and some padding to the `<div>`.
  2. Do not display the `<li>` that contains the text node “Dan”. (the last `<li>` of the first `<ul>`)
  3. Add a border to the `<li>` that contains the text node “Richard”. (the second `<li>` of the `<ul>`)
  4. Change the font size of the whole body.

5. **Bonus**: If the background color of the `div` is “light blue”, alert “Hello x and y” (x and y are the users in the div).

---

### **🌟 Exercise 6 : Change the navbar**

**Instructions**

Create a new structured HTML file and a new Javascript file

```javascript
<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>
```

1. Add the code above, to your HTML file

2. Using Javascript, in the `<div>`, change the value of the id attribute from *navBar* to *socialNetworkNavigation*, using the `setAttribute` method.

3. We are going to add a new `<li>` to the `<ul>`.

  1. First, create a new `<li>` tag (use the `createElement` method).
  2. Create a new text node with “Logout” as its specified text.
  3. Append the text node to the newly created list node (`<li>`).
  4. Finally, append this updated list node to the unordered list (`<ul>`), using the `appendChild` method.

4. Use the `firstElementChild` and the `lastElementChild` properties to retrieve the first and last `<li>` elements from their parent element (`<ul>`). Display the text of each link. (**Hint**: use the `textContent` property).

---

### **Exercise 7 : My Book List**

**Instructions**

Take a look at [this link](https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript) for help.

The point of this challenge is to display a list of two books on your browser.

1. In the body of the HTML page, create an empty section:
`<section class="listBooks"></section>`

2. In the js file, create an array called `allBooks`. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :

  - title,
  - author,
  - image : a url,
  - alreadyRead : which is a boolean (true or false).

3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

4. **Requirements : All the instructions below need to be coded in the js file**:

  1. Using the DOM, render each book inside a div (the div must be added to the `<section>` created in part 1).
For each book :

  - You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
  - The width of the image has to be set to 100px.
  - If the book is already read. Set the color of the book’s details to red.

---

## **Submit your exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| > 2h30 |

---

One Last Thing: **Good luck!**


[Worked solutions](solutions.md)
