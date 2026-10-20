# Switch Statement Tracing: Worked Exercises

[Lesson](README.md) · [JavaScript](solutions.js)

## Run

```sh
node solutions.js
```


## First Exercise

The original program alerts **Exactly!** because `2 + 2` is the number 4. The matching `break` ends the switch. A string `"4"` does not match numeric case `4` because case matching uses strict equality.

## Second Exercise

The original program alerts **Right!** for the same calculation. The shared cases 3 and 5 would produce both “Wrong!” and the math-class message, but they are not reached for 4. The source comments trace each step; the runnable version returns the messages so the branches can be tested without a browser alert.
