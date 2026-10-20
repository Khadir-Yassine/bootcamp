# Exercise 1: The Connection Handshake

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
