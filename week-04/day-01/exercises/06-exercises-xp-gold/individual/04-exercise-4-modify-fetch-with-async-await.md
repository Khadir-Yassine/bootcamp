# Exercise 4 : Modify fetch with Async/Await

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 4 : Modify fetch with Async/Await**

**Instructions**

Using this code:

```javascript
const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData()
```

1. Modify the function above. Add `async await` in place of the following line:
`fetch(url).then(resp => resp.json())`
So there shouldn’t be any `.then()` calls anymore!

2. Add a **try catch block** in order to catch any errors. To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.

*Excepted Output:*

![output](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%204/Exercice%20XP%20Ninja/Screenshot%20from%202020-06-15%2014-48-45.png)

*Excepted Output:*

![output](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%204/Exercise%20XP%20Gold/Screenshot%20from%202020-06-14%2018-06-31.png)

---

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
