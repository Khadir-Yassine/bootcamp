import {people} from './data.js';const average=people.length?people.reduce((sum,p)=>sum+p.age,0)/people.length:null;console.log(average);
