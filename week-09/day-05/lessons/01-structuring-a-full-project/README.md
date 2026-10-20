# Structuring a Full Project

Course source: [Geeks Institute](https://www.geeks.institute/).
When you build a small test app, keeping all your code in one or two files is fine. But when you build a real-world IoT platform like AutoBarista—which talks to databases, Tuya Gateways, and robotic APIs—your code will quickly become a messy labyrinth if you aren't organized.

**The Anatomy of a Modern Application:** Professional developers structure their project folders logically so that anyone can open the project and immediately understand where things are.

A typical structure looks like this:

- 📁 `src/` (Source folder - where all your magic happens)
  
  - 📁 `components/` (Your reusable, "dumb" Lego bricks: `<Button>`, `<Card>`, `<StatusBadge>`)
  - 📁 `pages/` (Your "smart" layouts: `<DashboardScreen>`, `<OrderScreen>`)
  - 📁 `services/` (Where you put non-UI logic, like `tuyaApi.js` or `dobotController.js`)
  - 📁 `assets/` (Images, like your Geeks Institute logo, and global CSS)
  - 📄 `App.js` (The master parent component that ties the pages together)

**The Rule:** Keep logic separate from presentation. Your `<BrewButton>` shouldn't know *how* to connect to the Tuya Cloud; it should just call a function imported from the `services/` folder.

###
