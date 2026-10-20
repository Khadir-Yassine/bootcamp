"use strict";
function inspectTree(doc){
 const divById=doc.getElementById('container'),divBySelector=doc.querySelector('#container');
 const listsByClass=doc.getElementsByClassName('list'),listsBySelector=doc.querySelectorAll('ul.list');
 const childrenUsingChildren=[];for(const list of listsByClass)for(const item of list.children){childrenUsingChildren.push(item.textContent);console.log(item);}
 const childrenUsingSelectors=[];for(const list of listsBySelector)for(const item of list.querySelectorAll('li')){childrenUsingSelectors.push(item.textContent);console.log(item);}
 const firstUsingProperty=Array.from(listsByClass,list=>list.firstElementChild.textContent);
 const firstUsingSelector=Array.from(doc.querySelectorAll('ul.list > li:first-child'),item=>item.textContent);
 return {sameDiv:divById===divBySelector,childrenUsingChildren,childrenUsingSelectors,firstUsingProperty,firstUsingSelector};
}
if(typeof module!=='undefined')module.exports={inspectTree};
if(typeof document!=='undefined')document.querySelector('#output').textContent=JSON.stringify(inspectTree(document),null,2);
