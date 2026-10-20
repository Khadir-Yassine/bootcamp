# Daily challenge: Car Inventory

Course source: [Geeks Institute](https://www.geeks.institute/).
### **What You will learn :**

- Use advanced array methods

---

### **Instructions**

**Part I**

1. Create a function `getCarHonda(carInventory)` that takes a single parameter. `carInventory`‘s value is an array which is an inventory of cars (see the array of objects below)

2. The function should
  
  1. loop through the array of object and return the **first** car with the name “Honda”.
  2. then, return a string in the format `This is a {car_make} {car_model} from {car_year}`.
**Hint** : Find an array method that returns the value of the first element in an array that pass a test.

3. Use the cars inventory below:
  
  ```javascript
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
```

**Part II**

1. Create a function `sortCarInventoryByYear(carInventory)` that takes a single parameter. `carInventory`‘s value is an array which is an inventory of cars (see the array of objects below)

2. the function should return an inventory that is sorted by `car_year`, ascending.
**Hint** : Check out [this tutorial on the sort method](https://www.javascripttutorial.net/javascript-array-sort/)

3. Use the cars inventory below:
  
  ```javascript
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
```

4. The output should be
  
  ```javascript
[
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
];
```

---

## **More info**

| Duration (approx) | Difficulty |
| --- | --- |
| > 30 min | ⭐⭐ |

## Worked solutions

[English explanations and runnable implementation](solutions.md).
