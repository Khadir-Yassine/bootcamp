# Basic Optimization and Clean Code Practices

Course source: [Geeks Institute](https://www.geeks.institute/).
Writing code that works is only half the job. Writing code that is *clean* is what makes you a professional.

- **Meaningful Naming:** Never use variables like `let x = true;` or `function doThing()`. Use `let isMachineBrewing = true;` and `function triggerTuyaFingerbot()`. Your code should read like an English sentence.

- **The DRY Principle (Don't Repeat Yourself):** If you find yourself copying and pasting the exact same block of code more than twice, stop. Turn it into a reusable component or a helper function.

- **Fail Gracefully:** Optimization means anticipating errors. If the robotic arm disconnects, your app shouldn't crash and show a blank white screen. It should catch the error and display a polite `<ErrorAlert>` component saying, "Connection lost. Please check the arm's power."
