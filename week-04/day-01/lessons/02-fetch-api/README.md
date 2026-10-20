# Fetch API

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- AJAX

- XMLHttpRequest

- Fetch API

---

## **Useful Resources**

- [Documentation #1 on XMLHttpRequest Object](https://xhr.spec.whatwg.org/#introduction)

- [Documentation #2 on XMLHttpRequest Object](https://javascript.info/xmlhttprequest)

- [Difference between JSON and XML](https://hackr.io/blog/json-vs-xml)

- [Understanding Asynchronous JavaScript](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)

- [Video on the Fetch API](https://www.youtube.com/watch?v=uBR2wAvGces)

---

### **What’s AJAX?**

AJAX stands for **A**synchronous **J**avaScript And **X**ML.

It’s the use of the `XMLHttpRequest object` to **communicate with servers**. It can send and receive information in various formats, including JSON, XML, HTML, and text files.

AJAX’s most appealing characteristic is its “**asynchronous**” nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

The two significant features of AJAX allow you to do the following:

- Make requests to the server without reloading the page

- Receive and work with data from the server

---

### **Request/Response between the client and the server**

There are multiple ways to send a network request and get information from the server.

- Using the `XMLHttpRequest object` to **communicate with servers** via callbacks.

- Using the Fetch API. Nowadays, the modern and versatile way is to make Ajax calls using `fetch()`. Fetch API is much simpler and cleaner. It uses the Promise to deliver more flexible features to make requests to servers from the web browsers

**Fetch API is a Web API**

Browsers use JavaScript to display web pages, handle user interactions, send requests to servers and to receive responses. To make all this possible, JavaScript provides Web APIs which can be used to perform browser related functions.
[Here is a list](https://developer.mozilla.org/en-US/docs/Web/API) of the Web APIs.

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a Web API. It provides an interface for fetching resources.

- [fetch() documentation](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

- [Response object documentation](https://developer.mozilla.org/en-US/docs/Web/API/Response)

---

### **Fetch API**

The `fetch()` method is available in the global scope, it instructs the web browsers to send a request to a URL.

The `fetch()` method takes one mandatory argument: the path to the resource you want to fetch.

```javascript
fetch(resource)
```

The `fetch()` method returns a `Promise` that resolves to the `Response` to that request, whether it is successful or not.
The Response object holds information about the server’s response.

Let’s fetch this Third Party API : `https://api.artic.edu/api/v1/artworks/4` - an API from the Art Institute of Chicago that allows developers to integrate the museum’s public data into their projects

```javascript
console.log(fetch("https://api.artic.edu/api/v1/artworks/4"))
```

We receive:

```javascript
Promise {<pending>}
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : Response
```

If we open the `[[PromiseResult]]` we see the informations held by the Response object :

```javascript
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://api.artic.edu/api/v1/artworks/4"
```

We notice the properties `ok : true` and `status: 200`, it means that the server sent us back a response.

A `fetch()` promise only rejects when a network error is encountered (which is usually when there’s a permissions issue or similar). A `fetch()` promise does not reject on HTTP errors (404, etc.). Instead, a `then()` handler must check the `Response.ok` and/or `Response.status` properties.

We will need to consume a Promise using `then`, `catch` and `finally`.

- If the promise returned is `resolved`, the function within the `then()` method is executed. That function contains the code for handling the data received from the API.

- If the promise returned is `rejected`, the function within the `catch` method is executed.

---

*Syntax*

```javascript
fetch(url) // passing the url of the API as a parameter
.then(function() {
    // Handle the data from the API
})
.catch(function() {
    // Handle any errors
});
```

In order to access the body of the response from the server, the `Response` object provides multiple promise-based methods:

- `response.text()` – read the response and return as text,

- `response.json()` – parse the response as JSON,

- `response.formData()` – return the response as FormData object,

---

### **GET request**

*Steps* :

1. We call the Fetch API and pass in the URL to the API.

2. The `fetch()` method returns a Promise that needs to be consumed. We use the `then()` method that receives the `Response` object.
  
  - We check the status of the reponse.
  
  - If the response is successful, the data is parsed. In fact, the data returned from the API is not usually in a useable form. So we’ll need to convert the data to a form which our JavaScript can operate with.
To extract the JSON body content from the response, we use the `Response.json()` method.
  - If the response is not successful, we throw an error that will be caught by the `catch` and will log the potential error to the console.

3. The `Response.json()` returns a Promise that resolves with the result of parsing the response body text as JSON.
Therefore, the JSON data needs to be processed, se we add another `then()` statement.

**JS - **`script.js`

```javascript
console.log("Starting ...")

const getArtwork = () => {
    console.log("Working ...")
    fetch("https://api.artic.edu/api/v1/artworks/14572")
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            console.log(obj);
            console.log(`The painting is named ${obj.data.title} 
                         by the artist ${obj.data.artist_title}`)
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}

getArtwork()
```

We get :

```javascript
Starting ...
Working ...
Work Done ...
{data: {…}, info: {…}, config: {…}}
The painting is named The Millinery Shop 
by the artist Hilaire Germain Edgar Degas
```

If the artwork couldn’t be found, for example using this url : `https://api.artic.edu/api/v1/artworks/1`. We get :

```javascript
Starting ...
Working ...
Work Done ...
GET https://api.artic.edu/api/v1/artworks/1 404
We got : Error: Wrong artwork
```

---

**Using the DOM to display the information**

**HTML - **`index.html`

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section>
        <p id="info-art"></p>
    </section>
    <script src="script.js"></script>
</body>
</html>
```

**JS - **`script.js`

```javascript
console.log("Starting ...")

const displayArtwork = (art) => {
    const {title, artist_title : artist} = art.data
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `The painting is named 
    ${title} by the artist ${artist}`;
}

const displayError = (error) => {
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `We have a problem ${error}`;
}

const getArtwork = () => {
    console.log("Working ...")
    fetch("https://api.artic.edu/api/v1/artworks/14572")
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            displayArtwork(obj);
        })
        .catch((error)  => {
            displayError(error);
        });
    console.log("Work Done ...")
}

getArtwork()
```

---

### **POST Request**

You can also use the Fetch API to make POST requests. This is useful if you need to send data to a web server, such as when submitting forms or uploading files.

```javascript
fetch(resource, options)
```

- **resource** : This defines the resource that you wish to fetch. This can either be a string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch, or a Request object.

- **options** *Optional*
An object containing any custom settings that you want to apply to the request. The possible options are:
  
  - **method** : The request method, e.g., GET, POST, PUT, DELETE
  - **headers** : Any headers you want to add to your request, contained within a Headers object or an object literal with String values. It helps the server understand what type of request it is dealing with.
  - **body** : Any body that you want to add to your request: this can be a Blob, an ArrayBuffer, a TypedArray, a DataView, a FormData, a URLSearchParams, string object or literal. Note that a request using the GET method cannot have a body.

*Steps* :

We will use this endpoint : `https://jsonplaceholder.typicode.com/posts` to send a new article to the server. The data will not be saved in any database,
this API is just for demonstration purposes.

1. We call the Fetch API, we pass in the URL to the API and the options :
  
  - the **method** : `POST`
  - the **body** : the new article we want to add.
  
  - the body holds the data to be sent to the server and added to the JSONPlaceholder posts API.
  - Note: It is always best to serialize your data before sending it to a web server or API using the `JSON.stringify()` method. This will help convert and ensure your JSON data is in string format.
  - the **headers** : `'Content-Type': 'application/json; charset=UTF-8'`. The headers hold the type of content you want to send to the server, which in this case is JSON data.

2. If the request is successful, the server will send us back the new article as well as its id.

**JS - **`script.js`

```javascript
console.log("Starting ...")

const data = {
    title: "Article on Javascript",
    body: "This is an article presenting the new features of Javascript", 
    userId:1
}

const objBody = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
}

const addArticle = () => {
    console.log("Working ...")
    fetch("https://jsonplaceholder.typicode.com/posts", objBody)
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong post")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((error)  => {
            console.log(error);
        });
    console.log("Work Done ...")
}

addArticle()
```

We receive

```javascript
Starting ...
Working ...
Work Done ...
```

```javascript
Response {type: 'cors', 
url: 'https://jsonplaceholder.typicode.com/posts', 
redirected: false, status: 201, ok: true, …}

body: (...)
bodyUsed: true
headers: Headers {}
ok: true
redirected: false
status: 201
statusText: ""
type: "cors"
url: "https://jsonplaceholder.typicode.com/posts"
```

```javascript
{
  "title": "Article on Javascript",
  "body": "This is an article presenting the new features of Javascript",
  "userId": 1,
  "id": 101
}
```

---

**POST request using Form Data**

The `FormData` interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the `fetch()` method.

The `Object.fromEntries()` static method transforms a list of key-value pairs into an object.

**HTML - **`index.html`

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <label for="title-article">The title of the article</label>
        <input type="text" name="title" id="title-article">
        <label for="content-article">The content of the article</label>
        <input type="text" name="body" id="content-article">
        <label for="user-article">The user that wrote the article</label>
        <input type="text" name="userId" id="user-article">
        <button>Submit the article</button>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

**JS - **`script.js`

```javascript
console.log("Starting ...")

const addArticle = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const objBody = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }

    console.log("Working ...")
    fetch("https://jsonplaceholder.typicode.com/posts", objBody)
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong post")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((error)  => {
            console.log(error);
        });
    console.log("Work Done ...")
}

const formArticle = document.querySelector("form");
formArticle.addEventListener("submit", addArticle);
```

We receive

```javascript
Starting ...
Working ...
Work Done ...
```

```javascript
Response {type: 'cors', 
url: 'https://jsonplaceholder.typicode.com/posts', 
redirected: false, status: 201, ok: true, …}

body: (...)
bodyUsed: true
headers: Headers {}
ok: true
redirected: false
status: 201
statusText: ""
type: "cors"
url: "https://jsonplaceholder.typicode.com/posts"
```

```javascript
{
  "title": "Article on Javascript",
  "body": "This is an article presenting the new features of Javascript",
  "userId": 1,
  "id": 101
}
```

---

**Exercise**

**Exercise**

Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:

`https://api.chucknorris.io/jokes/random?category={category}`

Check out the API Chuck Norris Documentation : `https://api.chucknorris.io/`

Make sure to check the `Response` status and throw an error accordingly
