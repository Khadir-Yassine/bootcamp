# User & Product Modeling (Production-Ready)

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 19: User and Product Modeling**

In a production environment, we don't just store data; we store **relationships** and **metadata**. Notice the addition of the `timestamps` option and `role` logic below.

### **1. The User Schema: Security and Identity**

The User model is the heart of your application's security. It needs to handle authentication (passwords) and authorization (roles).

**Key Features:**

- `unique: true`: This creates an index in MongoDB to ensure no two people sign up with the same email.

- `timestamps: true`: Mongoose automatically adds `createdAt` and `updatedAt` fields for you.

- **Roles**: By using a `role` field, you can easily restrict certain API routes to "admin" users only.

```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true 
  },
  password: { 
    type: String, 
    required: true, 
    minlength: 8 // Security best practice
  },
  role: { 
    type: String, 
    enum: ["user", "admin", "vendor"], 
    default: "user" 
  }
}, { timestamps: true });
```

---

### **2. The Product Schema: Ownership and Inventory**

A product usually doesn't exist in a vacuum; it is owned by a user (the seller) and belongs to a category.

**Key Features:**

- **The **`owner` reference: This connects the product to the specific `User` who created it.

- **Stock Management**: Using a `Number` type allows us to use MongoDB's `$inc` operator to decrease stock automatically when someone buys an item.

```javascript
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  description: String,
  stock: { type: Number, default: 0 },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Link to the User model
    required: true
  }
}, { timestamps: true });
```

---

### **3. Why Use **`{ timestamps: true }`?

Instead of manually creating a "Date" field in every schema, adding this option at the end of the `new mongoose.Schema({...})` block tells Mongoose to:

1. Add `createdAt`: When the document was first born.

2. Add `updatedAt`: Automatically update this date every time you run `.save()`.

---

### **💡 Summary for Students**

| **Requirement** | **Implementation** |
| --- | --- |
| **Prevent duplicate accounts** | `unique: true` on email |
| **Categorize users** | `enum` on a role field |
| **Track who sells what** | `ref: "User"` on the product |
| **See latest products** | `sort({ createdAt: -1 })` |

---

### **🏁 Final Mastery Challenge**

**The Scenario:** You want to find all products sold by a specific user and display the seller's name next to each product.

**The Query:**

```javascript
const vendorProducts = await Product.find({ owner: someUserId }).populate("owner", "name");
```
