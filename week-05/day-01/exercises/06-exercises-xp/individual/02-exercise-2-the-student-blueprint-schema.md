# Exercise 2: The Student Blueprint (Schema)

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

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
