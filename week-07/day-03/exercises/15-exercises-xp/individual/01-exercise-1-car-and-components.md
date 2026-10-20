# Exercise 1 : Car and components

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise 1 : Car and components**

**Instructions**

**Part I : A Car Component**

1. In `App.js` create an object `const carinfo = {name: "Ford", model: "Mustang"};`

2. In your React app create a new folder in the **src** path, name it **Components**. It should contain a Functional Component named `Car.js`.

3. In the `Car.js` component render a header with the `carInfo` model, for example `This car is <model>`.

4. Import the `Car.js` component to the `App.js`.

**Part II : useState Hook**

1. Use the `state` hook in the `Car` component to add a `color` variable to the `state`.

2. Return the color property, for example `This car is <color> <model>`.

**Part III : Garage**

1. Create another Functional Component inside your `Components` folder, called `Garage.js`.

2. Use an attribute to pass a `size` to the `Garage` component, `<Garage size="small" />`.

3. Use the `Garage` component inside the `Car` component and pass the size ‘small’. The `Garage` component should render `Who lives in my <size> Garage?`

---
