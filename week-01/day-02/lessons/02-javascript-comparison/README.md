# Javascript comparison

Course source: [Geeks Institute](https://www.geeks.institute/).
## **Javascript comparison**

---

### **Comparison**

| Symbol | Meaning |
| --- | --- |
| = | is assignment |
| == | compares two values for equality and performs type coercion if the values being compared are of different types |
| === | compares both the value and the type of the two operands. It’s a strict equality operator, that does not perform type coercion |

| Symbol | Meaning |
| --- | --- |
| != | Not equal |
| > | Greater than |
| >= | Greater than or equal to |
| < | Less than |
| <= | Less than or equal to |
| \|\| | Or |
| && | And |
| ! | Not (if x is true, then x! is false) |

---

**Some more help on comparisons **[**here**](https://www.w3schools.com/js/js_comparisons.asp)

---

### **Some examples**

When you put an exclamation mark before a true variable, it will change it to false.

```javascript
let x = true
console.log(x)
>> true
console.log(!x)
>> false
```

---

When you put an exclamation mark before a false variable, it will change it to true.

```javascript
let y = false
console.log(y)
>> false
console.log(!y)
>> true
```

**The exclamation mark (❗️) means *not***

```javascript
let test = true
console.log(test)
>> true
console.log(!test) // means not test // means not true // means false
```

---

### **Working with numbers**

| Operator | Example | Same As |
| --- | --- | --- |
| ++ | x++ | x = x + 1 |
| -- | x-- | x = x - 1 |
| += | x += y | x = x + y |
| -= | x -= y | x = x - y |
| *= | x *= y | x = x * y |
| /= | x /= y | x = x / y |
| %= | x %= y | x = x % y |
