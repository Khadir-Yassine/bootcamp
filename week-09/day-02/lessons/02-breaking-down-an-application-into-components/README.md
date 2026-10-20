# Breaking Down an Application into Components

Course source: [Geeks Institute](https://www.geeks.institute/).
How do you look at a blank screen and know what components to build? Developers use a visual technique called the **"Bounding Box Method."**

**The Rules of Extraction:**

- **Rule 1: Is it repeated?** If you see the same visual pattern more than once (like buttons, stat cards, or list items), it should be a component.

- **Rule 2: Is it complex?** If a section of the screen has a lot of its own logic (like a calendar or a live video feed), it should be its own component to keep the rest of the app clean.

![Illustration](https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1774375498461_Gemini_Generated_Image_9ymn379ymn379ymn.png)

**Case Study: The AutoBarista Dashboard** Imagine looking at the analytics dashboard for your coffee robot. Here is how we draw the invisible boxes to break it down:

- **Level 1 (The Shell):** * `<AppLayout>`: The master container holding everything.

- **Level 2 (The Layout Regions):** * `<SidebarNav>`: The menu on the left.
  
  - `<TopHeader>`: The bar at the top showing the user's profile and current date.
  - `<MainDashboardContent>`: The big area in the middle.

- **Level 3 (The Widgets inside Main Content):**
  
  - `<StatCardGrid>`: A container to hold your statistics.
  - `<ChartsSection>`: A container for your graphs.

- **Level 4 (The Reusable Micro-Components):**
  
  - `<StatCard>`: Used multiple times (one for "Total Brews", one for "Success Rate").
  - `<SystemHealthBadge>`: A tiny green or red dot indicating if the Robot Arm is online.

> **Pro Tip:** By breaking it down this way, a team of developers can work simultaneously. One person codes the `<SidebarNav>` while another person codes the `<StatCard>`, and they never overwrite each other's work!
