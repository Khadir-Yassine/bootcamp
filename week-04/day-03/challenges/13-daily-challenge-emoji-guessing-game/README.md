# Daily Challenge: Emoji Guessing Game

Course source: [Geeks Institute](https://www.geeks.institute/).
## **What you will learn:**

- Use Express to build an API

- Use Node.js modules

---

**Instructions**

Create a fun emoji guessing game using an Express API.
The game will present players with a random emoji and a set of options. Players need to guess the correct name of the emoji from the given options.
The game will keep track of the player’s score and provide feedback on their guesses.

**Requirements:**

1. Set up an Express server to handle the game.

2. Create an array of emoji objects, each containing the emoji character and its corresponding name.

3. Generate a random emoji from the array and select a few incorrect options as distractors.

4. Using a form, present the player with the random emoji and multiple choice options (including the correct name).

5. Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.

6. Check if the guess is correct and update the player’s score.

7. Provide feedback to the player, indicating whether their guess was correct or not.

8. Continue presenting new emojis and options for the player to guess.

9. Keep track of the player’s total score.

10. Implement a leaderboard to show the top scores.

sample emojis

```javascript
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];
```

**Advanced Features (Optional):**

- Add a time limit for each guess.

- Implement user authentication to save and display personalized scores.

- Use emojis from a larger dataset or an external API.

- Implement difficulty levels that affect the number of options or time limit.

- Implement a “hint” feature that provides a clue about the emoji’s name.

---

## **More info**

| Duration (approx) | Difficulty |
| --- | --- |
| 1 hour | ⭐ |

---

## **Submit your Daily Challenge :**

Don’t forget to push to Github

## Worked answer

[Reference solution](solutions.md) — source code, explanation, and run instructions.
