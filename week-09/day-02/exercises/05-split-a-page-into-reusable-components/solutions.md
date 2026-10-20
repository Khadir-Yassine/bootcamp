# Split a Page into Reusable Components — Solution

[Original assignment](README.md) · [Runnable workspace](../../../solutions/README.md) · [Implementation](../../../solutions/src/autobarista.jsx)

## How to run

From `week-09/solutions`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **autobarista**.

## Approach and implementation

For the available AutoBarista dashboard brief, use Header(title), Sidebar(items), DashboardLayout(children), MetricCard(label,value,unit), HardwareStatusGrid(devices), StatusRow(deviceName,status,indicatorColor), RobotArmStatus(temperature,task), and OrderQueue(orders,onServe). Data and callbacks belong to the nearest parent that coordinates the children. The separately referenced generated cover image is absent from the archived assignment, so this decomposition follows the written dashboard requirements.

## Check the result

Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.

## Validation and dependencies

See the [workspace guide](../../../solutions/README.md) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
