# Async/Await : Error Handling & Fetch

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Difference between error handling using Promises and using Async/Await

---

### **Why is async/await better?**

**1. Concise and clean** : `Async`/`await` avoids nesting our code.

**2. Error handling** : `Async`/`await` makes it possible to handle both synchronous and asynchronous errors with `try`/`catch`.

---

### **Error Handling**

**Difference between Promises and Async/Await - Demonstration with examples**

---

**Example with Promises and error handling**

- In this example, try/catch won’t handle the undefined variable because the error is happening inside a promise.

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
    try {
        endSemester
            .then(value => {
                hey; //variable not defined
                console.log("I got an amazing gift : A ", value);
            });
    } catch (err) {
        console.log("In the catch ", err)
    }

}

console.log('test 1');
checkRequest();
console.log('test 3');
```

You get :

```javascript
test 1
test 2
test 3
//IN RED : STOPS THE EXECUTION
Uncaught (in promise) ReferenceError: hey is not defined
```

---

Or you should write :

```javascript
const checkRequest = () => {
    console.log('test 2')
    try {
        endSemester
            .then(value => {
                hey //variable not defined
                console.log("I got an amazing gift : A ", value)
            })
            //handle asynchronous errors
            .catch((err) => {
                console.log(err)
            })
    } catch (err) {
        console.log("In the catch ", err)
    }
}

console.log('test 1');
checkRequest();
console.log('test 3');
```

You get :

```javascript
test 1
test 2
In the catch  ReferenceError: hey is not defined
test 3
```

---

**Example with async/await and error handling**

```javascript
const checkRequest = async () => {
    console.log('test 2');
    try {
        hey //variable not defined
        let result = await endSemester;
        console.log("I got an amazing gift : A ", result);
    } catch (err) {
        console.log("In the catch ", err);
    }
}

console.log('test 1');
checkRequest();
console.log('test 3');
```

You get :

```javascript
test 1
test 2
In the catch  ReferenceError: hey is not defined
test 3
```

---

### **Fetch API - Using Async/Await**

**Demonstration with examples**

---

Example async/await and Fetch API

```javascript
const fetchSunRise = async (endpoint) => {
    const response = await fetch(endpoint);
    console.log("response", response)
    let data = await response.json();
    console.log("data", data);
    let sunrise = data.results.sunrise;
    console.log(`The hour of the sunrise in Madrid is: ${sunrise}`);
}

fetchSunRise("https://api.sunrise-sunset.org/json?lat=40.4167&lng=-3.7033");
```

Try it in your browser.

---

### **Error Handling & Fetch API - Using Async/Await**

**Demonstration with examples**

---

Example async/await and Fetch API and try/catch

```javascript
const fetchSunRise = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        console.log("response", response)
        let data = await response.json();
        console.log("data", data);
        hey; // undefined variable
        let sunrise = data.results.sunrise;
        console.log(`The hour of the sunrise in Madrid is: ${sunrise}`);
    } catch (err) {
        console.log(err);
    }
}

fetchSunRise("https://api.sunrise-sunset.org/json?lat=40.4167&lng=-3.7033");
```

You get :

![result async await try/catch](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%205/Day%204/js%20result%20async%20await%20try-catch.png?raw=true)

---

### **Error Handling & throw error & Fetch API - Using Async/Await**

**Demonstration with examples**

- In this example, the undefined variable will be caught, because `async` returns a Promise.

```javascript
const fetchSunRise = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (response.status == 400) {
            throw new Error("Something went wrong")
        } else {
            console.log("response", response)
            hey; // undefined variable
            let data = await response.json();
            console.log("data", data);
            let sunrise = data.results.sunrise;
            console.log(`The hour of the sunrise in London is: ${sunrise}`)
        }
    } catch (err) {
        console.log("In the catch ", err)
    }
}

fetchSunRise("https://api.sunrise-sunset.org/json?lat=0.0853&lng=0.7818")
```

```javascript
In the catch  ReferenceError: hey is not defined
    at fetchSunRise (<anonymous>:8:13)
```

---

You can also remove it from the function and **chain a .catch** to the function call :

```javascript
const fetchSunRise = async (endpoint) => {
    const response = await fetch(endpoint);
    if (response.status == 400) {
        throw new Error("API - wrong link ")
    } else {
        console.log("response", response)
        hey // undefined variable
        let data = await response.json();
        console.log("data", data)
        let sunrise = data.results.sunrise
        console.log(`The hour of the sunrise in London is: ${sunrise}`)
    }
}

fetchSunRise("https://api.sunrise-sunset.org/json?lat=0.0853&lng=0.7818")
.catch((err) => console.log("Error", err))
```
