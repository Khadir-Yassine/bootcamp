# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise**

What is the difference between these 2 pieces of code ?

```javascript
class B:
    def __init__(self, *args, **kwargs):
        pass

class A(B):
    def __init__(self, *args, **kwargs):
        B.__init__(self, *args, **kwargs)
        pass
```

```javascript
class B:
    def __init__(self, *args, **kwargs):
        pass

class A(B):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        pass
```

The key difference between these two code snippets is how class A calls the `__init__` method of its parent class B.

## Worked solution

[English explanation and runnable source](../solutions.md#exercise-2).
