# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🚀 Lab: Building Your First Backend Bridge

To complete these exercises, students should have **Node.js** installed and a folder ready on their computer.

### **Exercise 1: The Connection Handshake**

**Goal:** Initialize a project and establish a persistent link between your code and your database.

**Instructions:**

1. Open your terminal and run `npm init -y` followed by `npm install mongoose`.

2. Create a file named `app.js`.

3. Write the connection logic to connect to a local database named `collegeDB`.

**The Setup Code:**

```javascript
const mongoose = require('mongoose');

// The Connection Handshake
mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));
```

**✅ Success Criteria:** When you run `node app.js`, the terminal should print the "Connection Successful" message.

---

### **Exercise 2: The Student Blueprint (Schema)**

**Goal:** Define the rules of your data and enforce "Adults Only" access using Mongoose validation.

**Instructions:**

1. Below your connection code, define a `studentSchema`.

2. Ensure the `name` and `email` are required.

3. Add a constraint to ensure the `age` is at least **18**.

4. Compile the schema into a model named `Student`.

**The Blueprint Code:**

```javascript
const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is mandatory'] 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  age: { 
    type: Number, 
    min: [18, 'Students must be at least 18 years old'] 
  }
});

const Student = mongoose.model('Student', studentSchema);
```

---

### **Test Your Validation (The "Aha!" Moment)**

To see the validation in action, try to run this code in your `app.js`:

```javascript
const testStudent = async () => {
  try {
    const student = new Student({
      name: "Omar",
      email: "omar@school.com",
      age: 16 // This should trigger an error!
    });
    await student.save();
  } catch (error) {
    console.log("Validation Error Caught:", error.message);
  }
};

testStudent();
```

---

### **🎓 Summary**

- Did you use `npm install mongoose`?

- Is your MongoDB service running in the background?

- Did you wrap the ID or data operations in `try/catch`?

- Does your terminal show the custom validation error when the age is too low?

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
