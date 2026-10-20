# Authentication-Ready Data Design

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Module 20: Authentication-Ready Data Design**

When building a system for users, security must be "baked in" from day one. Even if you haven't built the login screen yet, your database must be ready to handle secrets safely.

### **1. The Three Pillars of Secure Schema Design**

To make a schema "Auth-Ready," you must implement these three features:

- **Hashed Passwords:** Never store a password in plain text. If your database is compromised, plain-text passwords are a disaster.

- **Role-Based Access Control (RBAC):** Define what a user *can* do (e.g., `user`, `admin`, `moderator`).

- **Auditing (Timestamps):** Knowing when an account was created or a password was last changed is vital for security logs.

---

### **2. Automated Password Hashing with Middleware**

Mongoose middleware is the perfect place to handle encryption. By using a `pre-save` hook, you ensure that the password is encrypted **right before** it hits the disk.

**Why the **`isModified` check is critical:

If a user updates their *email*, you don't want to re-hash their *already-hashed password*. The `isModified` check ensures we only run the heavy encryption logic when the password actually changes.

```javascript
const bcrypt = require('bcrypt'); // Standard library for hashing

userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});
```

---

### **3. Protecting Sensitive Data**

A common security mistake is sending the `password` back to the user in a JSON response. You can prevent this in two ways:

**A. The Schema-Level Protection**

You can tell Mongoose to **exclude** a field by default whenever you query a user.

```javascript
password: { 
  type: String, 
  required: true, 
  select: false // This field will not be returned in find() queries!
}
```

**B. The Manual "Cleanup"**

Before sending a response, you can remove the password manually.

```javascript
const user = await User.findById(id);
const userObj = user.toObject();
delete userObj.password;
res.send(userObj);
```

---

### **💡 Summary for Students**

| **Security Rule** | **Why?** | **Mongoose Implementation** |
| --- | --- | --- |
| **Never store plain text** | Prevents data theft impact | `pre("save")` with bcrypt |
| **Use Unique Emails** | Prevents duplicate accounts | `unique: true` |
| **Hide the Password** | Prevents accidental leaks | `select: false` |
| **Track Activity** | For security auditing | `{ timestamps: true }` |

---

### **🏁 Final Pro-Tip**

> **"Security is a Layer Cake":** Your database schema is the bottom layer. Even if your frontend is hacked, your hashed passwords and hidden fields act as a final line of defense.
