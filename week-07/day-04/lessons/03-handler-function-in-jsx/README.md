# Handler Function in JSX

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Handler Function in JSX

- Lifting State in React

---

## **Handler Function in JSX**

We’re going to discover how to use `onchange` handlers with a React component’s JSX.

We define a function – which can be normal or arrow – for the change event of the input field. In React, this function is called an **(event) handler**. Now the function can be passed to the `onChange` attribute (JSX named attribute) of the input field.

*Syntax*

We call the callback function without parentheses:

```javascript
<input
  id="search"
  type="text"
  onChange={handleChange}
/>
```

---

### **Example**

We are working on a car website.

After the user selects the brand of the car from the `<select>` form, we display the list of cars available.

Finished project:

![Finished project](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day3/Lesson/step%206%20project%20car.png?raw=true)

---

**Steps**

**Step I**

1. We create a new file for the `<select>` form

2. We use a functional component

3. We call the callback function passed as props from the `App.js` (see below)

4. We use the value `listCars` passed as props from the `App.js` to create the different `options` of the `<select>` form

`src/SearchCar.js`

```javascript
const SearchCar = (props) => {
    // see App.js below
    let { listCars, handleChange } = props
    return (
        <select id="mySelect" onChange={handleChange}>
            <option value="...">...</option>
            {
                listCars.map(item => (
                    <option value={item.brand}>{item.brand}</option>
                ))
            }
        </select>
    )
}

export default SearchCar;
```

---

**Step II**

1. We work in the `App.js` file

2. We use a functional component

3. We use a list of cars (array of object)

4. We create a callback function for the `onChange` event
  
  - when the user selects the car brand, we fetch the value of the option and we assign it to the `nameChosenCar` variable.

```javascript
import './Car.css';
import SearchCar from './SearchCar';

//functional component
const App = () => {

  //array of objects passed to the SearchCar component
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

    let nameChosenCar;

    //callback function
    const handleChange = event => {
        nameChosenCar = event.target.value;
    };

    return (
        <div className="box">
            {/* We call the SearchCar component and we pass the props*/}
          <SearchCar listCars={listCars} handleChange={handleChange} />
        </div>
    )
}

export default App;
```

![step 2](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day3/Lesson/step%202%20project%20car.png?raw=true)

---

## **Lifting State in React**

---

**Step III**

Currently, we have a `<select>` form, but we are not using the selection of the user. We need to pass the information up to the App component.

The selection of the user is needed in the App to filter the list before passing it to the `Car` component as props. We’ll need to **lift state up** from Search to App component to share the state with more components.

1. We need to change the App to a Class component to use the state

```javascript
// Line needed to create a Class Component
import React from 'react';
import './Car.css';
import SearchCar from './SearchCar';

// the array of object is now outside of the class
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

// Class Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //we pass nameChosenCar in the state
      //currently it's an empty string
      nameChosenCar: ""
    };
  }

  // we deleted the "const" keyword before the function
  handleChange = event => {
    // we use this.setState to change the value of nameChosenCar
    this.setState(
      {
        nameChosenCar: event.target.value,
      }
    )
  }

  render() {
    return (
      <div className="box" >
        // we pass the callback function using the "this" keyword
        <SearchCar listCars={listCars} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App;
```

---

**Step IV**

The selection of the user is needed in the App to filter the list before passing it to the `Car` component as props.

Look at the `handleChange` function,

Explanation

- By adding a state to the App component, we can finally filter the list before passing the `chosenCars` to the `Car` component

- Here, the JavaScript array’s built-in filter function is used to create a new filtered array. The filter function takes a function as an argument, which accesses each item in the array and returns true or false. If the function returns true, meaning the condition is met, the item stays in the newly created array; if the function returns false, it’s removed

- The filter function checks whether the `event.target.value` is present in our car item’s brand.

```javascript
import React from 'react';
import './Car.css';
import SearchCar from './SearchCar';
// call the Car component
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
      // we added a new attribute to the state
      // it will hold the relevant objects 
      chosenCars: [],
      nameChosenCar: ""
    };
  }

  handleChange = event => {
    // we filter the listCars to fetch only those with the brand equal to event.target.value (ie. value of the option chosen by the user)
    const searchedCars = listCars.filter((car) =>
      car.brand.includes(event.target.value))
    this.setState(
      {
        nameChosenCar: event.target.value,
        //set the value of the attribute chosenCars
        chosenCars: searchedCars
      }
    )
  }

  render() {
    return (
      <div className="box" >
        <SearchCar listCars={listCars} handleChange={this.handleChange} />
          {/* We call the Car component */}
        <Car nameChosenCar={this.state.nameChosenCar} chosenCar={this.state.chosenCars}/>
      </div>
    )
  }
}

export default App;
```

*Note*: In this example we are using a `<select>` form. If you were using an input, change the `filter` of the `handleChange` function to :

```javascript
// on change with input
const searchedCars = listCars.filter((car) =>
    car.brand
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
```

---

**Step V**

We create the `Car` component

`src/Car.js`

```javascript
import './Car.css';

const Car = (props) => {
    let { chosenCar, nameChosenCar } = props;

    // a function to make the website more userfriendly
    const checkCars = () => {
        if (chosenCar.length > 1) {
            return `Here are all the ${nameChosenCar} cars available in the shop`
        } else if (chosenCar.length == 1) {
            return `Here is the only ${nameChosenCar} car available in the shop`
        } else if (chosenCar.length == 0) {
            return `No ${nameChosenCar} car currently available in the shop`
        }
    }

    return (
        <div>
            //the function is called here
            <h1>{checkCars()}</h1>
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

---

![step 5](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day3/Lesson/step%205%20project%20car.png?raw=true)

![step 5 bis](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day3/Lesson/step%205%20bis%20project%20car.png?raw=true)

---

**Step VI**

The `<select>` form has some duplicates, we need to delete them:

`src/SearchCar.js`

```javascript
const SearchCar = (props) => {
    console.log(props)
    let { listCars, handleChange } = props
    let listWithoutDup = [...new Set(listCars.map(item => (item.brand)))];
    return (
        <select id="mySelect" onChange={handleChange}>
            <option>...</option>
            {
                listWithoutDup.map(item => (
                    <option value={item}>{item}</option>
                ))
            }
        </select>
    )
}

export default SearchCar;
```

![step 6](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%208/Day3/Lesson/step%206%20project%20car.png?raw=true)

[**Must see Tutorial - How to Remove Array Duplicates in ES**](https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/)
