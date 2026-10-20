# Exercises XP Gold

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What you will learn:**

- Use Express to build an API

- Use Node.js modules

---

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

### **Exercise 2 : Building a User Login System with Express**

**Instructions**

In this intermediate exercise, you will create a user Login system using Express.js. You’ll implement registration, login, features to manage user accounts.

**Part 1: Setting Up the Express Server**

1. Create a new directory named `user-login`.

2. Inside the `user-Login` directory, initialize a new Node.js project and install the `express`, `bcrypt`, and `jsonwebtoken` packages.

3. Create a new file named `app.js` in the `user-login` directory.

4. In `app.js`, import the necessary modules and create an instance of an Express app.

5. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

**Part 2: Creating User Routes**

1. Create routes for user registration, login, and profile.

2. **User Registration:** POST `/api/register`

3. **User Login:** POST `/api/login`

4. **User Profile:** GET `/api/profile`

**Part 3: Implementing User Login**

1. Implement the logic for user registration. Use the `bcrypt` library to hash passwords before storing them in the database.

2. Implement the logic for user login. Check the user’s credentials

**Part 4: Testing Your User Login System**

1. Use a tool like Postman or a browser to test the registration, login, and profile endpoints. Make sure to handle various cases, such as invalid credentials or missing data.

2. Verify that your Login system is functioning correctly by observing the responses and checking if the login data is generated and validated properly.

**Part 5: Bonus Challenges**

1. Enhance security by implementing password complexity requirements and implementing account lockout mechanisms after multiple failed login attempts.

2. Add user roles and permissions to restrict access to certain routes based on the user’s role.

---

### **Exercise 3 : Todo List API**

**Instructions**

Create an Express API for managing a todo list. The API should support the following operations:

1. **Create a new todo**: POST `/api/todos`

2. **Get all todos**: GET `/api/todos`

3. **Get a specific todo**: GET `/api/todos/:id`

4. **Update a todo**: PUT `/api/todos/:id`

5. **Delete a todo**: DELETE `/api/todos/:id`

Each todo should have the following properties:

- `id`: Unique identifier for the todo.

- `title`: Title of the todo task.

- `completed`: Boolean indicating whether the task is completed or not.

**Steps:**

1. Initialize a new Express project.

2. Create an in-memory array to store todo objects.

3. Set up routes and handlers for the CRUD operations.

4. Test the API using tools like Postman or curl.

**Hints:**

- Use the `express` module to create the API endpoints.

- For generating unique IDs, you can use libraries like `uuid` or simply auto-increment integers.

- Use `express.json()` middleware to parse JSON data from requests.

- Handle errors and edge cases, such as invalid IDs, missing data, etc.

---

### **Submit your exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| > 1h30 |

---

One Last Thing: **Good luck!**
