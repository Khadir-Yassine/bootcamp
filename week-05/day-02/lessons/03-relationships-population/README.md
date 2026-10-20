# Relationships & Population

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 14: Relationships and Population**

In previous modules, we learned that **Referencing** helps keep documents small and organized. However, if you query a `Post` that only has an `authorID`, your user will just see a random string of numbers. **Population** is the magic trick that swaps that ID for the actual user document.

### **1. Referencing Another Model**

To create a link, you must tell the Schema two things:

1. **The Type:** It must be an `ObjectId`.

2. **The Reference (**`ref`): The name of the model you are linking to.

**Code Example:**

```javascript
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" // This tells Mongoose to look in the 'Users' collection
  }
});

const Post = mongoose.model("Post", postSchema);
```

---

### **2. Using **`.populate()`

By default, when you find a post, the `author` field will just be an ID. By adding `.populate("author")`, Mongoose performs an extra search behind the scenes to fetch the user's details.

**The Difference:**

| **Query Method** | **Result for author field** |
| --- | --- |
| `.find()` | `"65c2b..."` (Just the ID) |
| `.find().populate("author")` | `{"_id": "65c2b...", "name": "Lina", "email": "..."}` |

**Code Example:**

```javascript
const getPostsWithAuthors = async () => {
  const posts = await Post.find().populate("author");
  
  // Now you can access author details directly!
  console.log(posts[0].author.name); 
};
```

---

### **3. Selecting Specific Fields**

Sometimes you don't want the whole author document (like their password or private data). You can tell populate to only bring back the `name`.

```javascript
// Only fetch the name and email of the author
const posts = await Post.find().populate("author", "name email");
```

---

### **💡 Pro-Tip: Population is not a Join**

It is important to remember that Mongoose is actually running **two separate queries** under the hood:

1. Find the Posts.

2. Find the Users whose IDs match those posts.

Because of this, over-using `.populate()` in a single query (like populating 5 different levels) can slow down your application.

---

### **Summary**

> - **Reference:** Storing an ID to link data without duplicating it.
> 
> - **Populate:** The method used to "expand" that ID into a full object.
> 
> - **ref:** The key in the schema that points to the correct Model.
