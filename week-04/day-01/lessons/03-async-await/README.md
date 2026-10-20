# Async Await

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- async/await

---

## **Useful Resources**

- [Must Read Article on Promises](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)

---

### **Introduction to Async/Await**

ES8 introduces `async` and `await` syntax. It makes the asynchronous syntax look prettier and easier to understand without the `.then` and `.catch`.

The word `async` before a function means that a function always returns a promise.

`await` is a new operator used to wait for a promise to resolve or reject. It can only be used inside an `async`function.

The `async` and `await` keywords enable **asynchronous**, **promise-based** behavior to be written in a cleaner style, avoiding the need to configure promise chains explicitly.

---

### **Async**

*Syntax*

```javascript
async function <func_name>(param1,param2, ect ..) {
   statements
}

async function name(){}

const name = async function(){}

const name = async () => {}
```

An `async` function returns a Promise which will be resolved or rejected.

- When no return statement is defined, or a return statement has no value, the function returns a resolving promise, equivalent to `return Promise.Resolve()`

- When a return statement is defined with a value, it will return a resolving promise with the given return value, equivalent to return `Promise.Resolve(value)`

- When an error is thrown, a rejected promised will be returned with the thrown error, equivalent to `return Promise.Reject(error)` .

```javascript
async function foo() {
   return "Hey"
}

foo()
```

…is equivalent to:

```javascript
function foo() {
   return Promise.resolve("Hey")
}

foo()
```

We receive:

```javascript
Promise {<fulfilled>: 'Hey'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "Hey
```

No return value

```javascript
async function foo() {
   return;
}

foo()
```

We receive :

```javascript
Promise {<fulfilled>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
```

Error Thrown

```javascript
async function foo() {
   throw new Error("Something went wrong")
}

foo()
```

We receive :

```javascript
Promise {<rejected>: Error: Something went wrong
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: Error: Something went wrong
//IN RED : STOPS THE EXECUTION
Uncaught (in promise) Error: Something went wrong
    at foo (<anonymous>:2:10)
    at <anonymous>:1:1
```

---

### **Await**

**The keyword **`await` makes JavaScript wait until that promise settles and returns its result.
The function execution “pauses” and resumes when the promise resolves.

With the `await` keyword, we can *suspend* the asynchronous function while waiting for the `await`ed value to return a resolved promise.
While the function waits, the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

The argument that follows `await` in the `async` function must return a Promise!

Async functions make the code look like it’s synchronous, but it’s asynchronous and non-blocking behind the scenes.

*Explanation*

```javascript
async function foo() {
   await 1
}
```

…is equivalent to:

```javascript
function foo() {
   return Promise.resolve(1).then(() => undefined)
}
```

It’s just a more elegant syntax of getting the promised result than `promise.then`, easier to read and write.

---

**Example : **`async` function returns a Promise

```javascript
async function hello() {
    return 'Hello';
}

const b = hello();

console.log(b)
```

You get:

```javascript
Promise
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "Hello"
```

---

**Example : **`async` function with `then` keyword

```javascript
async function hello() {
    return 'Hello';
}

const b = hello();

b.then((result) => console.log(result))
```

You get:

```javascript
Hello
```

---

**Example : with arrow function**

```javascript
const hello = async () => 'Hello'

const b = hello();

b.then((result) => console.log(result))
```

---

### **Difference between Promises and async/await - Demonstration using Examples**

**Example with Promises**

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

const checkRequest = () => {
    console.log('test 2');
    endSemester
        .then(value =>
            console.log("I got an amazing gift : A ", value));
}

console.log('test 1');
checkRequest();
console.log('test 3');
```

What do you think will be the order or the console.log?

You get:

```javascript
test 1
test 2
test 3
I got an amazing gift : A  Computer
```

---

**Same Example with async/await**

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

const checkRequest = async () => {
    console.log('test 2');
    let gift = await endSemester;
    console.log(`I got an amazing gift : A ${gift}`);
}

console.log('test 1');
checkRequest();
console.log('test 3');
```

You get:

```javascript
test 1
test 2
test 3
I got an amazing gift : A  Computer
```

---

### **Async/Await Example**

```javascript
const getPosts = (userId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Post ","Done!");
        resolve([{ title: "Article on Javascript", idArticle : 1, idUser: userId}]);
    }, 1500);
});

const getComments = (postId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Comments ","Done!");
        resolve([{title: "Great Article", author: "John"}, 
                {title: "Interesting Article", author: "Lea"}]);
    }, 1500);
});

const getLikes = (postId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Likes ", "Done!");
        resolve(5);
    }, 1500);
});

console.log('Test1');

const getLatestPostActivity = async (userId) => {
    const posts = await getPosts(userId);
    const latestPost = posts[0];
    const comments = await getComments(latestPost.idArticle);
    const likes = await getLikes(latestPost.idArticle);

    return { comments: comments, likes: likes };
}

getLatestPostActivity(10)
.then(res => {
console.log('everything ', res);
})

console.log('Test2');
```

We receive

```javascript
Test1
Test2

Post  Done!
Comments  Done!
Likes  Done!

everything  
{comments: Array(2), likes: 5}

comments: 
0: {title: 'Great Article', author: 'John'}
1: {title: 'Interesting Article', author: 'Lea'}
likes: 5
```

---

### **Async/Await In Loops**

WARNING: async/await doesn’t play nicely with `.forEach()` loops
async/await plays nicely with `for` , `for of` and `while` loops

```javascript
async function showTimeout (milliseconds, id) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(id," Done!");
        resolve("OK");
      }, milliseconds);
    });
};

(async function() {
    console.log("start");

    ["first", "second", "third"].forEach(async (id) => {
        await showTimeout(2000, id);
    });

    console.log("end");
})();
```

We receive:

```javascript
start
end
first  Done!
second  Done!
third  Done!
```

As you can see, the “start” and “end” finish first, followed then by all async functions at the same time, which is not what you’re likely going for here.

```javascript
async function showTimeout (milliseconds, id) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(id," Done!");
        resolve("OK");
      }, milliseconds);
    });
};

(async function() {
    console.log("start");

    for (const item of ["first", "second", "third"]) {
        await showTimeout(2000, item);
    }

    console.log("end");
})()
```

We receive

```javascript
start
first  Done!
second  Done!
third  Done!
end
```

---

---

### **FormData**

FormData is the object to represent HTML form data.

The constructor is:

`let formData = new FormData([form]);`

If an HTML form element is provided, it automatically captures its fields.

The special thing about FormData is that network methods, such as fetch, can accept a FormData object as a body.
It’s encoded and sent out with `Content-Type: multipart/form-data.`

From the server point of view, that looks like a usual form submission.

```javascript
<form id="formElem">
      <input type="text" name="name" value="John">
      <input type="text" name="surname" value="Smith">
      <input type="submit">
</form>

  <script>
    formElem.onsubmit = async (e) => {
        e.preventDefault();
        let response = await fetch('/article/formdata/post/user', {
            method: 'POST',
            body: new FormData(formElem)
        });

        let result = await response.json();
        alert(result.message);
    };

    let formData = new FormData();
    formData.append('key1', 'value1');
    formData.append('key2', 'value2');
    console.log(formData);
    // // List key/value pairs
    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
    }
  </script>
```

---

### **Async/Await and Promise.all()**

The `Promise.all()` static method takes an iterable of promises as input and returns a single Promise.
This returned promise fulfills when all of the input’s promises fulfill with an array of the fulfillment values.
It rejects when any of the input’s promises rejects, with this first rejection reason.

The `Promise.all()` method is one of the promise concurrency methods. It can be useful for aggregating the results of multiple promises. It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully — all of whom we want to fulfill before the code execution continues.

```javascript
const getPosts = (userId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Post ","Done!");
        resolve([{ title: "Article on Javascript", idArticle : 1, idUser: userId}]);
    }, 1500);
});

const getComments = (postId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Comments ","Done!");
        resolve([{title: "Great Article", author: "John"}, 
                {title: "Interesting Article", author: "Lea"}]);
    }, 1500);
});

const getLikes = (postId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Likes ", "Done!");
        resolve(5);
    }, 1500);
});

const getLatestPostActivity = async (userId) => {
    const posts = await getPosts(userId);
    const latestPost = posts[0];
    const [comments, likes] = await Promise.all(
        [getComments(latestPost.idArticle), getLikes(latestPost.idArticle)]);

    return { comments: comments, likes: likes };
}

getLatestPostActivity(10)
.then(res => {
console.log('everything ', res);
})
```

We receive

```javascript
Post  Done!
Comments  Done!
Likes  Done!

everything  
{comments: Array(2), likes: 5}

comments: 
0: {title: 'Great Article', author: 'John'}
1: {title: 'Interesting Article', author: 'Lea'}
likes: 5
```

---

**Performance of Promise.all()**

Let’s take the two previous examples, with and without Promise.all to see the performance difference.

We will use [performance.now](http://performance.now/)[()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) a method that returns a high resolution timestamp in milliseconds to determine how much time has elapsed since a particular point in your code.

*Without Promise.all()*

```javascript
const getLatestPostActivity = async (userId) => {
    const t0 = performance.now();

    const posts = await getPosts(userId);
    const latestPost = posts[0];
    const comments = await getComments(latestPost.idArticle);
    const likes = await getLikes(latestPost.idArticle);

    const t1 = performance.now();
    console.log(`Call took ${t1 - t0} milliseconds.`);

    return { comments: comments, likes: likes };
}

getLatestPostActivity(10)
.then(res => {
console.log('everything ', res);
})
```

We receive

```javascript
Call took 4529.70000000298 milliseconds.
```

*With Promise.all()*

```javascript
const getLatestPostActivity = async (userId) => {
    const t0 = performance.now();

    const posts = await getPosts(userId);
    const latestPost = posts[0];
    const [comments, likes] = await Promise.all(
        [getComments(latestPost.idArticle), getLikes(latestPost.idArticle)]);

    const t1 = performance.now();
    console.log(`Call took ${t1 - t0} milliseconds.`);

    return { comments: comments, likes: likes };
}

getLatestPostActivity(10)
.then(res => {
console.log('everything ', res);
})
```

We receive

```javascript
Call took 3009.9000000059605 milliseconds.
```
