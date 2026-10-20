# Daily challenge #1 : Data and Server

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What You will learn :**

- Express Server

- React Form

---

## **Instructions :**

You will send data to an Express server with React and display it.

**Part I**

1. Create a **server** folder, containing a `server.js` file. Create a GET request to the `/api/hello` route that sends the message “Hello From Express”.

2. Create a React App in a **client** folder. In the `App.js` file, use the `componentDidMount()` method and `async await` to fetch the message from the `/api/hello` route, and display it as a header.

---

**Part II**

1. In the `App.js` file create a form. You will type something in the input field and submit the form. Use `async await` to POST the input value to the Express server.

2. In the `server.js` file, create a POST request, that will call the `/api/world` route. This request will retrieve the body and respond with a message “I received your POST request. This is what you sent me: `<value of the input field>`“

3. The message will also be displayed right below the input field:
  
  ![gif](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Daily%20Challenge/send-to-server.gif)

4. You will also see the message that you sent from the client, using a console.log on the request body in the POST Express route:
  
  ![imagenode](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day2/Daily%20Challenge/node.jpeg)

---

## **More info**

| Duration (approx) | Difficulty |
| --- | --- |
| > 40 minutes | ⭐ |

---

## **Submit your Daily Challenge :**

Don’t forget to push to Github
