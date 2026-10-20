# Tic-Tac-Toe — Worked Solution

[Original instructions](README.md)

## Run

From this directory, run:

```sh
python tic_tac_toe.py
```

Python 3.10 or newer; standard library only.

## Rules and structure

Two people alternate at the terminal. X starts. The displayed 1–9 labels identify empty cells; enter one label to play. Invalid text, out-of-range values and occupied cells are rejected without consuming a turn. After a legal move the game checks all eight winning lines, then either switches players or declares a tie after nine moves. Ctrl+C or EOF cancels cleanly.

`display_board` only renders; `player_input` validates; `check_win` checks rows, columns and diagonals; `play` coordinates the turns. There is no computer opponent in this assignment. The automated checks cover all eight winning lines, a complete tie, a scripted X win with invalid/repeated inputs, and cancellation.
