# How to import and export in NodeJS

Course source: [Geeks Institute](https://www.geeks.institute/).
### **How to import and export using the module object in NodeJS**

In NodeJs we often use modules. A module is a global object that is accessible in any NodeJs file. Node modules are reusable codes that you can create by yourself, you can use built-in ones provided by NodeJs (e.g., fs, path, os, etc.), or you can use external ones downloaded using NPM or Yarn (e.g., expressJs, mongoose, and luna).

---

### **Module object**

The module object is a special object that you might not be aware of. You can use this object whenever you import or export files as modules in your project. Take a look at the code below:

```javascript
module.exports.first = () => {
    console.log("First Export");
}

module.exports.second = () => {
    console.log("Second Export");
}

console.log(module);
console.log(module.exports);
```

From the code above, we can see that the module object contains the **“exports” property**, an object that contains the values we are exporting. Note: don’t forget that the export property of the module object is an object. This is because it is actually exporting the object values that we will be importing in other codes.

---

### **Exporting and importing modules**

Since the “module” is globally accessible, we do not need to specify `module.exports`. You can imagine it as the window object, which has methods and properties (like `window.console.log()`) that are called on their own (like `console.log()`).

Now, let’s import this module:

**index.js**

```javascript
const  { first, second} =  require("./export1");

first();
second();
```

**export1.js**

```javascript
exports.first = ()=>{
    console.log("first Export");
}

exports.second = ()=>{
    console.log("Second Export");
}
```

Based on the output above, we have imported the export1.js file. Now, as we have seen, what we exported from the `export1.js` file and imported into the `import1.js` file is an object that contains the first and second functions as values.

---

### **Exporting other values**

In this case, we are referring to exporting an array:

**index.js**

```javascript
const { animals } = require("./export2");

console.log(animals);
```

**export2.js**

```javascript
exports.animals = [
    "dog",
    "sheep",
    "cow",
    "horse"
]
```

The output shows that the animals array is a property of the exported animal array present in the exports property of the module object.

---

### **How about exporting the exports as a single variable?**

Yeeaah! How about we import without the brackets? Using the last code we wrote, we can import the animal module this way too:

**index.js**

```javascript
const myAnimalExports = require("./export2");

console.log(myAnimalExports.animals);
```

**export2.js**

```javascript
exports.animals = [
    "dog",
    "sheep",
    "cow",
    "horse"
]
```

Here, we have imported the `myAnimalExports`. So now, we can reference each of the imported. properties.

---

### **Do names matter when importing and exporting?**

Yes, names matter. Make sure you import with the same name you used when exporting.

---

### **Conclusion**

In conclusion, we have looked at the global module object and learned that it contains the export property, including all the values (i.e., functions, arrays, etc.) that we want to export as a module.

Thanks for your time!
