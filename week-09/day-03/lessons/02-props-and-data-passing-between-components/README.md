# Props and Data Passing Between Components

Course source: [Geeks Institute](https://www.geeks.institute/).
If a component is an empty template, how do we fill it with information? We use **Props** (short for Properties).

Think of Props like customized instructions you give to a worker. Just like HTML tags have attributes (e.g., `<img src="image.jpg">`), your custom components have props.

**How Data Flows (The Waterfall Rule):** In modern architecture, data flows in one direction: **Downwards**. The Parent component holds the real data, and it passes it down to the Child component via Props.

Let's look at a conceptual code example for your dashboard:

JavaScript

```javascript
// 1. We create the reusable Child component
function MetricCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.value}</p>
    </div>
  );
}

// 2. The Parent component uses it and passes the 'Props' down
function Dashboard() {
  return (
    <div>
      {/* We reuse the exact same component three times! */}
      <MetricCard title="Total Brews" value="153" />
      <MetricCard title="Success Rate" value="98%" />
      <MetricCard title="Active Errors" value="0" />
    </div>
  );
}
```
