# JavaScript Quiz — Explained Answers

[Original 28 review questions](README.md)

These explanations review the archived questions. They do not submit a platform quiz attempt. A few questions use imprecise wording; those cases are identified below.

| # | Answer | Explanation |
| --- | --- | --- |
| 1 | Block scope | `let` and `const` are scoped to the enclosing block, which can also be a global or function body. The offered “Local scope” is the closest choice for a declaration in a block; none of the choices precisely states the rule. |
| 2 | `if (condition1 && condition2) { ... } else { ... }` | Both conditions must be truthy to take the first branch. |
| 3 | `==` can coerce types; `===` does not | For example, `5 == '5'` is true and `5 === '5'` is false. |
| 4 | `10` | The inner `let x = 5` shadows the outer binding only inside its block. |
| 5 | Select between multiple matching values | `switch` compares the expression to case values using strict equality. It can make multiple value branches clearer than repeated `if` statements. |
| 6 | `while (count < 5) { ... }` | The body repeats while the condition is truthy; the body must update state if the loop is to finish. |
| 7 | Supply a value for an omitted or `undefined` argument | An explicit `null` does not activate a default parameter. |
| 8 | Exit the loop immediately | `break` exits the nearest enclosing loop, or a switch. |
| 9 | Determine the type category of a value | `typeof` returns a string such as `"number"` or `"undefined"`; it does not distinguish arrays from other objects. |
| 10 | Strict inequality | `!==` is the inverse of strict equality; it does not coerce operands. |
| 11 | `Hello, Bob!` | The function concatenates or interpolates its supplied name in the greeting. |
| 12 | Skip the rest of the current iteration | `continue` proceeds to the next iteration rather than exiting the entire loop. |
| 13 | `array[0]` | Array indexing starts at zero. |
| 14 | `push()` | It appends items and returns the new length, mutating the array. |
| 15 | `includes()` | It returns a boolean indicating whether an array contains the value. |
| 16 | Both `person.age` and `person['age']` | Dot notation uses a literal property name; bracket notation also accepts computed names. |
| 17 | `.length` | A JavaScript string's length counts UTF-16 code units, which can differ from visible characters. |
| 18 | `"53"` | With a string operand, `+` performs concatenation after conversion. |
| 19 | `15` | The loop adds `1 + 2 + 3 + 4 + 5`. |
| 20 | `do...while` | Its condition is evaluated after the body, so the body runs at least once. |
| 21 | `addTax(50)` returns `52.5` | The function returns the **tax-inclusive total**, not the tax amount alone. A 5% tax on 50 is `2.5`. |
| 22 | A `let` binding can be reassigned; a `const` binding cannot | Both are block scoped. A constant object's properties can still change. |
| 23 | `splice()` | It inserts, removes or replaces array elements in place and returns removed elements. |
| 24 | `-1` | `indexOf()` returns this sentinel if no matching item exists. |
| 25 | `undefined` is an absent/unassigned value; `null` commonly marks intentional absence | `null` is a value explicitly assigned by code; `typeof null` being `"object"` is a historical quirk. |
| 26 | Global `isNaN()` checks whether numeric conversion produces NaN | It coerces first: `isNaN('hello')` is true, but `isNaN('')` is false. Use `Number.isNaN()` to test for an actual NaN number without coercion. |
| 27 | `join()` | It combines array elements into a string with the chosen separator. |
| 28 | `"object"` | Arrays are objects. Use `Array.isArray(value)` for an array check. |

To verify the numeric and language examples, paste them into the browser console or Node.js. Worked programming assignments are listed in the [week solution index](../../../SOLUTIONS.md).
