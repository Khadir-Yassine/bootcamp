# Connecting Components Together

Course source: [Geeks Institute](https://www.geeks.institute/).
Now we have to make our components talk to each other. What happens when two completely different components need to know the same piece of information?

**The Problem:** Imagine you have a `<Sidebar>` component that shows "Total Orders: 5", and a `<MainDashboard>` component where the user clicks the "Order Coffee" button. If the button is clicked in the Dashboard, how does the Sidebar know to update its number to 6?

**The Solution: "Lifting State Up"** Because data in modern frameworks only flows *downwards*, siblings cannot talk directly to each other. You must take the State (the memory) and "lift it up" to their closest common Parent component.

**AutoBarista Example:**

1. The Master `<App>` component holds the State: `[totalOrders, setTotalOrders]`.

2. `<App>` passes `totalOrders` down to the `<Sidebar>` as a Prop so it can display the number.

3. `<App>` passes the `setTotalOrders` *function* down to the `<MainDashboard>` as a Prop.

4. When the user clicks the button in the dashboard, it triggers the function, updating the Parent's state, which automatically updates the Sidebar!
