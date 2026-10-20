# 🌟 Exercise 3 : Async function

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **🌟 Exercise 3 : Async function**

**Instructions**

Improve the program below :

```javascript
fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));
```

1. Create an `async` function, that will `await` for the above GET request.
The program shouldn’t contain any `then()` method.

2. Make sure to check the status of the Response and to catch any occuring errors.

*Expected Output:*

![output](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%204/Exercise%20XP/Screenshot%20from%202020-06-15%2014-45-33.png)

---

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
