# Node Package Manager

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn**

- Node.js

- NPM : Node package manager

- NPM commands

- Nodemon package

---

## **Useful Resources**

- [NPM documentation](https://www.npmjs.com/)

- [NPM Tutorial](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

---

### **NPM (Node Package Manager)**

Do you want to create a NodeJS function or module? Why re-invent the wheel? Chances are, the function you want to code has already been created by another developer.

NodeJS, allows you to use libraries created by the community. To do this, there is a tool called NPM (Node Package Manager) which allows you to download, install and manage these packages.

NPM is already pre-installed with NodeJS. It is a command line application that will allow you to install the package of your choice.

The website [NPM](https://www.npmjs.com/) contains a list of all the packages available through NPM. There are more than a million.

NPM provides a system that allows management of installed packages and their version. This management is done with the help of a file called `package.json`

This `package.json` file is unique to our application and contains the list of ‘dependencies’ of our project. That is to say the list of all the installed packages and their version.

This file also contains other information about your project such as name, author and start file (the first that Node.js will run). It is also possible to create ‘script’ commands to launch certain functions such as launching the server or the compilation and execution of the project.

You can create this `package.json` file manually or run an NPM command to do it automatically.

Create a folder. In your terminal, `cd` into the folder and write the command `npm init`

```javascript
$ npm init
```

This command will ask a few questions.
Just use the default answers by pressing *Enter*, it will create the file `package.json` with the following information:

```javascript
{
  "name": "<folder_name>",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Note that if you have not created a `package.json` file when you install your first package, NPM will create the file automatically for you.

We are now going to install our first package named `slugify`. This package is a small utility for creating a web friendly URL from a string.
Ex. “Welcome to my home” will turn into a user-friendly URL for the web: welcome-to-my-home

To install the package, `cd` into the folder and enter the following command in the terminal:

```javascript
npm install slugify
```

Once the package is installed, you can consult the `package.json` file, you will find the `slugify` package listed under the list of ‘dependencies’ there:

```javascript
{
  "dependencies": {
    "slugify": "^1.6.0"
  }
}
```

Note that the source files of this packages have all been copied into the **node_modules** folder

This package can now be used in your application

```javascript
const slugify = require("slugify");

console.log(slugify("My New Web Site"));
// My-New-Web-Site
```

NPM can also install packages globally so that any Node.js applications on your computer can import and use the installed packages. NPM installs the global packages in the `//local/lib/node_modules folder`.

Add -g in the install command to install a package globally. For example, the below package is named `create-react-app`

```javascript
$ npm install create-react-app -g
```

Most of the time, you will need administrator privileges to install a package globally. In this case, use the sudo command (on Mac)

```javascript
$ sudo npm install create-react-app -g
```

---

### **Version Management**

We can see the version number of the package in the file of `package.json`

```javascript
"dependencies": {
    "slugify": "^1.4.7"
  }
```

The version number reads like this (eg 1.4.7):

- Major version (**1**): New version with breaking changes

- Minor version (**4**): New features but no breakthrough changes

- Patch version (**7**): Only bugs are fixed

- Version prefix indicator:
  
  - **^ 1.4.7**: Accept the minor version update
  - **~ 1.4.7**: Only accept the update of the patch version
  - **1.4.7**: Accept all version updates (not recommended)

---

### **NPM commands**

- `npm install name_of_package` : install the package locally

- `npm install name_of_package@version` : install a specific version of the package – `version` is a number - for example : 1.9

- `npm uninstall name_of_package` : uninstall the package locally

- `npm list` : list of local packages

- `npm outdated` : check the versions of your packages. You get a table, for example :

| Package | Current | Wanted | Latest | Location |
| --- | --- | --- | --- | --- |
| name_of_package | 1.9.1 | 1.9.2 | 1.9.2 | project |

**Current column**: version that is installed locally.
**Latest column**: latest version of the package.
**Wanted column**: latest version of the package we can upgrade to without breaking our existing code.

- `npm update name_of_package` : update the package to the latest version

**Aliases**

- `npm i <package>`: install local package

- `npm un <package>`: uninstall local package

- `npm up`: npm update packages

- `npm t`: run tests

- `npm ls`: list installed modules

- `npm ll` or `npm la`: print additional package information while listing modules

---

**Updating packages**

This command will install accepted updates (if they exist at that time)

```javascript
npm update slugify
```

---

**Uninstalling packages**

```javascript
npm uninstall slugify
```

---

### **node_modules folder**

When you install a package, the contents of the package will be installed in this folder. If you delete this folder, you can recreate it by running:

```javascript
$ npm install
```

This command will reinstall all your packages listed in the file `packages.json`

This command is useful for installing packages when you copy an app from a colleague or from Github. Because when you do so, the node_modules folder is never provided. So you need this command to recreate it.

---

### **Node Package Execute (NPX)**

npx stands for Node Package execute. It is a tool specially designed for executing packages. When you launch the execution of a package with this tool, `npx` will look in the “PATH” variable of the computer then in the binary files of the project modules to launch the command. If it has not found it, the tool is even able to go on the web to find the command and then execute it.

The package is executed in the current directory.

`npx` can also be used in the “scripts” section of the `packages.json` file, in order to put commands that launch a server or a platform at startup.

**It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it**

Launch a package with npx

```javascript
npx creat-react-app my-app
```

---

### **The nodemon package**

When you develop a NodeJS application, each time you modify your code you must stop the server and restart your application. It is a huge waste of time.

Fortunately, there is a tool to remedy this: `nodemon`

See the documentation [here](https://www.npmjs.com/package/nodemon)).

nodemon is a tool that helps develop Node.js based applications by automatically restarting the Node application when file changes in the directory are detected.

nodemon does not require any additional modification to your code or your development method. nodemon is a replacement wrapper for Node. To use nodemon, replace the word `node` on the command line when running your script.

Example use to launch/test your application:

```javascript
$ npx nodemon app.js
```

Installation of the module in **development mode only (NOT IN PRODUCTION)**

```javascript
$ sudo npm install nodemon -D
```

It is also possible to install the nodemon package globally. This way you can use nodemon from all your projects

Here is the command for installation

```javascript
$ npm install nodemon -g
```

Use when globally installed

```javascript
$ nodemon app.js
```

---

### **Github and NPM**

As soon as you start installing packages to your local folder, a sub folder called **node_modules** will be created. It will contain all your packages.

Since this folder often has a massive size, developers typically do not commit it inside the Git repository.

Before pushing to Github,

- ignore the node_modules folder in Git, create a `.gitignore` file with this entry: `node_modules` or `node_modules/`

- Remove the node_modules folder from the Git index using the git rm cached command : `git rm -r --cached node_modules`

Don’t worry, the list of the packages is still in the `package.json` file.

When someone will fork or clone your github, he will only have to run the command `npm install` to download all the necessary packages of your project.

**It shows you the importance of the **`package.json` file

---

### **Conclusion**

NPM serves as a vital tool in the Node.js ecosystem, enabling developers to easily integrate and manage external packages. Leveraging packages from the community not only accelerates development but also ensures the reuse of established solutions. By mastering NPM, you enhance your ability to build robust and efficient applications.

---

**Exercises**

**Exercise: Creating a **`package.json` File

1. Create a directory named `myproject`.

2. Inside the `myproject` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Provide information such as the project name, version, description, entry point, and author when prompted.

4. After completing the `npm init` process, open the generated `package.json` file and review the information you provided.

5. Update the `scripts` section of `package.json` to include a script named `"start"` that runs your Node.js application. For example: `"start": "node app.js"`.

6. Create a simple JavaScript file named `app.js` in the `myproject` directory. Inside `app.js`, write a simple script, such as printing a welcome message.

7. Open a terminal in the `myproject` directory and run your application using the command `npm start`.

8. Verify that your application runs and the welcome message is displayed in the terminal.

---

**Exercise: Simple NPM Package Usage**

1. Create a directory named `mysecondproject`.

2. Inside the `mysecondproject` directory, open a terminal and run `npm init` to initialize a new Node.js project. Follow the prompts to set up your project.

3. Install the `moment` package, a popular date and time manipulation library, by running `npm install moment` in the terminal.

4. Create a file named `app.js` inside the `mysecondproject` directory.

5. In `app.js`, require the `moment` package using CommonJS syntax.

6. Use the `moment` package to display the current date and time.

7. Run `app.js` using Node.js and verify that the current date and time are displayed correctly.

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
