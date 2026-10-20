# Exercise 2: The "Self-Updating" Field (Middleware)

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
