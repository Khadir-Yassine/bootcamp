# Daily Challenge

Course source: [Geeks Institute](https://www.geeks.institute/).
## ⚡ Daily Challenge: The "TaskMaster" CLI

You are building the backend for a Task Management app. Your goal is to ensure that no task is saved without a title and that the status is always one of two specific options.

### **Step 1: The Task Schema**

We will use `enum` for the status to prevent typos like "pendding" and `default` for the date so the user doesn't have to provide it manually.

```javascript
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);
```

---

### **Step 2: The Logic (CRUD Operations)**

Here is how you would implement the required features in your Node.js application.

**1. Create a Task**

```javascript
const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp"
    });
    console.log("✅ Task Created:", newTask);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
};
```

**2. Retrieve All Tasks**

```javascript
const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("📋 Current Tasks:", tasks);
};
```

**3. Update Task Status**

```javascript
const completeTask = async (taskId) => {
  await Task.findByIdAndUpdate(taskId, { status: 'completed' });
  console.log("🚀 Task marked as completed!");
};
```

---

### 🛠 **Task for the Student**

To finish this challenge, combine the connection code from Module 10 with this schema and these functions. Try to:

1. **Insert** a task with no title and see the error message.

2. **Insert** a task with a status of "in-progress" and see the `enum` validation fail.

3. **Find** all tasks and notice how `createdAt` was added automatically!

---

### **Course Wrap-Up**

Now that you've finished, you should be able to:

- Explain the difference between **SQL** and **NoSQL**.

- Perform **CRUD** in the MongoDB Shell.

- Decide between **Embedding** and **Referencing**.

- Connect a **Node.js** app to MongoDB using **Mongoose**.

- Enforce data rules using **Schemas** and **Validation**.
