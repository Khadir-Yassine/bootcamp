# Python Quiz — Available Question Review

[Original archived quiz](README.md)

The archived page exposes question 1 of 20 only. The remaining 19 questions are unavailable in this archive, so their answers are not invented here.

**Which data type is immutable? → C: Tuple.** A tuple cannot have elements added, removed or replaced after construction. Lists, dictionaries and sets are mutable. A tuple can contain a mutable object, such as a list: the nested list can change even though the tuple's references cannot.

```python
value = (1, 2)
# value[0] = 3  # TypeError: tuple items cannot be assigned
nested = ([1],)
nested[0].append(2)
assert nested == ([1, 2],)
```

This is a study explanation, not a submitted platform attempt.
