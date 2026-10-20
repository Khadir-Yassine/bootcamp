# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise**

Analyse the code below before executing it. What will be the output ? Why ?

```javascript
class A():
    def dothis(self):
        print("doing this in A")

class B(A):
    pass

class C():
    def dothis(self):
        print("doing this in C")

class D(B, C):
    pass

d_instance = D()
d_instance.dothis() 
```

The code defines four classes with the following inheritance structure:

- Class A defines a method `dothis()` that prints "doing this in A"

- Class B inherits from A but doesn't override any methods

- Class C defines its own method `dothis()` that prints "doing this in C"

- Class D inherits from both B and C (multiple inheritance)

When we create a D instance and call `dothis()`, Python needs to determine which `dothis()` method to use since it's defined in both inheritance chains (through B from A, and directly from C).
