# React Fragment

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Use React Fragment

---

## **Useful Resources**

- [React Form Documentation](https://reactjs.org/docs/forms.html)

---

Forms aren’t much different in React’s JSX than in HTML.

### **Form in plain HTML**

```javascript
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

---

### **Form in React**

We are going to use the `Car` and `SearchCar` Components. The select form will be replace by a form with an input.

**SearchCar.js**

When we create a dedicated `SearchCar` component, we must introduce a wrapping HTML element to render it. You see the `<div>` wrapping the label and the input.

```javascript
const SearchCar = (props) => {
    let { searchCar, handleChange } = props
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                type="text"
                value={searchCar}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchCar;
```

---

### **React Fragment**

Another solution is to use a **React fragment**.

A fragment wraps other elements into a single top-level element without adding to the rendered output.

You see that the label and the input are now wrapped by `<>` and `</>`

```javascript
const SearchCar = (props) => {
    console.log(props)
    let { searchCar, handleChange } = props
    // let listWithoutDup = [...new Set(listCars.map(item => (item.brand)))];
    return (
        <>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                type="text"
                value={searchCar}
                onChange={handleChange}
            />
        </>
    )
}

export default SearchCar;
```

---

**Let’s see the difference in our browser**

Here is the code of the App component (only the render):

**App.js**

```javascript
render() {
    return (
      <div className="box" >
        <SearchCar searchCar={this.state.nameChosenCar} 
                   handleChange={this.handleChange}/>
        <Car nameChosenCar={this.state.nameChosenCar} 
            chosenCar={this.state.chosenCars} />
      </div>
    )
  }
```

- **Using a wrapper like a **`<div>`

You see in the Inspect Tab:

```javascript
<div className="box" >
   //wrapping div
   <div>
    <label for="search">Search: </label>
    <input id="search" type="text" value/>
   </div>
</div>
```

- **Using React Fragment**

You see in the Inspect Tab

```javascript
<div className="box" >
   //no wrapping div
   <label for="search">Search: </label>
   <input id="search" type="text" value/>
</div>
```

---

**The Complete Code**

**App.js**

```javascript
import React from 'react';
import './Car.css';
import SearchCar from './SearchCar';
import Car from './Car';

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenCars: [],
      nameChosenCar: ""
    };
  }

  handleChange = event => {
    const searchedCars = listCars.filter((car) =>
    car.brand.includes(event.target.value))
    this.setState(
      {
        nameChosenCar: event.target.value,
        chosenCars: searchedCars
      }
    )
    console.log(this.state)
  }

  render() {
    return (
      <div className="box" >
        //new code here
        <SearchCar searchCar={this.state.nameChosenCar} 
                   handleChange={this.handleChange} />
        <Car chosenCar={this.state.chosenCars} />
      </div>
    )
  }
}

export default App;
```

**SearchCar.js**

```javascript
const SearchCar = (props) => {
    // new code here
    let { searchCar, handleChange } = props
    return (
    // new code here
        <>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                type="text"
                value={searchCar}
                onChange={handleChange}
            />
        </>

    )
}

export default SearchCar;
```

**Car.js**

```javascript
import './Car.css';

const Car = (props) => {
    let { chosenCar } = props;
    return (
        <div>
            {
                chosenCar.map(item => (
                    <ul key={item.id}>
                        <li>Brand : {item.brand}</li>
                        <li>Name : {item.name}</li>
                        <li>Year of creation : {item.year}</li>
                        <li>Origin : {item.origin}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Car;
```
