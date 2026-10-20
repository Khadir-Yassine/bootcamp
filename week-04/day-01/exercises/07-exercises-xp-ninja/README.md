# Exercises XP Ninja

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What we will learn**

- Fetch API

- Async/Await

---

### **Exercise 1 : Giphy API #3**

1. Use this [Giphy API documentation](https://developers.giphy.com/docs/api/endpoint#search). Use the API KEY provided in Exercises XP.

2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.

3. Use the Fetch API to fetch the gifs. Make sure to check the status of the Response and to catch any occuring errors.

4. Append the relevant gifs to the page.
**Hint** : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
  
  ![output](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%202/Exercise%20XP%20Ninja/FireShot%20Capture%20175%20-%20Document%20-%20.png)

5. Allow the user to remove all of the GIFs by clicking a delete button
  
  ![delete](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%202/Exercise%20XP%20Ninja/FireShot%20Capture%20176%20-%20Document%20-%20.png)

---

### **Exercise 2 : Analyze #4**

**Instructions**

Analyze the code provided below - what will be the outcome?

```javascript
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)
```

---

### **Exercise 3 : Analyze #5**

**Instructions**

Analyze the code provided below - what will be the outcome?

```javascript
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)
```

---

### **Exercise 4 : Analyze #6**

**Instructions**

Analyze the code provided below - what will be the outcome?

```javascript
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)
```

---

## **Submit your exercises :**

Don’t forget to push to

---

## **More info**

| Duration (approx) |
| --- |
| > 1h15 |

---

One Last Thing: **Good luck!**

---
