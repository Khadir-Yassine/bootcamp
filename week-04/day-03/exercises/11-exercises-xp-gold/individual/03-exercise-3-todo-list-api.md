# Exercise 3 : Todo List API

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
