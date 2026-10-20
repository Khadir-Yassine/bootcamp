# Validation & Schema Constraints

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 13: Validation and Schema Constraints**

Validation ensures **Data Integrity**. By defining rules in your Schema, you guarantee that every document in your collection follows the same standards.

### **1. Common Validation Rules**

When you define a field as an object instead of just a type (e.g., `{ type: String }`), you unlock a suite of validation power:

- `required`: The field must be present and not empty.

- `min` / `max`: Perfect for ages, prices, or ratings.

- `minLength` / `maxLength`: Ensures strings (like passwords) aren't too short or too long.

- `enum`: Restricts a string to a specific list of values (e.g., `['admin', 'editor', 'user']`).

- `default`: Sets a value automatically if none is provided.

---

### **2. Advanced Schema Example**

Here is how you would write a professional schema for a "Product" in an e-commerce app:

```javascript
const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "A product must have a name"], // Custom error message
    trim: true // Automatically removes extra spaces
  },
  price: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  category: { 
    type: String, 
    enum: {
      values: ['Electronics', 'Home', 'Clothing'],
      message: '{VALUE} is not a valid category'
    }
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});
```

---

### **3. Handling Validation Errors**

When validation fails, Mongoose returns a `ValidationError` object. It’s important to wrap your `.save()` or `.create()` calls in a `try...catch` block to handle these gracefully.

```javascript
try {
  await User.create({ name: "Lina", age: 12 }); // This will fail min: 18 rule
} catch (error) {
  console.error("Validation failed:", error.message);
  // Output: User validation failed: age: Path `age` (12) is less than minimum allowed value (18).
}
```

---

### **💡 Summary**

| **Constraint** | **Use Case** | **Example** |
| --- | --- | --- |
| `required` | Usernames, Emails, IDs | `required: true` |
| `unique` | Emails, Usernames | `unique: true` |
| `min` / `max` | Age, Price, Stock | `min: 0` |
| `trim` | Cleaning up user input | `trim: true` |
| `lowercase` | Normalizing emails | `lowercase: true` |
