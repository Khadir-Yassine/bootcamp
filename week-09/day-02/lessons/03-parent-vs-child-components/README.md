# Parent vs Child Components

Course source: [Geeks Institute](https://www.geeks.institute/).
Components do not exist in a vacuum; they talk to each other. They form a "Tree" structure, consisting of Parents and Children.

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1774375610137_Gemini_Generated_Image_eybwl7eybwl7eybw.png)

**The Hierarchy:**

- **Parent Component:** The "smart" container. It fetches data from your database (like MongoDB) and manages the overall layout.

- **Child Component:** The "dumb" presenter. It just waits to be handed data and displays it beautifully on the screen.

**How They Communicate: "Props" (Properties)** In modern architecture, data flows **downward**—from Parent to Child. The Parent passes data to the Child using something called "Props" (short for properties).

**Example in AutoBarista:** Let's say your `<MainDashboardContent>` (Parent) talks to your database and finds out that 53 coffees have been served today. The Child component, `<StatCard>`, doesn't know how to talk to the database. It just knows how to look pretty.

The Parent passes the data down like this (using JSX/React syntax as an example):

JavaScript

```javascript
// The Parent Component rendering the Child
<StatCard title="Coffees Served" value="53" icon="coffee-cup" />
```

Because of this architecture, you can instantly reuse that exact same child component for something else:

JavaScript

```javascript
// Reusing the same Child Component for different data
<StatCard title="Arm Errors" value="0" icon="warning-sign" />
```
