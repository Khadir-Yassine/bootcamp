# Exercise 2 : Building a User Login System with Express

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 2 : Building a User Login System with Express**

**Instructions**

In this intermediate exercise, you will create a user Login system using Express.js. You’ll implement registration, login, features to manage user accounts.

**Part 1: Setting Up the Express Server**

1. Create a new directory named `user-login`.

2. Inside the `user-Login` directory, initialize a new Node.js project and install the `express`, `bcrypt`, and `jsonwebtoken` packages.

3. Create a new file named `app.js` in the `user-login` directory.

4. In `app.js`, import the necessary modules and create an instance of an Express app.

5. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

**Part 2: Creating User Routes**

1. Create routes for user registration, login, and profile.

2. **User Registration:** POST `/api/register`

3. **User Login:** POST `/api/login`

4. **User Profile:** GET `/api/profile`

**Part 3: Implementing User Login**

1. Implement the logic for user registration. Use the `bcrypt` library to hash passwords before storing them in the database.

2. Implement the logic for user login. Check the user’s credentials

**Part 4: Testing Your User Login System**

1. Use a tool like Postman or a browser to test the registration, login, and profile endpoints. Make sure to handle various cases, such as invalid credentials or missing data.

2. Verify that your Login system is functioning correctly by observing the responses and checking if the login data is generated and validated properly.

**Part 5: Bonus Challenges**

1. Enhance security by implementing password complexity requirements and implementing account lockout mechanisms after multiple failed login attempts.

2. Add user roles and permissions to restrict access to certain routes based on the user’s role.

---
