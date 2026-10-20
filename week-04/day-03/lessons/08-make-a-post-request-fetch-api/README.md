# Make a POST request- Fetch API

Course source: [Geeks Institute](https://www.geeks.institute/).
### **Table of Contents**

- [Serve static files and receive data from a form submission](https://learn.geeks.institute/courses/collection/127/course/671/section/1849/chapter/2954#Serve_static_files_and_receive_data_from_a_form_submission)

- [Use the FETCH API](https://learn.geeks.institute/courses/collection/127/course/671/section/1849/chapter/2954#Use_the_FETCH_API)

---

**Last Updated: January 11th, 2025**

---

### **Serve static files and receive data from a form submission**

1. To store your files on the client-side, create a **public** directory and include an `index.html` file.

2. Express provides a built-in method to serve your static files.

```javascript
app.use(express.static('public'));
```

- `express.static()` finds and returns the static files requested.

- The argument you pass into `express.static()` is the name of the directory you want Express to serve files. Here, the public directory.

**Example**

**public/index.html**

```javascript
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Form</title>
  </head>
  <body>
    <form action="/search" method="POST">
        <label>Name</label><input name="fullname">
        <label>Address</label><input name="Address">
    </form>
    </body>
</html>
```

**app.js**

```javascript
const express = require('express');
const app = express();
//middleware
app.use(express.json())

//serve static files
app.use(express.static('public'));

//middleware - parses urlencoded bodies 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('welcome, ' + req.body.fullname)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

Go to `http://localhost:3000/` you will see the form. As soon as the form is submitted, you will be redirected to `http://localhost:3000/search` because of the `action` of the form.
In your terminal you will see the data from the `req.body`, for example

```javascript
Example app listening on port 3000!
{ fullname: 'John Smith', Address: 'Timesquare New York' }
```

---

### **Use the FETCH API**

Copy/Paste this code. Run the code.
Fill and submit the 3 forms to see the difference in handling the data

**public/index.html**

```javascript
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h2>Get</h2>
    <form action="http://localhost:3000/login" method="GET" target="_blank">
        <label for="getUsername">Username:</label>
        <input type="text" id="getUsername" name="username">
        <label for="getPassword">Password:</label>
        <input type="password" id="getPassword" name="password">
        <input type="submit" value="Submit">
    </form>

    <h2>Post</h2>
    <form action="http://localhost:3000/login" method="POST" target="_blank">
        <label for="postUsername">Username:</label>
        <input type="text" id="postUsername" name="username" value="">
        <label for="postPassword">Password:</label>
        <input type="password" id="postPassword" name="password" value="">
        <input type="submit" value="Submit">
    </form>

    <h2>Fetch</h2>
    username: <input type="text" name="username" id="username">
    password: <input type="password" name="password" id="password">
    <button type="button" name="button" onclick="sendData()">Fetch Data</button>

    <div id="root"></div>

    <script src="script.js"></script>
  </body>
</html>
```

**public/script.js**

```javascript
function sendData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let userdata = {
      username,
      password
    }
    console.log(userdata);

    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data.message} ${data.user}`
    })
    .catch(e => console.log(e))
  }
```

**app.js**

```javascript
const express = require('express');
const app = express();
//middleware
app.use(express.json())

//serve static files
app.use(express.static('public'));

//middleware - parses urlencoded bodies 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.route('/login')
  .get( (req,res)=> {
    console.log("Query", req.query); //{ username: 'john', password: '123' }
    const user = req.query.username;
    console.log("User", user); //john
    const pass = req.query.password;
    console.log("Password", pass); //123
    const data = {
      message: 'Welcome Back',
      user
    }
    console.log("GET DATA", data);
    // { message: 'Welcome Back', user: 'john' }
    res.send(data)
  })
  .post( (req,res) => {
    console.log("req.body", req.body); //{ username: 'sara', password: 'abc' }
    let user = req.body.username;
    let pass = req.body.password;
    console.log("User", user); //Sara
    console.log("Pass", pass); //abc
    const data = {
      message: 'Welcome New User',
      user
    }
    console.log('POST DATA',data);
    //{ message: 'Welcome New User', user: 'Sara' }
    res.send(data)
  })

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```
