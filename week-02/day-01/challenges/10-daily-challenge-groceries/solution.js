'use strict';
let client = 'John';
const groceries = { fruits: ['pear', 'apple', 'banana'], vegetables: ['tomatoes', 'cucumber', 'salad'], totalPrice: '20$', other: { paid: true, meansOfPayment: ['cash', 'creditCard'] } };
const displayGroceries = () => groceries.fruits.forEach(fruit => console.log(fruit));
const cloneGroceries = () => {
  const user = client;
  client = 'Betty'; // Primitive strings are copied: user stays John on the first call.
  const shopping = groceries; // Only the reference is copied, not the object.
  groceries.totalPrice = '35$';
  groceries.other.paid = false; // Nested mutation is visible through both aliases.
  console.log({ user, client, shopping });
  return { user, client, shopping, sameObject: shopping === groceries };
};
displayGroceries();
cloneGroceries();
module.exports = { displayGroceries, cloneGroceries, groceries };
