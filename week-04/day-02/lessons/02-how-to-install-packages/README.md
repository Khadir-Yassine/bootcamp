# How to install packages

Course source: [Geeks Institute](https://www.geeks.institute/).
### **How to install packages using npm install**

The **node package manager (npm)** installs the packages required in a JavaScript project ​and provides a useful interface on which these packages can work.

The `npm install` command allows the user to install a package. There are two types of installation:

- local install

- global install

---

### **Code**

The following codes demonstrates various variations on the npm install command.

**1. Installing packages locally**

The following command installs any third-party module in the project’s folder.

```javascript
npm install <package name>
```

This creates a node_modules directory in the project’s current directory (if one doesn’t exist yet) and downloads the package to that directory.

For example, to install the ExpressJS package, simply write the command:

```javascript
npm install express
```

---

**2. Installing packages globally**

The following command installs global packages into the /User/local/lib/node_modules folder.

```javascript
npm install -g <package name>
```

The command to install the ExpressJS package globally would then be:

```javascript
npm install -g express
```

---

**3. Installing a package with dist-tags**

`npm install <package_name>` will use the `latest` tag by default.

To override this behavior, use the command below (where tag is the package’s `tag` like `beta`, `latest`, etc.).

```javascript
 npm install <package_name>@<tag>. 
```

To install a specific version of the ExpressJS library, type:

```javascript
npm install express@beta.
```
