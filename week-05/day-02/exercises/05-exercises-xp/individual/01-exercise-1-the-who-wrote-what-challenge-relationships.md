# Exercise 1: The "Who Wrote What" Challenge (Relationships)

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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

[Worked reference answer](../solutions.md) — includes this task in its original exercise order.
