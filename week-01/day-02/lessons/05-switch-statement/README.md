# Switch Statement

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Switch Case**

Use the switch statement to select one of the many code blocks to be executed.

You can include many different options in a switch statement.
Include a `break` statement after each option, so it will not execute all of them.
In the end, add a default parameter to be executed if no other parameter is met.

*Syntax*

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

---

**1. How does it work?**

- The switch expression is evaluated once.

- The value of the expression is compared with the values of each case.

- if there is a match, the associated block of code is executed.

If multiple cases match a case value, the **first** case is selected.
Switch cases use **strict comparison (===)**. The values must be of the same type to match.

```javascript
let fruit = 'Papayas';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}
```

---

**2. The break Keyword**

When JavaScript reaches a `break` keyword, it breaks out of the switch block.
This will stop the execution inside the block.
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

---

**3. The default Keyword**

The `default` keyword specifies the code to run if there is no case match:
The `default` case does not have to be the last in a switch block:

```javascript
let fruit = 'Papayas';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
}
```

---

**Exercise**

Write as comments the steps of the resolution of this piece of code

Guess what will be the result before checking it

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
```

---

**Exercise**

Write as comments the steps of the resolution of this piece of code

Guess what will be the result before checking it

```javascript
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```


[Worked solutions](solutions.md)
