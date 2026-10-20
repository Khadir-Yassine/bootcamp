# How to update packages using npm

Course source: [Geeks Institute](https://www.geeks.institute/).
**Node package manager (npm)** is a package manager for JavaScript. Package managers automate the process of installing, updating, and deleting software packages.​

When a package is installed using `npm install <packagename>`, the latest available version of the package is downloaded and put in the node_modules folder; a corresponding entry is then added to the `package.json` and `package-lock.json` files.

---

### **Check outdated packages**

To discover new releases of the packages, run the following command:

```javascript
npm outdated
```

---

### **Upgrade packages**

The following command will update all the packages to the latest minor version. New major versions may introduce changes that could break the project or the command may install missing packages:

```javascript
npm update --save
```

---

**Updating all globally-installed packages**

To update all global packages on the command line, run the following command:

```javascript
npm update -g
```
