# Rock, Paper, Scissors — Worked Solution

[Original instructions](README.md)

## Run

From this directory, run:

```sh
python rock-paper-scissors.py
```

Python 3.10 or newer; standard library only.

## Walkthrough

`game.py` owns one round. Invalid moves cause another prompt; trimmed input is case insensitive. The computer uses `random.choice`. A dictionary expresses the three winning pairs, and the result is always `win`, `loss` or `draw`.

`rock-paper-scissors.py` owns the session. The menu helper reads exactly one input and validates it **without looping**; the main loop handles repetition. Press `p` to create a new `Game`, `s` to show the session score, and `q` or `x` to exit. Scores start at zero, update once per finished round, and appear on exit. EOF and Ctrl+C also print the final summary. Scores are in memory for this run only.

Tests cover all nine move combinations, invalid input recovery, case normalization and a multi-round menu session.
