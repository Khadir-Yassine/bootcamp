# Exercises XP Ninja

Course source: [Geeks Institute](https://www.geeks.institute/).
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

### **Exercise 2 : Form Validation**

Create a Form Validation with React:

![image](https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day3/Exercise%20XP%20Ninja/ninja-form.png)

[**Here is the demo**](http://di-ninja-form.surge.sh/)

---

1. Create two components, `Form` and `Input`.

2. Create the corresponding inputs for: First Name, Last Name, Phone, and Email

3. Create the functionalities to validate each input :
  
  - check if they are empty
  - check for a valid phone and email input (You can use Regex for your functions)
***Don’t use HTML validation, create your own validation using Regex***
