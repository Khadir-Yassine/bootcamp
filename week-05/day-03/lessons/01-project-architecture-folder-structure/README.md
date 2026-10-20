# Project Architecture & Folder Structure

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 18: Project Architecture and Folder Structure**

In a production-ready backend, we divide the application into specific "layers." Each layer has one job and doesn't interfere with the others.

### **The Standard Backend Directory**

| **Folder** | **Responsibility** | **Example Content** |
| --- | --- | --- |
| `config/` | Database connection and environment variables. | `db.js`, `.env` |
| `models/` | Defining the data's shape and validation rules. | `User.js`, `Product.js` |
| `controllers/` | The "Brain" – contains the logic for CRUD. | `userController.js` |
| `routes/` | The "Map" – connects URLs to functions. | `userRoutes.js` |
| `middleware/` | Security, logging, and error handling. | `auth.js`, `errorMiddleware.js` |
| `app.js` | Configuring Express and middleware. | `app.use(express.json())` |
| `server.js` | The entry point – starts the server listener. | `app.listen(3000)` |

---

### **How Data Flows Through the Layers**

Imagine a user wants to "Delete a Task." Here is the journey that request takes through your folders:

1. **Routes:** The request hits `DELETE /api/tasks/:id`. The route file says, "I recognize this URL, go talk to the `taskController.deleteTask` function."

2. **Controller:** The controller function says, "I need to delete this. I'll ask the `Task` model to do the heavy lifting."

3. **Model:** The Mongoose model communicates with MongoDB to find and remove the document.

4. **Response:** The controller receives a success message from the model and sends a `200 OK` back to the user.

---

### **Why This Structure Wins**

- **Easier Debugging:** If there is a database error, you go to `models/`. If a URL isn't working, you go to `routes/`.

- **Teamwork:** One developer can work on the `Product` schema while another builds the `Order` controller without crashing each other's code.

- **Scalability:** When you add 50 more features, your project remains organized instead of becoming a 5,000-line "spaghetti" file.

---

### **💡 Pro-Tip: The **`.env` File

Never put your MongoDB connection string directly in your code inside the `config/` folder. Use a `.env` file to store sensitive info:

```text
PORT=5000
MONGO_URI=mongodb://localhost:27017/myApp
```

Then access it using `process.env.MONGO_URI`.

---

### **🏁 Final Course Graduation Task**

Look back at all the code we've written. Can you visualize moving your `taskSchema` into `/models/Task.js` and your `createTask` function into `/controllers/taskController.js`?

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
