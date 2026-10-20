# Object Methods

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Object Methods

---

### **Objects**

**1. Object Methods**

Methods are actions stored in properties as function definitions.

*Syntax*

```javascript
let object= {
    property : value,
    property : value,
    property : function () {
        statement
    }
}
```

```javascript
let person= {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : function () {
        console.log("I love chocolate")
    }
}
```

---

**2. The ‘this’ Keyword**

`this`refers to the object.
`this.property` is the property of **this object**.

```javascript
let person= {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : function () {
        console.log("My name is" + this.firstName + "I love chocolate")
    }
}
```

---

**3. Accessing object method**

*Syntax*

```javascript
object.function()
```

```javascript
let person= {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : function () {
        console.log("My name is" + this.firstName + "I love chocolate")
    }
}
person.eat()
```
