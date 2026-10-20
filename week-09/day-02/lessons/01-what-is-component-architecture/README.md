# What Is Component Architecture?

Course source: [Geeks Institute](https://www.geeks.institute/).
**The Old Way vs. The Modern Way** In the early days of web development, we built "pages." If you had a dashboard with a navigation bar, a graph, and a user profile, all the HTML, CSS, and logic for those pieces were tangled together in one giant file. This is often called "spaghetti code." If you wanted to change the color of a button, you had to hunt it down in thousands of lines of code.

**Component-Based Architecture (CBA)** revolutionized this. Instead of building pages, modern frameworks (like React, Vue, and Angular) teach us to build **components**. A component is a small, self-contained, isolated piece of user interface. Think of them as custom HTML tags that you invent.

**The Three Pillars of Component Architecture:**

1. **Modularity (Separation of Concerns):** Every component has a single job. A `RobotArmStatus` component only worries about displaying what the arm is doing. It doesn't care about the user's password or the coffee machine's temperature.

2. **Reusability (The DRY Principle - Don't Repeat Yourself):** If you have three different charts on your dashboard, you don't write the chart code three times. You write one `<DataChart>` component and use it three times, just feeding it different data.

3. **Maintainability:** If a specific part of your app breaks (e.g., the Tuya Fingerbot connection indicator), you know exactly which file to open. You fix the isolated component without fear of accidentally breaking the main navigation menu.

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1774375359183_Gemini_Generated_Image_70uph270uph270up.png)
