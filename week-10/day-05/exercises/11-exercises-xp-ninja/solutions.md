# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Conway’s Game of Life

GameOfLife represents live coordinates in a set and counts each cell’s eight neighbors. Updates are simultaneous: live cells survive with 2/3 neighbors, and dead cells are born with exactly 3. The CLI displays every generation and supports **block**, **blinker**, and **glider** initial states. Fixed mode removes cells leaving the grid. `--expandable` uses sparse coordinates inside a maximum 10000×10000 coordinate boundary, avoiding allocation of an enormous dense grid. Rendering caps only its text viewport; simulation retains all live coordinates. Try `python solution.py --pattern blinker --generations 6` or add `--expandable`.

[Original exercise](individual/01-exercise-1-conway-s-game-of-life.md)

