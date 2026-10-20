# Mini Project

Course source: [Geeks Institute](https://www.geeks.institute/).
### Exercise 1 : Restaurant Menu Manager (REST API)

Create a **restaurant menu management API** for a restaurant manager.

The API should allow the manager to:

- View all menu items

- View a single menu item

- Add a new item

- Update an item

- Delete an item

The application must follow **REST API conventions** and use **Node.js, Express.js, and PostgreSQL**.

---

### Part 1: Database Setup

1. Using **pgAdmin**, create a new database.

Example:

```javascript
restaurant_db
```

---

1. Create a table called `menu_items` with the following columns:

```javascript
item_id     SERIAL PRIMARY KEY
item_name   VARCHAR(30) NOT NULL
item_price  SMALLINT DEFAULT 0
```

---

### Part 2: Node.js Project Setup

1. Install the required packages:

```javascript
npm init -y
npm install express pg
```

---

1. Create the Project Structure

Your project should follow a **REST API structure** similar to this:

```javascript
restaurant-api
│
├── server.js
├── db.js
│
├── routes
│   └── menuRoutes.js
│
├── controllers
│   └── menuController.js
│
└── models
    └── menuModel.js
```

---

### Part 3: Database Connection

1. Create a file called **db.js**.

2. Use the **pg** package to connect your application to PostgreSQL.

Example responsibilities:

- Create a connection pool

- Export the connection so it can be used in the models

---

### Part 4: Model Layer

> The model layer is responsible for interacting with the database.
> 
> 
> 
> Models contain the SQL queries used to read, insert, update, or delete data from the database.
> 
> 
> 
> In this project, the model will communicate directly with the `menu_items` table in PostgreSQL.
> 
> 
> 
> **⚠️ Important: **Models only handle database queries. They do not handle HTTP requests or responses. That logic belongs to the controllers.

1. Create the Menu Model

Create a file:

```javascript
models/menuModel.js
```

This file will handle **database queries** related to menu items.

1. Create the following functions:

- `getAllItems()` → returns all menu items

- `getItemByName(name)` → returns a single item

- `createItem(name, price)` → inserts a new item

- `updateItem(id, name, price)` → updates an item

- `deleteItem(id)` → deletes an item

These functions should interact directly with the **menu_items** table.

---

### Part 5: Controller Layer

1. Create the Menu Controller to handle **business logic** and interact with the model.

```javascript
controllers/menuController.js
```

Create the following controller functions:

- `getMenu`

- `getMenuItem`

- `addMenuItem`

- `updateMenuItem`

- `deleteMenuItem`

Each function should:

1. Call the appropriate model function

2. Handle errors

3. Send a JSON response to the client

Example response:

```javascript
{
  "message": "Item added successfully"
}
```

---

### Part 6: Routes

Create a file:

```javascript
routes/menuRoutes.js
```

Define the following **REST API routes**:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/menu` | Get all menu items |
| GET | `/menu/:name` | Get item by name |
| POST | `/menu` | Add new item |
| PUT | `/menu/:id` | Update item |
| DELETE | `/menu/:id` | Delete item |

Each route should call the corresponding **controller function**.

---

### Part 7: Server Setup

Create the Express Server

In `server.js`:

- Import Express

- Enable JSON middleware

- Import the routes

- Mount the routes

Example endpoint base:

```javascript
/api/menu
```

Run the server on port **3000**.

---

### Part 8: Testing the API

Use **Postman** to test your API.

Test the following operations:

Add an Item

```javascript
POST /api/menu
```

Body example:

```javascript
{
  "name": "Burger",
  "price": 35
}
```

---

Get All Items

```javascript
GET /api/menu
```

---

Get Item by Name

```javascript
GET /api/menu/Burger
```

---

Update an Item

```javascript
PUT /api/menu/1
```

Body:

```javascript
{
  "name": "Veggie Burger",
  "price": 37
}
```

---

Delete an Item

```javascript
DELETE /api/menu/1
```

---

### Expected Result

You should have a working **REST API** that allows a restaurant manager to manage menu items using **CRUD operations** connected to a **PostgreSQL database**.
