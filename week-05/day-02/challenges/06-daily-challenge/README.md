# Daily Challenge

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🏆 The "Final Boss" Challenge: Blog Platform Pro

### **1. The Strategic Design**

To make this platform scalable, we will use a **Hybrid Approach**:

- **User ****$\rightarrow$**** Post:** We will use **Referencing** (A user can have thousands of posts).

- **Post ****$\rightarrow$**** Comment:** We will use **Embedding** for the comments inside the post (Comments are usually read alongside the post).

- **Comment ****$\rightarrow$**** User:** We will use **Referencing** inside the embedded comment to track who wrote it.

---

### **2. Designing the Schemas**

```javascript
const mongoose = require('mongoose');

// --- USER SCHEMA ---
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true }
});
const User = mongoose.model('User', userSchema);

// --- POST SCHEMA ---
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  comments: [{
    text: String,
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' // Each comment links back to a User
    },
    createdAt: { type: Date, default: Date.now }
  }]
});
const Post = mongoose.model('Post', postSchema);
```

---

### **3. The Task: Implementation**

**Step A: Setup the Data**

You need to create the users before you can link them to posts or comments.

```javascript
const seedData = async () => {
  const lina = await User.create({ username: 'LinaDev', email: 'lina@test.com' });
  const adam = await User.create({ username: 'AdamCode', email: 'adam@test.com' });

  await Post.create({
    title: "MongoDB Relationships",
    content: "Today we learned about population...",
    author: lina._id, // Reference to Lina
    comments: [
      { text: "Great post!", author: adam._id } // Comment by Adam
    ]
  });
};
```

**Step B: The "Deep Population"**

This is the trickiest part. Since comments are embedded objects that contain a reference, we need to tell Mongoose to "reach inside" the array to populate the comment authors.

```javascript
const getFullBlogFeed = async () => {
  const feed = await Post.find()
    .populate('author', 'username') // Populates the Post author
    .populate('comments.author', 'username'); // Deep populates the Comment authors
    
  console.log(JSON.stringify(feed, null, 2));
};
```

---

### **💡 Summary of Your Architecture**

| **Entity** | **Storage Choice** | **Why?** |
| --- | --- | --- |
| **Post Author** | **Reference** | Clean separation; users and posts grow independently. |
| **Comments** | **Embedded** | One database read loads the post and all its conversation. |
| **Comment Author** | **Reference** | We only need to store the `userId` in the comment; we fetch the `username` only when needed. |

---

### **Final Course Reflection**

You have successfully transitioned from basic JSON objects to a fully relational, validated, and automated data system. You now have the skills to build the backend for everything from a simple Todo list to a complex social media engine.

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
