# Exercise 1: Building an Intermediate CRUD API with Express and Axios using External Data

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1: Building an Intermediate CRUD API with Express and Axios using External Data**

**Instructions**

In this exercise, you’ll create an intermediate-level CRUD (Create, Read, Update, Delete) API using Express.js and Axios to interact with external data from the JSONPlaceholder API. You’ll build endpoints for all CRUD operations and use Axios to make requests to the external API.

**Part 1: Setting Up the Express Server**

1. Create a new directory named `crud-api-intermediate`.

2. Inside the `crud-api-intermediate` directory, initialize a new Node.js project and install the `express` and `axios` packages.

3. Create a new file named `app.js` in the `crud-api-intermediate` directory.

4. In `app.js`, import the `express` module and create an instance of an Express app.

5. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

**Part 2: Creating Endpoints for CRUD Operations**

1. In `app.js`, create the following endpoints for CRUD operations:

2. **Read All Posts:** GET `/api/posts`

3. **Read Single Post:** GET `/api/posts/:id`

4. **Create Post:** POST `/api/posts`

5. **Update Post:** PUT `/api/posts/:id`

6. **Delete Post:** DELETE `/api/posts/:id`

**Part 3: Implementing CRUD Operations with Axios**

1. Inside the corresponding endpoints, use Axios to make requests to the JSONPlaceholder API for the appropriate CRUD operation.

2. Handle the response data from Axios and send the appropriate response to the client.

3. Handle any errors that may occur during the Axios requests and send an appropriate error response to the client.

---
