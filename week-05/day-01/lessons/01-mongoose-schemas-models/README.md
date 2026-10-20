# Mongoose Schemas & Models

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 11: Mongoose Schemas and Models**

In Mongoose, building a database feature is a two-step process. First, you draw the plans; then, you build the house.

### **1. The Schema (The Blueprint)**

A **Schema** defines exactly what a document should look like. It is a configuration object that tells Mongoose: "Every user must have a name (which is a String) and an age (which is a Number)."

**Code Example:**

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: { type: Boolean, default: true } // You can even set defaults!
});
```

---

### **2. The Model (The Tool)**

A **Model** is a fancy constructor function created from the Schema. While the Schema is just a "rulebook," the Model is the actual **interface** you use to talk to the database.

- The Model allows you to run commands like `.find()`, `.create()`, and `.deleteOne()`.

- **Important Naming Convention:** You pass the *singular* name of the collection (e.g., `"User"`). Mongoose is smart—it will automatically look for a *plural*, lowercase collection in MongoDB called `users`.

**Code Example:**

```javascript
// This creates the 'users' collection in MongoDB if it doesn't exist
const User = mongoose.model("User", userSchema);
```

---

### **3. Putting it into Action**

Once you have your **User** model, you can use it to interact with your data in a very readable way:

| **Operation** | **Mongoose Code** |
| --- | --- |
| **Create** | `const lina = await User.create({ name: "Lina", age: 25 });` |
| **Read** | `const allUsers = await User.find();` |
| **Update** | `await User.updateOne({ name: "Lina" }, { age: 26 });` |
| **Delete** | `await User.deleteOne({ name: "Lina" });` |

---

### **💡 Summary**

> **Think of it this way:** > * The **Schema** is the DNA.
> 
> 
> 
> - The **Model** is the Living Organism that can actually perform actions.
> 
> - The **Document** is a single instance (a specific person).
