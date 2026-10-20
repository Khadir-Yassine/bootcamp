# What is render in React JavaScript?

Course source: [Geeks Institute](https://www.geeks.institute/).
# **What is render in React JavaScript?**

---

### **Introduction**

**React JS** is an open-source JavaScript library for building user interfaces. React provides a powerful, declarative programming model that keeps the DOM in sync with your data. Main React definitions that ensure its mechanism are elements, components, states, props, virtual DOM, lifecycle, and render methods. So, it’s important to understand how it works.

### **React definitions and render mechanisms**

**Render**

**Render** means renew only an appropriate part of information on user’s screen when the element properties (props) are replaced by new ones or a component state (as set of props) changes in application. Thanks to the render method, we avoid reloading the whole web page, save time, and increase productivity.

**Elements**

**Elements** are the smallest building blocks of React apps. At the same time, these elements are HTML DOM elements also named in React, the root nodes. Due to this, we apply for writing React files JSX language, JavaScript syntax extension, which combines JS and HTML syntax in the same file. An element describes what you want to see on the screen. There is an example:

**Example**

![image15](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%209%20-%20React/W9D4/167576493-11b3e169-88f0-4f92-8492-9b145973e770.png?raw=true)

**Components**

**Components** are “made of” elements. Component is a definite app task separated in every app by a programmer that contains both logic and markup in the same file. This React approach distinguishes from the classic JS where markup and logic are separate files and each of them combines different tasks. Each component is a JavaScript function defined by the user. For example, if your app is a dating board you can divide it on three components:

- *Person, the object with person’s props*.

- *PersonList, which defines how they display on the screen*.

- *SearchBox, which describes a search procedure*.

**State**

**State** is special private feature of component which presents sets of props for all the elements included in this component. State is an object which stores the property values that are relevant to a component. Props come from outside, they are inputted by the user or go down from other components situated above in the tree. Official React documentation compares a “top-down” data flow with a waterfall of props, where each component’s state is like an additional water source that joins it at an arbitrary point but also flows down. Render is called only for some of the components, states of which were changed. If props of parent element were replaced by new ones, it automatically calls render for this element and its children and it logically binds elements as well. The state allows React components to change their output over time in response to user actions, network responses, etc. without changing initial data.

*Note: Important that just render methods sync data between components.*

**Virtual React DOM**

**Virtual React DOM** is a copy of real DOM made to optimize updating information after changing props and states. Virtual DOM records all “screenshots” of new element releases made by render method. Since React elements are immutable (cannot be changed), the next element release simply replaces the previous one as in animation, and it’s important to save all of them to manage data of app.

Elements are rendered on the screen by calling the `ReactDOM.render()` method which compares the real and virtual DOM elements and its children, making as few changes as possible to bring the real DOM to the modern state.

The process of DOM maintenance includes several stages of Lifecycle, the main ones are mounting and updating.

- **Mounting** is the creation and insertion of the component into the DOM (with render).

- **Updating** means the component upgrades due to changes to its props or state (with render).

Render is called in React JS when the React element (its props) is first instantiated, or when a new component state is established.

As we can see in the greeting example above, render is called just after declaring the element and the variable inside it and update on the screen only value of the variable, without touching other parts of the text, which could take a lot of time.

### **Code**

Consider the visual ticking clock example from official React documentation:

**JAVASCRIPT - **`app.js`

```javascript
class Clock extends React.Component {       //code A
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {                   //code B
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {                                //code C
      this.setState({
        date: new Date()
      });
    }

    render() {                              
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
```

### **Explanation**

This whole code updates the clock on the screen every second: it calls `ReactDOM.render()` every second from a `setInterval()` callback. Let’s analyze:

- While code A and C calls render when props as date and initial state as `this.state` were declared and the value of date as current local time defined, we see it on our screen when we load the app. React then updates the DOM to match the clock’s render output.

- Code B works based on lifecycle methods in order to update the time every second. After first rendering, the DOM includes elements with the initial clock state and React applies the `componentDidMount()` lifecycle method. Inside it timer is installed which calls the `tick()` function every second.

- Inside the `tick()` function, React renews the state of the component to match current time and calls `render()` again. After this rendering, the DOM includes elements with the new Clock state and React replaces real DOM. Thank to that, users sees a new picture on their screen every second.

- When we close this app, information about the clock component is removed from the DOM. React calls the `componentWillUnmount()` lifecycle method so the timer is stopped.

So, when we apply life cycle methods, we can manage time for calling render more in details.

### **Syntax**

Now, draw your attention to the syntax. While component can be written as a class and as a function, we apply different syntax for it. We write the `render()` function inside the class-component but don’t do it in function-component. However, it’s important that render mechanism works in the same way in both situations. `ReactDOM.render()` method is always applied to the whole app in index.js file in a standard React package:

![image16](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%209%20-%20React/W9D4/167576942-560d8a90-1112-4184-846b-31342926c617.png?raw=true)

**JAVASCRIPT - **`index.js`

```javascript
import React from 'react';
require('./style.css');

import ReactDOM from 'react-dom';
import App from './app.js';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
```

**JAVASCRIPT - **`app.js`

```javascript
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <span>Hello World</span>
    );
  }
}
```

**CSS - **`style.css`

```javascript
p {
  color: blue;
}
```

![output5](https://github.com/devtlv/studentsGitHub/blob/master/Images%20cours%20%C3%A0%20h%C3%A9berger%20-%2006.03.2024/Week%209%20-%20React/W9D4/167577172-0a1867dd-8d36-4480-a8ec-a57c15b1b96f.png?raw=true)

It is important to follow the syntax rules concerning render because if we declare a new state in the wrong way, then the render will not be called and a desirable picture will not be displayed on the screen.

We can conclude that the React model and library is a perspective approach in programming and render method is one of the most important parts of React mechanism. React saves client’s time, increases code productivity, and minimizes app errors.
