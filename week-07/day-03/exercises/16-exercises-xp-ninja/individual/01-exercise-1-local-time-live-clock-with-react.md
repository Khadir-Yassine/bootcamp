# Exercise 1 : Local Time Live Clock with React:

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

### **Exercise 1 : Local Time Live Clock with React:**

**Instructions**

![clock](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%209/Day1/Exercise%20XP%20Ninja/clock.png)

**Check the example **[**here**](http://di-react-timer.surge.sh/)

---

1. In a new Javascript file, create a `Clock` component. This component displays the current time.

2. Create a state variable named `currentDate`. Create a function called `tick()`, that changes `currentDate` variable.

3. Use the `useEffect` Hook to set an interval that will call the function `tick()` every second.

4. Display the current time in the `return`.

5. We also want to clear that timer whenever the DOM produced by the `Clock` component is removed. Use the cleanup function of the `useEffect` Hook to clear the interval.
Take a look at this [tutorial](https://medium.com/@vishalkalia.er/what-is-the-useeffect-cleanup-function-and-how-it-works-83d8c67a1a10)
*Note* : the cleanup function is useful in applications with many components, because it’s very important to free up resources when the components are destroyed.

6. Import the `Clock` component in the `App.js` file.

---
