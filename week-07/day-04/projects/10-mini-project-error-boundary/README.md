# Mini Project : Error boundary

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What You will learn :**

- Error Boundary

---

## **Mini Project :**

Replace the error in the App with an Error Boundary

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Daily%20Challenge/image.png)

You have the following [initial application](http://di-react-error-boundary-initial-setup.surge.sh/)

**Let’s explain the current features:**

1. As you see the app currently has a header and two columns.
  
  - Two pictures are rendered after clicking on the “Get images” button in the left column, thanks to a request to an API.
  - Some description texts and two buttons are rendered on the right column.

2. When we click the “Replace string with object” button, the text `{"function":"I live to crash"}` which has been `stringified` will be replaced to a plain JavaScript object. This will trigger an error as React does not render plain JavaScript objects. This will cause the whole page to crash and go blank. We’ll have to refresh the page to get back to our view. Try it for yourself.

3. Now refresh the page and click on the “Invoke event handler” button. The page won’t refresh and the error will be displayed in the developer console.

---

**Instructions**

1. When clicking on the “Replace string with object” button, display the error as an `Error Boundary`. See the correct output [**here**](http://di-react-error-boundary-solution.surge.sh/)

2. Use the following [files](https://github.com/devtlv/React-Error-Boundary-01-initial-setupJSBOOTCAMP), and install the initial setup with the `npm install` command.

**Before starting this challenge, take a piece of paper and write down the steps needed. Try not to look at the Tips below**

---

**Tips**

1. Analyse the [initial application](http://di-react-error-boundary-initial-setup.surge.sh/). You see that React can handles errors differently:
  
  - rendering error
  - and event handler error

2. Create a new `ErrorBoundary.js` file inside the `/src` folder and build the Error Boundary Component piece by piece.

3. Define two lifecycle methods that make a component into an Error Boundary. Whenever an error occurs inside the error boundary’s child component, both of the lifecycle methods are activated.
  
  - `static getDerivedStateFromError()` receives the error and updates the state variables: `error` and `hasError`.
  - `componentDidCatch()` receives :
  
  - the `error`(ie. represents the thrown error)
  - and `errorInfo` (ie. an object with a **componentStack** key containing information about the component that)threw the error.
  - then, it logs the error and also update the state with the `errorInfo`.
  - In the `render()` method, return `this.props.children`, which represents the component that this error boundary encloses.
  - In the `render()` method, check if `hasError` is **true**. If it is, then render a `<div className="card my-5"></div>`, which will be our fallback UI. Here, we will show information about the error and an option to reload the page. However, in a production environment, it is not advised to show the error to the user. Some other message would be fine.
  - Make use of our `ErrorBoundary` component. Open up `App.js`, import `ErrorBoundary` and render `ColumnRight` inside.
  - Now test by clicking on the “Replace string with object” button. This time, the right column crashes and the fallback UI is displayed. We’re showing a detailed report about where the error happened. We also see the error log in the developer console.
  
  ![test](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day3/Daily%20Challenge/test.png)
  
  4. Open up `src/columns/ColumnRight.js`, import `ErrorBoundary` and render the second `<p>` block inside. This is the paragraph that crashes the `<ColumnRight />` component.
  
5. We can see that everything else remains in place. Click on the “Get images” button to confirm that it still works as expected. We still have most of the page intact. Only the second paragraph is replaced with our fallback UI.

---

## **Submit your Exercises :**

Don’t forget to push to Github

---

## **More info**

| Duration (approx) |
| --- |
| 30 minutes |

---

One Last Thing: **Good luck!**

---
