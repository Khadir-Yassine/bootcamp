# React Forms

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- How to reuse form components in React

---

According to React Documentation:

Components let you split the UI into independent, **reusable pieces**, and think about each piece in isolation. Let’s see how we can reuse components in Forms.

---

### **Without reusable inputs**

We will create a form to ask the user for his credentials : name, age, email.

**App.js**

The function `handleSubmit` passed to the `UserData` Component retrieves the data from the inputs and console.log it.

```javascript
import React from 'react';
import UserData from './UserData';

class App extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = event => {
    event.preventDefault();
    let inputs = event.target.getElementsByTagName('input')
    for (const item of inputs) {
      console.log(item.value)
    }
  }

  render() {
    return (
      <div className="box" >
        <UserData handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;
```

**UserData.js**

We return a form with 3 inputs and a button.

```javascript
const UserData = (props) => {
    let { handleSubmit } = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                />
                <button type="submit">Submit</button>
            </form>
        </>

    )
}

export default UserData;
```

---

### **With Reusable Inputs**

Earlier, the form was very much tied to the `UserData` Component, which makes it less reusable for the rest of the application and non UserData-related tasks.

We create another component called `InputWithLabel`, and we pass to it additional props : `id`, `label` and `type`. It makes this new component reusable for the rest of the application.

**App.js** is the same as earlier

---

**UserData.js**

```javascript
const UserData = (props) => {
    let { handleSubmit } = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputWithLabel id="name" label="Name" type="text" />
                <InputWithLabel id="age" label="Age" type="number" />
                <InputWithLabel id="email" label="Email" type="email" />
                <button type="submit">Submit</button>
            </form>
        </>

    )
}

const InputWithLabel = (props) => {
    let { id, label, type } = props
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
            />
        </>
    );
}

export default UserData;
```

To make the `InputWithLabel` Component reusable in our application, we should create a new file `InputWithLabel.js` and import it wherever we want to use it.
