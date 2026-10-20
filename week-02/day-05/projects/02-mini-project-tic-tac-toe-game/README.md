# Mini-Project - Tic Tac Toe Game

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What you will learn**

- Array and Object methods

- Array and Object destructuring

- Functions and arrow functions

- DOM tree

---

## **What you will create**

Unbeatable AI Tic Tac Toe Game with Advanced Javascript

In this project you will have to create an AI Tic Tac Toe Game like this (you can use your own css to style the project):

![tic tac toe](https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%204/Day5/Mini%20Projects/Mini%20Project%202%20(Tic%20Tac%20Toe)/FireShot%20Capture%20134%20-%20Tic%20Tac%20Toe%20-%20di-tic-tac-toe.surge.sh.png?raw=true)

---

### **Instructions**

This is a demo for you to see and play: [Tic Tac Toe Game](http://di-tic-tac-toe.surge.sh/)

The Tic-tac toe game will be played against the computer.

1. This should have two levels : easy and hard

2. At first it should be easy for the user to win. The computer on its turn, will choose randomly where to do its turn.

3. Then, for the hard level, the computer should will choose wisely where to do its turn, to block the player.

---

**Some Tips:**

**I. In your HTML file:**

- You can use tables or divs to create the boxes, make sure to add an `id` to each div.

- Create 2 buttons to choose between X and 0.

- Create another button at the bottom of the page, that will be displayed when the game ends. This button should call a function to restart the game.

---

**II. In your JS file:**

**Make sure to use the advanced javascript methods that you were taught this week**

1. Create 2 variables to hold the selected symbols : X or 0, after the user chooses, the computer will get the opposite symbol.

2. Create an array to keep track of whats in each box of the board.

3. After each turn you must check the outcomes.
**Hint**: You can use the `reduce` method to find all the boxes that contain either X or 0.
  
  1. If no one wins, the game should display “tie game”
  2. If someone won, the game should display the name of the winner.

4. Stop the game if the game has been won.

5. You can use the array provided below to check for winning combinations on the board.
  
  ```javascript
const winCombos = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [6, 4, 2]
]
```

---

## **Submit your Mini Project:**

Don’t forget to push to github

---

## **More info**

| Duration (approx) |
| --- |
| > 2H30 |

---

One Last Thing: **Good luck!**

---

## Worked solutions

[English explanations and runnable implementation](solutions.md).
