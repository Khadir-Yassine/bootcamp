# Daily Challenge

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🏆 The Daily Challenge: "DevBlog" Architecture

You have been appointed as the Lead Architect for **DevBlog**, a new platform for developers. Your mission is to design a schema that stays fast even when a post goes viral with thousands of comments.

### 🏗️ The Blueprint

Follow these steps to build the foundation of the platform:

**Step 1: The Authors (Users Collection)**

Create a `users` collection. Each user should have a `username`, `bio`, and `socialLinks` (embedded).

**Step 2: The Content (Posts Collection)**

Create a `posts` collection.

- **Link to Author:** Use a **Reference** (`authorId`) to connect the post to the user who wrote it.

- **Content:** Include `title`, `body`, and `tags`.

**Step 3: The Interaction (Comments Embedded)**

Inside each post document, create an **Array** called `comments`.

- Each comment should be an object containing `username`, `text`, and `timestamp`.

---

### 🧪 Practical Task: The "First Post"

Run this command in your **MONGOSH** terminal to simulate a user writing a post with an initial comment:

```javascript
db.posts.insertOne({
  title: "Why I Love MongoDB",
  body: "Schema flexibility is a game changer...",
  authorId: ObjectId("65c2b..."), // Reference to the User
  tags: ["NoSQL", "Database", "Tech"],
  comments: [
    {
      user: "CodeMaster",
      text: "Great article! Very clear.",
      date: new Date()
    }
  ]
})
```

---

### 📝 The "Design Defense" (Explanation)

A great architect must justify their choices. Here is why we structured DevBlog this way:

| **Feature** | **Strategy** | **Why?** |
| --- | --- | --- |
| **User Info in Post** | **Referencing** | A user might write 1,000 posts. If they change their username, we only want to update it in *one* place (the Users collection). |
| **Comments in Post** | **Embedding** | Comments are usually read at the same time as the post. Embedding them makes the page load much faster as it requires only one "find" operation. |
| **Social Links in User** | **Embedding** | A user's Twitter or GitHub links are part of their identity and aren't shared with others. They fit perfectly inside the User document. |

---

### ⚠️ The Architect's Warning

> **When would this design fail?**
> 
> 
> 
> If a post becomes world-famous and gets **50,000+ comments**, the document might hit the **16MB limit**. In a real-world professional app, if we expect that many comments, we would move comments to their own collection (Referencing). But for a standard blog, **Embedding** is the performance king!

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
