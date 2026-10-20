# Promises

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Promises**

A promise in Javascript is like an absolute promise.

For example :
Your mother promises you that if you get good grades at the end of the semester, she will buy you a gift.

A promise starts in the pending state which indicates that the promise hasn’t completed. It ends with either fulfilled (successful) or rejected (failed) state.

A promise has three states.

1. **Pending**: the semester isn’t yet finished, so you don’t know if you will get good grades. Therefore you don’t know if you will get the gift.

2. **Fulfilled**: you got good grades, and you receive the gift

3. **Rejected**: you didn’t get good grades, so you don’t receive the gift

In Javascript, a promise represents the result of an **asynchronous** operation.
It’s an object that returns a value that you hope to receive in the future.

---

### `Promise` constructor:

*Syntax*

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor 
});
```

- The function passed to `new Promise` is called the *executor*. When `new Promise` is created, the executor runs automatically.

- The arguments `resolve` and `reject` are **callbacks** provided by JavaScript

```javascript
let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades) {
        resolve("I will get a gift");
    } else {
        reject("I won't get the gift");
    }
});
```

Inside the executor:

- you manually call the `resolve()` function if the executor is completed successfully.

- you manually call the `reject()` function if an error occurs.

The `promise` object, returned by the `new Promise` constructor, has a few properties:

- The `state` of the promise : `"pending"`, `"resolved"` or `"rejected"`.

- The `result` of the promise. The result is initially `undefined`.
  
  - When the `resolve(value)` is called, the result becomes the `value` (the argument of the function `resolve`)
  - When the `reject(error)` is called, the result becomes the `error` (the argument of the function `reject`)

For example
If you call the variable `endSemester` you get:

```javascript
Promise {<resolved>: "I will get a gift"}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "I will get a gift"
```

The Promise status is **resolved** because the variable `goodGrades` is `true`.

To see the process of a Promise, let’s add a timer :

```javascript
let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (goodGrades) {
            resolve("I will get a gift");
        } else {
            reject("I won't get the gift");
        }
    }, 5000);
});

console.log(endSemester)
```

Before the 5 seconds are up, you get :

```javascript
Promise {<pending>}
__proto__: Promise
[[PromiseStatus]]: "pending"
[[PromiseValue]]: undefined
```

After the 5 seconds are up, the result is different :

```javascript
Promise {<resolved>: "I will get a gift"}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "I will get a gift"
```

---

### **Prototypes methods: Consuming a Promise**

The `prototype methods` are applied to the instances of the `Promise` object. There are three methods:

- `then()` : used to schedule a callback to be executed when the promise is successfully resolved.

```javascript
Promise.prototype.then(onFulfilled, onRejected) 
```

`onFulfilled` and `onRejected` are callbacks called depending on the state of the Promise

- `catch()`: used to schedule a callback to be executed when the promise is rejected

```javascript
Promise.prototype.catch(onRejected)
```

- `finally()` : used to execute the same piece of code whether the promise is fulfilled or rejected.

```javascript
Promise.prototype.finally(onFinally)
```

---

### **Example**

```javascript
let goodGrades = 83;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades > 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
});

endSemester.then(function (value) {
    console.log("I got an amazing gift : A ", value);
});

endSemester.catch(function (value) {
    console.log("Booo", value);
});

endSemester.finally(function () {
    console.log(`No matter if I get a gift or not, 
                I want to have good grades`);
});

console.log(endSemester)
```

You get :

```javascript
Promise {<resolved>: "Phone"}
__proto__: Promise
    [[PromiseStatus]]: "resolved"
    [[PromiseValue]]: "Phone"
```

```javascript
I got an amazing gift : A Phone
No matter if I get a gift or not, I want to have good grades
```

You can also use Arrow Functions:

```javascript
let goodGrades = 93;

let endSemester = new Promise((resolve, reject) => {
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades => 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
})

endSemester.finally(() => console.log(`No matter if I get a gift or not, 
                                       I want to have good grades`))
endSemester.then(value => console.log("I got an amazing gift : A ", 
                                      value ));
endSemester.catch(value => console.log("Booo", value));

console.log(endSemester)
```

You get :

```javascript
Promise {<pending>}
__proto__: Promise
    [[PromiseStatus]]: "resolved"
    [[PromiseValue]]: "Computer"
```

```javascript
No matter if I get a gift or not, I want to have good grades
I got an amazing gift : A Computer
```

---

### **Promises are asynchronous**

Example:

```javascript
let goodGrades = 95;

let endSemester = new Promise((resolve, reject) => {
    console.log("test1")
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades => 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
    console.log("test2")
})

endSemester.then(value => console.log("Yeahhh I got a gift"))
endSemester.finally(() => console.log(`No matter if I get a gift or not,
                               I want to have good grades`))
console.log("test3");
```

You get:

```javascript
test1
test2
test3
```

```javascript
Yeahhh I got a gift
No matter if I get a gift or not,I want to have good grades
```

You see that the console.log “test1”, “test2” and “test3” are ran before the `then()` and `finally()` method.

It’s because **Promises are asynchronous** : the code will run without blocking or waiting for the result.

---

### **Chaining Promises**

Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.

We chain promises by passing the result through the chain of `.then` handlers.

Because of promise chaining, you don’t need to catch errors in each individual `then()`. If you put `catch()` at the end of your promise chain, any errors in the promise chain will bypass the rest of the promise chain and go straight to your `catch()` error handler.

```javascript
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
```

**Each handler (success or error) can return a value, which will be passed to the next function as an argument, in the chain of promises.**

Example:

```javascript
let bankAmount = 1000
let expense = 500

let bankPromise = new Promise((resolve, reject) => {
    if (expense<bankAmount) {
        resolve(expense);
    } else {
        reject("Rejected by the Bank");
    }
});

//1st "then"
bankPromise.then((result) => {
    //result is the argument passed in the resolve function
    console.log(`The expense is ${result} dollars`);
    return result * 1.17;
//2nd "then"
}).then((resultTwo) => {
    //resultTwo is the expense including taxes
    console.log(`The expense included taxes is ${resultTwo} dollars`);
    bankAmount -= resultTwo;
    console.log(`I have ${bankAmount} dollars left in the bank`);
    return bankAmount;
}).catch((error) => {
    console.log(`We have a problem : ${error}`)
});
```

**Process**: Chaining promises

1. First `then()` :
The callback passed to the `then()` method executes once the `bankPromise` is resolved.
In the callback function, we show the result of the promise, the amount of the expense `500` and we return a new value: `result*1.17`.
**The value returned is passed to the next **`.then` handler

2. Second `then()` :
Because the first `then()` method returns a **new Promise** , we can call the second `then()` method on the returned Promise.
In the callback function, we show the result of the previous promise, the amount of the expense included taxes `585` and we return the amount left in the bank.

3. `catch()` : if there is an error somewhere in the process, the `catch()` method is executed.

We receive :

```javascript
The expense is 500 dollars
The expense included taxes is 585 dollars
I have 415 dollars left in the bank
```

We also receive the promise below, which is the promise returned by the last `then()` method

```javascript
Promise {<fulfilled>: 415}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 415
```

If the `bankPromise` rejects :

```javascript
let bankAmount = 1000
let expense = 1500

let bankPromise = new Promise((resolve, reject) => {
    if (expense<bankAmount) {
        resolve(expense);
    } else {
        reject("Rejected by the Bank");
    }
});

bankPromise.then((result) => {
    console.log(`The expense is ${result} dollars`);
    return result * 1.17;
}).then((resultTwo) => {
    console.log(`The expense included taxes is ${resultTwo} dollars`);
    bankAmount -= resultTwo;
    console.log(`I have ${bankAmount} dollars left in the bank`);
    return bankAmount;
//straight to the catch
}).catch((error) => {
    console.log(`We have a problem : ${error}`)
});
```

We receive

```javascript
We have a problem : Rejected by the Bank
```

If there is an error in one of the `then()` method:

```javascript
let bankAmount = 1000
let expense = 500

let bankPromise = new Promise((resolve, reject) => {
    if (expense<bankAmount) {
        resolve(expense);
    } else {
        reject("Rejected by the Bank");
    }
});

bankPromise.then((result) => {
    console.log(`The expense is ${result} dollars`);
    hello //undefined variable
    return result * 1.17;
}).then((resultTwo) => {
    console.log(`The expense included taxes is ${resultTwo} dollars`);
    bankAmount -= resultTwo;
    console.log(`I have ${bankAmount} dollars left in the bank`);
    return bankAmount;
}).catch((error) => {
    console.log(`We have a problem : ${error}`)
});
```

We receive

```javascript
The expense is 500 dollars
We have a problem : ReferenceError: hello is not defined
```

---

### **Promise API**

Follow this [**documentation**](https://javascript.info/promise-api)

---

**Promise.all**

Used to execute many promises in **parallel** and wait until all of them are ready.
`Promise.all` is a promise that takes an array of promises as an input (an iterable).

`Promise.all()` returns a promise that is :

- Fulfilled if all promises are fulfilled.
Then its fulfillment value is an Array with the fulfillment values of promises.

- Rejected if at least one Promise is rejected.
Then its rejection value is the rejection value of that Promise.

![promiseall-fulfilled](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D3/227783502-a5393307-be35-4949-88aa-dabbcdedb00d.png?raw=true)

![promiseall-rejected](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%207%20-%20Adv%20&%20Asynchronous%20Javascript/W7D3/227783555-62414c29-275e-44ba-9e6a-0ee0e96d8358.png?raw=true)

Look at [this part of the tutorial](https://javascript.info/promise-api#promise-all)

---

### **Promise.allSettled**

It returns a promise that always resolves after all of the given promises have either fulfilled or rejected.
It returns an array of objects that each describes the outcome of each promise.

Look at [this part of the tutorial](https://javascript.info/promise-api#promise-allsettled)

[Interesting tutorial - Promise.allSettled() VS Promise.all() in JavaScript](https://dev.to/viclafouch/promise-allsettled-vs-promise-all-in-javascript-4mle)

---

### **Promise.resolve/reject**

`Promise.resolve(value)` creates a resolved promise with the result value.

`Promise.reject(error)` creates a rejected promise with error.

Look at [**this part of the tutorial**](https://javascript.info/promise-api#promise-resolve-reject)
