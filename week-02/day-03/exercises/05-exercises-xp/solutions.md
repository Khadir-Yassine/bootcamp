# Worked solutions

Source: [solution.js](solution.js). For the JavaScript examples, run `node solution.js` from this folder. No package installation is needed.

<a id="exercise-1"></a>

## 1. Location

The nested destructuring prints **I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)**.

[Original exercise](individual/01-exercise-1-location.md)

<a id="exercise-2"></a>

## 2. Display student info

Destructuring inside `displayStudentInfo` extracts first and last. The result is **Your full name is Elie Schoppik**.

[Original exercise](individual/02-exercise-2-display-student-info.md)

<a id="exercise-3"></a>

## 3. User and ID

Object.entries returns the requested key/ID pairs. Mapping each pair doubles the IDs to **36546, 185666, 180630**, without changing the source object.

[Original exercise](individual/03-exercise-3-user-id.md)

<a id="exercise-4"></a>

## 4. Person class

`typeof member` is **object**. Class instances are objects even though their constructor has a particular name.

[Original exercise](individual/04-exercise-4-person-class.md)

<a id="exercise-5"></a>

## 5. Dog class

**Option 2** correctly calls super(name) before using this. Options 1 and 4 access this before super and fail. Option 3 has no name parameter: it reads an undeclared identifier or an unrelated global, so it does not correctly initialize the requested name.

[Original exercise](individual/05-exercise-5-dog-class.md)

<a id="exercise-6"></a>

## 6. Identity and mammals

Both `[2] === [2]` and `{} === {}` are **false** because the objects differ by identity. The object alias example produces **4,4,5**. Animal stores name/type/color; Mammal extends it and supplies sound. farmerCow returns **Moooo I'm a cow, named Lily and I'm brown and white**.

[Original exercise](individual/06-exercise-6-challenges.md)

## Validation

From the week folder, run `node --test --test-isolation=none solutions.test.cjs`. The suite checks the assignment outputs and important edge cases. Browser-only rendering is covered separately in `browser.test.cjs`.
