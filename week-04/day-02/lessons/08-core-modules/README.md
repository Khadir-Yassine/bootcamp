# Core Modules

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn :**

- Node.js core modules

- Read, Modify and Delete a file using the `fs module`

---

## **Useful Resources**

- [fs module](https://dev.to/mariokandut/what-is-the-node-js-fs-module-4282)

- [Writing to Files in Node.js](https://stackabuse.com/writing-to-files-in-node-js/)

---

### **Modules included with NodeJS**

NodeJS comes with several modules with functions that allow you to easily perform the most common tasks.

Here I will present you only a few examples of NodeJS modules. You can consult the [NodeJS documentation](https://nodejs.org/en/docs/) for full details of the modules and how they work.

---

### **Node.js Module Types**

A module is a set of functions you want to include in your application. Node modules allow you to write reusable code.

Node.js includes three types of modules:

- **Core Modules**

- **Local Modules**

- **Third Party Modules**

The **core modules** include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js process starts. However, you need to import the core module first in order to use it in your application.

Node.js has a set of built-in modules which you can use without any further installation. The list of modules is [here](https://www.w3schools.com/nodejs/ref_modules.asp).

- **http**: http module includes classes, methods and events to create Node.js http server.

- **url**: url module includes methods for URL resolution and parsing.

- **querystring**: querystring module includes methods to deal with query string.

- **path**: path module includes methods to deal with file paths.

- **fs**: fs module includes classes, methods, and events to work with file I/O.

- **util**: util module includes utility functions useful for programmers.

In order to use Node.js core or NPM modules, you first need to import it using `require()` function as shown below.

```javascript
const module = require('module_name');
```

---

### **The Path module**

The ‘path’ module contains functions that allow proper handling of folder and file locations. Documentation [here](https://nodejs.org/api/path.html)).

In your command prompt, after entering `node`, enter the path module : `> path`. You will receive a list of methods that you can use with this module :

```javascript
path
{ resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: format],
  parse: [Function: parse]
}
```

To reference a module, just use its name

```javascript
const path = require("path");

products_path = "/data/products/products.json";
products_file = path.basename(products_path);

console.log(products_file); // products.json
```

According to the documentation : “The `path.basename()` method returns the last portion of a path”, so in this case `products.json`

Another handy function is `path.join()`. This function allows you to join together one or more folders and files. For example :

```javascript
const path = require("path");

data_folder = "/data/";
products_folder = "/products";
products_file = "products.json";

const full_path = path.join(data_folder, products_folder, products_file);

console.log(full_path); // /data/products/products.json
```

`path.join()` concatenates all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path

Finally, sometimes you would like to have the absolute path on the server

```javascript
const path = require("path");

data_folder = "/data/";
products_folder = "/products";
products_file = "products.json";

const full_path = path.join(data_folder, products_folder, products_file);

const abs_path = path.resolve(__dirname, "data", "products", "products.json");

console.log(abs_path);
// /Users/username/Documents/dev/learn_node/data/products/products.json
```

`path.resolve()` process the sequence of paths from right to left, with each subsequent path prepended until an absolute path is constructed.

---

### **The File System Module**

Undoubtedly one of the most used module, this module allows you to handle files and folders on the server

The FS module allows the manipulation of files and folders in two different ways. You can do this in synchronous or asynchronous mode.

**Synchronous Functions**

This means that this function is blocking, NodeJS will wait for the function return value before resuming the execution of the application.

**Asynchronous Functions**

This means that NodeJS will not wait for the function return value, it will continue your application execution and when the function is finished, will process the result.

---

### **Which method to use?**

It depends on the type of application you want to develop. If for example you are developing a web server in this case it is preferable, not to say essential, to use an asynchronous function. A synchronous function would block the execution of the server not only for the current user but also would block all users.

On the other hand in certain very precise cases the use of a synchronous function can be justified. For example, before launching a web server, if you need to read a configuration file, in this case, a synchronous function guarantees that you will read the file before the server is launched.

In short, in general, always used an asynchronous function and only if necessary, a synchronous function.

Let’s see an example of using the ‘fs’ module with the two types of functions:

**Synchronous function**

**app.js**

```javascript
const fs = require("fs");

const data = fs.readFileSync("info.txt", "utf-8");
console.log(data); // file content
console.log("The file has been read");
```

Here the result is easily predictable, the code will be executed line by line.

**Asynchronous function**

**app.js**

```javascript
const fs = require("fs");

const info = fs.readFile("info.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("The file has been read");
```

Here, NodeJS will not wait for the function to return to continue execution.

This will have the consequence of displaying ‘The file has been read’ first and when the `readFile()` has finished its work, NodeJS will execute the callback function `console.log(data)`

---

***Note that for the rest of this tutorial we will only use asynchronous functions.***

---

### **Reading a File**

Use `fs.readFile()` method to read the physical file asynchronously.

```javascript
fs.readFile(fileName [,options], callback)
```

**Parameters Description:**

- `fileName`: Full path and name of the file as a string.

- `options`: The options parameter can be an object or string which can include encoding and flag. The default encoding is utf8 and default flag is “r”.

- `callback`: A function with two parameters `err` and `data`. This will get called when `readFile` operation completes.

The following example demonstrates reading existing **menu.txt** asynchronously.

**menu.txt**

```javascript
Soup & Salad

Greek Salad
Mixed greens, kalamata olives, tomatoes,
cucumbers, onions, feta cheese, oregano,
peperoncini, house made Greek dressing
$7

Caesar Salad
Romaine lettuce, aged parmigianoreggiano, house made Caesar dressing,
and croutons
$7
```

**script.js**

```javascript
const fs = require('fs');

fs.readFile('menu.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

console.log("-----Restaurant Menu---------", '\n',);
```

Run the server with the `npm start` command:

- If there is NO error, you get the result below in the terminal:

```javascript
-----Restaurant Menu---------

Soup & Salad

Greek Salad
Mixed greens, kalamata olives, tomatoes,
cucumbers, onions, feta cheese, oregano,
peperoncini, house made Greek dressing
$7

Caesar Salad
Romaine lettuce, aged parmigianoreggiano, house made Caesar dressing,
and croutons
$7
```

- If there is an error, for example wrong incoding

```javascript
fs.readFile('menu.txt', 'uf-8', function (err, data) {...}
```

you get in the terminal:

```javascript
 throw new ERR_INVALID_OPT_VALUE_ENCODING(encoding);
    ^

TypeError [ERR_INVALID_OPT_VALUE_ENCODING]: The value "uf-8" is invalid for option "encoding"
```

---

**More Explanation**

- The `readFile` method is **asynchronous** and, hence, takes a completion callback as its last argument. This `callback` takes an `err` as an exception. If no exception occurs, this will be either null or undefined. The second argument of this callback is `data`. This represents the data that is read from the file. Since this is asynchronous, the process does not block and we see our “-----Restaurant Menu---------” before the file data.

It is also possible to read a file with `readFile` but using promises.

```javascript
const fs = require("fs").promises;

const start = async () => {
  const data = await fs.readFile("info.txt", "utf8");
  console.log(data);
};

start();
```

**Different import and different syntax but same result**

---

### **Writing to a File**

Use `fs.writeFile()` method to write data to a file. If the file already exists then it overwrites the existing content otherwise it creates a new file and writes data into it.

```javascript
fs.writeFile(fileName, data[, options], callback)
```

**Parameters Description:**

- `fileName`: Full path and name of the file as a string.

- `data`: The content to be written to a file.

- `options`: The options parameter can be an object or string which can include encoding, mode and flag. The default encoding is utf8 and default flag is “w”.

- `callback`: A function with one parameter `err`. This will get called when write operation completes.

The following example creates a new file called `test.txt` and writes “Hello World” into it asynchronously.

**Example: Creating & Writing**

```javascript
const fs = require('fs');

fs.writeFile('test.txt', 'Hello World!', function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});
```

**Example: Overwriting the existing file**

**script.js**

```javascript
const fs = require('fs');
//new content
const newContent = "House Salad"

//writeFile method
fs.writeFile('menu.txt', newContent, function (err) {
    if (err) {
        console.error(err)
        return
    }
});

//readFile method
fs.readFile('menu.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});

console.log("-----Restaurant Menu---------", '\n',);
```

Run the server, you will get:

```javascript
-----Restaurant Menu---------

House Salad
```

---

### **Appending to a File**

Use `fs.appendFile()` method to add to a file’s contents.
This method is used to asynchronously append the given data to a file.
Using the `fs.appendFile` creates the file if it does not exist, and appends to the file otherwise.

```javascript
fs.appendFile(fileName, data[, options], callback)
```

**Parameters Description:**

- `filename`: Full path and name of the file as a string.

- `data`: The content to be appended to a file.

- `options`: The options parameter can be an object or string which can include encoding, mode and flag. The default encoding is utf8 and default flag is “a”.

- `callback`: A function with two parameters `err`. This will get called when append operation completes.

**script.js**

```javascript
const fs = require('fs');
const newContent = "Caesar Salad"

fs.appendFile('menu.txt', newContent + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});

fs.readFile('menu.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});

console.log("-----Restaurant Menu---------", '\n',);
```

Run the server, you will get:

```javascript
-----Restaurant Menu---------

House Salad
Caesar Salad
```

---

### **Deleting a File**

Use `fs.unlink()` method to delete an existing file.

```javascript
fs.unlink(path, callback);
```

```javascript
const fs = require('fs');

fs.unlink('test.txt', function (err) {
    console.log('write operation complete.');
});
```

---

### **Reading a directory**

We can use the `fs.readdir` method to list all the files and directories within a specified path:
Here we read the current folder.

```javascript
const fs = require('fs')

fs.readdir('./', (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    console.log('files: ', files)
})
```

Run the server, you will get:

```javascript
files:  ['menu.txt','script.js']
```

To read the public folder inside the current folder:

```javascript
fs.readdir('./public', (err, files) => {...}
```

---

### **Other ‘fs’ Operations**

- Copying a file:

```javascript
fs.copyFile("info.txt", "info2.txt", (err) => {
  if (err) return console.error(err);
  console.log("File copied");
});
```

- Creating a folder:

```javascript
fs.mkdir("data", (err) => {
  console.log("Data folder created");
});
```

- Listing files in a folder:

```javascript
fs.readdir(".", (err, files) => {
  console.log(files);
});
```

- Renaming a file:

```javascript
fs.rename("info.txt", "data.txt", (err) => {
  if (err) return console.log(err);
  console.log("File renamed");
});
```

---

### **Flags**

The following table lists all the flags which can be used in read/write operation.

| Flag | Description |
| --- | --- |
| `r` | Open file for reading. An exception occurs if the file does not exist. |
| `r+` | Open file for reading and writing. An exception occurs if the file does not exist. |
| `rs` | Open file for reading in synchronous mode. |
| `rs+` | Open file for reading and writing, telling the OS to open it synchronously. See notes for ‘rs’ about using this with caution. |
| `w` | Open file for writing. The file is created (if it does not exist) or truncated (if it exists). |
| `wx` | Like ‘w’ but fails if path exists. |
| `w+` | Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists). |
| `wx+` | Like ‘w+’ but fails if path exists. |
| `a` | Open file for appending. The file is created if it does not exist. |
| `ax` | Like ‘a’ but fails if path exists. |
| `a+` | Open file for reading and appending. The file is created if it does not exist. |
| `ax+` | Like ‘a+’ but fails if path exists. |

---

### **Important methods**

| Method | Description |
| --- | --- |
| `fs.readFile(fileName [,options], callback)` | Reads existing file. |
| `fs.writeFile(fileName, data[, options], callback)` | Writes to the file. If file exists then overwrite the content otherwise creates new file. |
| `fs.open(path, flags[, mode], callback)` | Opens file for reading or writing. |
| `fs.rename(oldPath, newPath, callback)` | Renames an existing file. |
| `fs.chown(path, uid, gid, callback)` | Asynchronous chown. |
| `fs.stat(path, callback)` | Returns fs.stat object which includes important file statistics. |
| `fs.link(srcpath, dstpath, callback)` | Links file asynchronously. |
| `fs.symlink(destination, path[, type], callback)` | Symlink asynchronously. |
| `fs.rmdir(path, callback)` | Renames an existing directory. |
| `fs.mkdir(path[, mode], callback)` | Creates a new directory. |
| `fs.readdir(path, callback)` | Reads the content of the specified directory. |
| `fs.utimes(path, atime, mtime, callback)` | Changes the timestamp of the file. |
| `fs.exists(path, callback)` | Determines whether the specified file exists or not. |
| `fs.access(path[, mode], callback)` | Tests a user’s permissions for the specified file. |
| `fs.appendFile(file, data[, options], callback)` | Appends new content to the existing file. |

The possibilities are almost endless!

You now have a base with the ‘fs’ module if you want to know all the available ‘fs’ functions, consult the NodeJS website for all the details:
[Node.js documentation](https://nodejs.org/api/fs.html).

---

### **Conclusion**

By delving into these core modules, you’ve established a solid foundation for your Node.js endeavors. While this tutorial offers a glimpse into their capabilities, further exploration and experimentation will unveil the true potential of Node.js modules.

---

**Exercise**

**Exercise: File System Operations**

1. Create a directory named `file-operations`.

2. Inside the `file-operations` directory, create a file named `write-file.js`.

3. In `write-file.js`, use the `fs` module to write a simple text content to a file named `output.txt`.

4. Create another file named `read-file.js`.

5. In `read-file.js`, use the `fs` module to read the content from the `output.txt` file and display it in the terminal.

6. Open a terminal in the `file-operations` directory.

7. Run `node write-file.js` to write content to the file.

8. Run `node read-file.js` to read and display the content from the file.
