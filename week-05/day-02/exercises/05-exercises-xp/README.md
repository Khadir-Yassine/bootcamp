# Exercises XP

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🛠 Lab: Advanced Mongoose Patterns

### **Exercise 1: The "Who Wrote What" Challenge (Relationships)**

**Goal:** Create a link between two collections and use `populate()` to "join" them together in your code.

**Instructions:**

1. Define a `User` schema (name, email).

2. Define a `Post` schema (title, content) and add an `author` field that references the `User` model.

3. Create a user, then create a post using that user's `_id`.

4. Retrieve the post and use `.populate('author')`.

**The Code:**

```javascript
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const Post = mongoose.model('Post', postSchema);

// Practical Test
const run = async () => {
  const admin = await User.create({ name: 'Lina' });
  await Post.create({ title: 'Mongoose is Awesome', author: admin._id });

  // The Magic Part
  const postWithData = await Post.findOne({ title: 'Mongoose is Awesome' }).populate('author');
  console.log(`Post Title: ${postWithData.title}`);
  console.log(`Author Name: ${postWithData.author.name}`); // Accessing name via population
};
```

---

### **Exercise 2: The "Self-Updating" Field (Middleware)**

**Goal:** Use a **Pre-Save Hook** to ensure your data always knows exactly when it was last modified, without you having to manually type it every time.

**Instructions:**

1. Add an `updatedAt` field to your schema.

2. Create a `.pre('save', ...)` middleware.

3. Update the date automatically before the document is written to MongoDB.

**The Code:**

```javascript
const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

// The Pre-Save Hook
studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now(); // 'this' refers to the student document
  next(); // Move to the save operation
});

const Student = mongoose.model('Student', studentSchema);
```

---

### **✅ Success Criteria**

- **For Exercise 1:** Does your console print the **name** of the author (e.g., "Lina") instead of just a long string of numbers (the ID)?

- **For Exercise 2:** When you create or update a student, check the document in **MongoDB Compass**. Does the `updatedAt` field show a current timestamp even if you didn't include it in your `.create()` command?

---

### **💡 Pro-Tips**

> If you ever get an error during population where the author is `null`, check two things:
> 
> 
> 
> 1. Did you register the `User` model before the `Post` model?
> 
> 2. Did you use the exact same string in `ref: 'User'` as you did in `mongoose.model('User', ...)`? Case sensitivity matters!
