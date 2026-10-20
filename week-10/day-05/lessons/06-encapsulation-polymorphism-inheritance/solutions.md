# Worked solutions

Run `python solution.py` from this folder. Source: [solution.py](solution.py). Python 3 and its standard library are sufficient. Interactive/demo options are explained below.

<a id="exercise-1"></a>

## 1. Multiple inheritance

The output is **doing this in A**. The method resolution order is D → B → A → C → object, so A.dothis is found before C.dothis.

[Original exercise](individual/01-exercise.md)

<a id="exercise-2"></a>

## 2. Fiction subclass

The sequence is **Woow this is an awesome book; Title: Asimov; 5£; False; I am very bored; True**. The original constructor call supplies Asimov in the title position, so the literal output is not Title: Foundation. super initializes the book fields, and the child adds genre, is_awesome and bored.

[Original exercise](individual/02-exercise.md)

