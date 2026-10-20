# Exercise

Course source: [Geeks Institute](https://www.geeks.institute/).
Shared data, context and explanations: [complete lesson](../README.md).

**Exercise**

Given a list of numbers, write a function that returns the sum of every number. BUT you can have a malicious string inside the list.

```javascript
my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
```

---

**The else statement**

```javascript
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:    # TRY THIS
        userage    = int(userage)
    except: # IF YOU GOT AN ERROR
        print("Wrong age!")
    else:   # ELSE
        valid_flag = True

print("Next year, your age will be",userage+1)
>>How old are you?3
Next year, your age will be 4
```

---

**The finally statement**

```javascript
valid_flag = False
while not valid_flag:
    userage = input("How old are you?")
    try:    # TRY THIS
        userage    = int(userage)
    except: # IF YOU GOT AN ERROR
        print("Wrong age!")
    else:   # ELSE
        valid_flag = True
    finally:
        print('There may or may not have been an exception.')

print("Next year, your age will be",userage+1)
```

---

**Raising an exception**

The raise statement allows the programmer to force a specified exception to occur. If you want to throw an error when a specific condition occurs using raise, you could go about it like this:

```javascript
x = 10
if x > 5:
    raise Exception(f"x should not exceed 5. The value of x was {x}")
#The error that will appear is your own custom error
#Traceback (most recent call last):
  #File "pyblog/app.py", line 52, in <module>
    #raise Exception(f"x should not exceed 5. The value of x was {x}")
#Exception: x should not exceed 5. The value of x was 10'

#Process finished with exit code 1
```

The program, at this point, comes to a halt and prints our custom exception to the screen, offering clues about what went wrong.

If we would like to continue our program while printing an error we can use an Assertion error.

`Assertion errors` are another way to raise an exception but are helpful if we are looking for a specific error while intending to keep our program in motion.

```javascript
z = 9
try:
    assert 1 == z
except AssertionError:
    print("Error: Those are not equals")
```
