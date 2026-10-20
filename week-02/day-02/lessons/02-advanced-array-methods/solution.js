'use strict';
const newArr = [10, 20, 30, 40].map((value, index) => ({ value, index }));
const party = [{ desert: 'Chocolate Mousse', calories: 30 }, { desert: 'Apple Pie', calories: 15 }, { desert: 'Croissant', calories: 50 }, { desert: 'Strawberry Icecream', calories: 5 }];
const calories = party.reduce((sum, dessert) => sum + (dessert.desert === 'Apple Pie' ? 0 : dessert.calories), 0);
const prices = [12, 20, 18], newPriceArray = [...prices];
const alphabets = ['A', ...'BCD', 'E'];
console.log({ newArr, calories, newPriceArray, alphabets }); // 85; [12,20,18]; ['A','B','C','D','E'].
module.exports = { newArr, calories, prices, newPriceArray, alphabets };
