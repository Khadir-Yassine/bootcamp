import React, { useEffect, useReducer, useRef, useState } from "react";
import { coffeeReducer } from "./logic";
export function BaseButton({
  text,
  color = "#c7da69",
  action,
  disabled = false,
}) {
  return (
    <button style={{ background: color }} onClick={action} disabled={disabled}>
      {text}
    </button>
  );
}
export function DataDisplay({ label, value }) {
  return (
    <p>
      <strong>{label}</strong> {value}
    </p>
  );
}
export function RobotArmStatus() {
  return (
    <Card title="Robotic arm">
      <DataDisplay label="Temperature" value="45°C" />
      <DataDisplay label="Current task" value="Moving to cup" />
    </Card>
  );
}
export function Card({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function StatusRow({ deviceName, status, indicatorColor }) {
  return (
    <p>
      <span style={{ color: indicatorColor }} aria-hidden="true">
        ●{" "}
      </span>
      {deviceName}: {status}
    </p>
  );
}
export function HardwareStatusGrid() {
  return (
    <Card title="Hardware Health">
      <StatusRow
        deviceName="Dobot Arm"
        status="Online"
        indicatorColor="green"
      />
      <StatusRow
        deviceName="Tuya Fingerbot"
        status="Asleep"
        indicatorColor="#a77b00"
      />
      <StatusRow
        deviceName="Coffee Machine"
        status="Offline"
        indicatorColor="red"
      />
    </Card>
  );
}
export function CheckSystemHealth(
  deviceName,
  connections = { Dobot: true, Tuya: true, Database: false },
) {
  return { deviceName, online: Boolean(connections[deviceName]) };
}
export function OrderQueue() {
  const [orders, setOrders] = useState([]);
  const addOrder = () =>
    setOrders((all) => [
      ...all,
      {
        id: crypto.randomUUID(),
        drink: ["Espresso", "Americano", "Latte"][
          Math.floor(Math.random() * 3)
        ],
      },
    ]);
  return (
    <Card title="Order Queue">
      <BaseButton text="Add Random Order" action={addOrder} />
      <ol>
        {orders.map((order) => (
          <li key={order.id}>
            {order.drink}{" "}
            <BaseButton
              text="Mark as Served"
              action={() =>
                setOrders((all) => all.filter((o) => o.id !== order.id))
              }
            />
          </li>
        ))}
      </ol>
      {orders.length === 0 ? <p>The queue is empty.</p> : null}
    </Card>
  );
}
export function UserWelcome({ name }) {
  return <h2>Welcome, {name}.</h2>;
}
export function DrinkList({ selected, onSelect }) {
  return (
    <label>
      Drink{" "}
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {["Espresso", "Americano", "Latte"].map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
    </label>
  );
}
export function RobotStatus({ busy }) {
  return <p role="status">Robot arm: {busy ? "Busy" : "Ready"}</p>;
}
export function CoffeeOrderScreen() {
  const [drink, setDrink] = useState("Espresso");
  const [busy, setBusy] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <Card title="Order coffee">
      <UserWelcome name="Yassine" />
      <DrinkList selected={drink} onSelect={setDrink} />
      <RobotStatus busy={busy} />
      <BaseButton
        text={`Brew My Coffee: ${drink}`}
        disabled={busy}
        action={() => {
          setBusy(true);
          timer.current = setTimeout(() => setBusy(false), 3000);
        }}
      />
    </Card>
  );
}
export function SessionBrewCounter() {
  const [brewCount, setBrewCount] = useState(0);
  return (
    <Card title="Session brew counter">
      <output>{brewCount} coffees made</output>
      <BaseButton
        text="Complete a brew"
        action={() => setBrewCount((count) => count + 1)}
      />
    </Card>
  );
}
export function Header() {
  return (
    <header>
      <p>AutoBarista / Operations</p>
      <h1>Good coffee. Precise control.</h1>
    </header>
  );
}
export function Sidebar() {
  return (
    <aside>
      <a href="#operations">Operations</a>
      <a href="#orders">Orders</a>
      <a href="#hardware">Hardware</a>
    </aside>
  );
}
export function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
export function AutoBarista() {
  const [state, dispatch] = useReducer(coffeeReducer, {
    inventoryLevel: 10,
    machineStatus: "Idle",
    maintenance: false,
    brewCount: 0,
  });
  useEffect(() => {
    if (state.machineStatus === "Idle") return;
    const timer = setTimeout(
      () =>
        dispatch({
          type: state.machineStatus === "Brewing" ? "DELIVER" : "FINISH",
        }),
      state.machineStatus === "Brewing" ? 3000 : 1500,
    );
    return () => clearTimeout(timer);
  }, [state.machineStatus]);
  return (
    <>
      <Header />
      <DashboardLayout>
        <Card title="Machine operations">
          <div id="operations" />
          <DataDisplay label="Cups available" value={state.inventoryLevel} />
          <DataDisplay label="Machine status" value={state.machineStatus} />
          <DataDisplay label="Brews completed" value={state.brewCount} />
          <p className={state.maintenance ? "warning" : ""}>
            Maintenance mode:{" "}
            {state.maintenance ? "ON — New orders paused" : "OFF"}
          </p>
          <BaseButton
            text="Toggle maintenance"
            color="#efb576"
            action={() => dispatch({ type: "MAINTENANCE" })}
          />
          {state.inventoryLevel === 0 ? (
            <p role="alert">Out of Cups! Please Restock.</p>
          ) : (
            <BaseButton
              text="Simulate Order"
              disabled={state.machineStatus !== "Idle" || state.maintenance}
              action={() => dispatch({ type: "ORDER" })}
            />
          )}
          <BaseButton
            text="Restock 10 cups"
            action={() => dispatch({ type: "RESTOCK" })}
          />
        </Card>
        <div className="grid">
          <div id="hardware">
            <HardwareStatusGrid />
          </div>
          <RobotArmStatus />
        </div>
        <div id="orders">
          <OrderQueue />
        </div>
        <CoffeeOrderScreen />
        <SessionBrewCounter />
      </DashboardLayout>
    </>
  );
}
