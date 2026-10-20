# Exercise 4 : Post JSON Data with React JS

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

## **Exercise 4 : Post JSON Data with React JS**

1. Go to [webhook](https://webhook.site/) and copy the link of “Your unique URL”.

2. Remember to turn on “Enable CORS” on the webhook website.

3. In the `App.js` file, create an `async await` function to `fetch` the json data from the URL you copied.
  
  - Use a `POST` method and some `headers`.
  - Send this hardcoded `stringified` json data to your body.
  
  ```javascript
key1: 'myusername',
email: 'mymail@gmail.com',
name: 'Isaac',
lastname: 'Doe',
age: 27
```

4. In the `App.js` file, create a button, that when clicked on, displays the response in the console.

**Expected output in the console after the button was clicked:**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%203-%20Post%20JSON%20Data%20with%20React%20JS/output%20in%20console.jpg)

5. Finally, open the [webhook](https://webhook.site/) site again, and check the output in the API.

**Expected output in the URL:**

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day4/Exercises%20XP%20Ninja/Exercise%203-%20Post%20JSON%20Data%20with%20React%20JS/output%20in%20url.jpg)

---
