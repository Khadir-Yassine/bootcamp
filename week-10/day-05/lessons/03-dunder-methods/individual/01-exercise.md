# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise**

Analyse the code below before executing it. What will be the output ?

```javascript
class PrintList():

    def __init__(self, my_list):
        self.my_list = my_list

    def __repr__(self):
        return str(self.my_list)

print_list_instance = PrintList(["a", "b", "c"])
print(print_list_instance.__repr__())
```

## Worked solution

[English explanation and runnable source](../solutions.md#exercise-1).
