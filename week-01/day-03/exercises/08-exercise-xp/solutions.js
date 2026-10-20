"use strict";
function displayNumbersDivisible(divisor=23,log=console.log){
 if(!Number.isFinite(divisor)||divisor===0)throw new RangeError("The divisor must be finite and nonzero.");
 const numbers=[];let sum=0;
 for(let number=0;number<=500;number++){if(number%divisor===0){numbers.push(number);sum+=number;log(number);}}
 log(`Sum: ${sum}`);return {numbers,sum};
}
function makeShop(){
 const stock={banana:6,apple:0,pear:12,orange:32,blueberry:1};
 const prices={banana:4,apple:2,pear:1,orange:1.5,blueberry:10};
 const shoppingList=["banana","orange","apple"];
 function myBill(){let total=0;for(const item of shoppingList){if(Object.hasOwn(stock,item)&&stock[item]>0){total+=prices[item];stock[item]--;}}return total;}
 return {stock,prices,shoppingList,myBill};
}
const shop=makeShop();const stock=shop.stock,prices=shop.prices,shoppingList=shop.shoppingList;
function myBill(){return shop.myBill();}
function changeEnough(itemPrice,amountOfChange){
 if(!Number.isFinite(itemPrice)||itemPrice<0||amountOfChange.length!==4||amountOfChange.some(n=>!Number.isInteger(n)||n<0))throw new RangeError("Provide a nonnegative price and four nonnegative coin counts.");
 const cents=[25,10,5,1];let available=0;for(let i=0;i<4;i++)available+=cents[i]*amountOfChange[i];
 return available>=Math.round(itemPrice*100);
}
function askCount(message,ask){while(true){const raw=ask(message);if(raw===null)return null;if(raw.trim()!==""&&Number.isInteger(Number(raw))&&Number(raw)>=0)return Number(raw);}}
function hotelCost(nights){return nights*140;}
function planeRideCost(destination){const city=destination.trim().toLowerCase();return city==="london"?183:city==="paris"?220:300;}
function rentalCarCost(days){return days*40*(days>10?0.95:1);}
function totalVacationCost(ask,log=console.log){
 const nights=askCount("How many hotel nights?",ask);if(nights===null)return null;
 let destination;do{destination=ask("Your destination:");if(destination===null)return null;}while(!destination.trim());
 const days=askCount("How many car rental days?",ask);if(days===null)return null;
 const hotel=hotelCost(nights),plane=planeRideCost(destination),car=rentalCarCost(days),total=hotel+plane+car;
 log(`The car cost: $${car.toFixed(2)}, the hotel cost: $${hotel.toFixed(2)}, the plane tickets cost: $${plane.toFixed(2)}.`);
 log(`Total: $${total.toFixed(2)}`);return {hotel,plane,car,total};
}
// Basic prompt-based versions, before the bonus moves prompts into totalVacationCost.
function hotelCostPrompt(ask){const nights=askCount("How many hotel nights?",ask);return nights===null?null:hotelCost(nights);}
function planeRideCostPrompt(ask){let city;do{city=ask("Your destination:");if(city===null)return null;}while(!city.trim());return planeRideCost(city);}
function rentalCarCostPrompt(ask){const days=askCount("How many car rental days?",ask);return days===null?null:rentalCarCost(days);}

function updateUsers(doc,notify=()=>{}){
 const container=doc.getElementById("container");console.log(container);
 const lists=doc.querySelectorAll("ul.list");lists[0].children[1].textContent="Richard";
 lists[1].children[1].remove();
 for(const list of lists){list.firstElementChild.textContent="Yassine";list.classList.add("student_list");}
 lists[0].classList.add("university","attendance");
 container.style.backgroundColor="lightblue";container.style.padding="16px";
 for(const item of doc.querySelectorAll("ul.list li")){if(item.textContent==="Dan")item.hidden=true;if(item.textContent==="Richard")item.style.border="1px solid #202020";}
 doc.body.style.fontSize="18px";
 if(container.style.backgroundColor==="lightblue")notify(`Hello ${Array.from(lists[0].children).map(li=>li.textContent).join(" and ")}`);
}
function changeNavbar(doc){
 const navigation=doc.getElementById("navBar");navigation.setAttribute("id","socialNetworkNavigation");
 const list=navigation.querySelector("ul"),item=doc.createElement("li"),text=doc.createTextNode("Logout");
 item.appendChild(text);list.appendChild(item);
 const first=list.firstElementChild.textContent,last=list.lastElementChild.textContent;
 console.log(first);console.log(last);return {first,last};
}
function cover(title,color){return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="140"><rect width="100" height="140" fill="${color}"/><text x="8" y="70" fill="white" font-size="10">${title}</text></svg>`);}
const allBooks=[{title:"Eloquent JavaScript",author:"Marijn Haverbeke",image:cover("Eloquent JS","#24534b"),alreadyRead:true},{title:"You Don't Know JS",author:"Kyle Simpson",image:cover("You Don't Know JS","#9b5534"),alreadyRead:false}];
function renderBooks(doc){const section=doc.querySelector(".listBooks");section.replaceChildren();for(const book of allBooks){const div=doc.createElement("div"),details=doc.createElement("p"),image=doc.createElement("img");details.textContent=`${book.title} written by ${book.author}.`;if(book.alreadyRead)details.style.color="red";image.src=book.image;image.width=100;image.alt=`${book.title} example cover`;div.append(details,image);section.appendChild(div);}}
const api={displayNumbersDivisible,makeShop,myBill,stock,prices,shoppingList,changeEnough,hotelCost,planeRideCost,rentalCarCost,totalVacationCost,hotelCostPrompt,planeRideCostPrompt,rentalCarCostPrompt,updateUsers,changeNavbar,allBooks,renderBooks};
if(typeof module!=="undefined")module.exports=api;
if(typeof require!=="undefined"&&require.main===module){displayNumbersDivisible();console.log("Bill:",myBill());console.log("Enough change:",changeEnough(4.25,[25,20,5,0]));const answers=["2","London","11"];totalVacationCost(()=>answers.shift());}
