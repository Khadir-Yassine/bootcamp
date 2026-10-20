# MINI PROJECT IDEAS (OPEN & CREATIVE)

Course source: [Geeks Institute](https://www.geeks.institute/).
## 🎨 Creative Architecture: The "Design First" Approach

Before you open your code editor, you need to decide on your **Data Strategy**. For your chosen project, ask yourself: *"Which parts of this data are 'one-to-one' (embedding) and which are 'one-to-many' (referencing)?"*

### **Inspiration 1: Event Management System**

- **The Problem:** Events need to track attendees and locations.

- **Architectural Tip:** Use **Referencing** for attendees. An event might have 500 people; you don't want to embed 500 full user objects inside a single event document.

- **Key Index:** Create an index on `eventDate` to sort upcoming events faster.

### **Inspiration 2: Learning Platform (LMS)**

- **The Problem:** Students need to track their progress through multiple lessons.

- **Architectural Tip:** Use **Embedding** for lessons inside a course (since a course usually has a fixed, small number of lessons). Use **Referencing** for student enrollment to keep the course document lightweight.

- **Key Validation:** Use `min: 0` and `max: 100` for a `progressPercentage` field.

### **Inspiration 3: Expense Tracker**

- **The Problem:** Users need to generate reports based on categories and dates.

- **Architectural Tip:** Keep expenses in their own collection with a `userId` reference. Use a **Compound Index** on `{ userId: 1, category: 1 }` to make "Show me all my Food expenses" instantaneous.

- **Key Feature:** Use `{ timestamps: true }` to automatically track when an expense was logged.

---

## 🛠️ Implementation Checklist (Your Deliverables)

To turn this into a professional portfolio piece, follow this structure:

### **1. The Schema Diagram (The "Map")**

Start your file with a comment block explaining the relationships.

```javascript
/**
 * PROJECT: Evently
 * RELATIONSHIPS:
 * - User (1) <-> Events (Many) [Reference]
 * - Event (1) <-> Attendees (Many) [Reference Array]
 */
```

### **2. The Mongoose Models**

Apply the "Pro" features we learned:

- **Safety:** `select: false` for passwords.

- **Cleanliness:** `trim: true` and `lowercase: true` for strings.

- **Automation:** Pre-save middleware for any logic (like hashing or slug generation).

### **3. The Seed Script**

Write a `seed.js` file that deletes existing data and creates 3-5 sample documents so anyone can test your project immediately.

---

## 🏆 The "Final Boss" Bonus Tasks

If you want to truly stand out, implement these two features:

1. **The "Top Performer" Index:** Identify the most common query in your app (e.g., "Finding events by category") and add a specific index for it.

2. **Smart Pagination:** Create a function `getPaginatedData(pageNumber)` that uses `.skip()` and `.limit()` so your app remains fast even if you have 10,000 documents.

---

### **💡 Final Advice for Your Career**

When you show this project to a future employer, don't just show them the code. Tell them **why** you chose to reference the users instead of embedding them. That architectural reasoning is what separates a Senior Developer from a Junior.
