"use strict";
// Dated NASA educational snapshot, retrieved 20 October 2026:
// https://spaceplace.nasa.gov/how-many-moons/en/
// Names below are selected examples; numbered markers represent the other moons.
const planets=[{name:"Mercury",color:"#8d8c88",moonCount:0,moons:[]},{name:"Venus",color:"#d8ac65",moonCount:0,moons:[]},{name:"Earth",color:"#3987c4",moonCount:1,moons:["Moon"]},{name:"Mars",color:"#b85135",moonCount:2,moons:["Phobos","Deimos"]},{name:"Jupiter",color:"#bf9b78",moonCount:115,moons:["Io","Europa","Ganymede","Callisto"]},{name:"Saturn",color:"#d8c17f",moonCount:293,moons:["Titan","Enceladus"]},{name:"Uranus",color:"#73b5b9",moonCount:29,moons:["Titania","Oberon"]},{name:"Neptune",color:"#365abb",moonCount:16,moons:["Triton"]}];
function moonEntries(planet){return Array.from({length:planet.moonCount},(_,i)=>planet.moons[i]||`${planet.name} moon marker ${i+1}`);}
function renderSolarSystem(doc=document){
 const section=doc.querySelector('.listPlanets');section.replaceChildren();
 for(const planet of planets){
  const group=doc.createElement('article'),circle=doc.createElement('div'),heading=doc.createElement('h2'),details=doc.createElement('details'),summary=doc.createElement('summary'),list=doc.createElement('div');
  circle.classList.add('planet');circle.style.backgroundColor=planet.color;circle.setAttribute('aria-label',planet.name);heading.textContent=planet.name;list.className='moons';
  summary.textContent=`${planet.moonCount} ${planet.moonCount===1?'moon':'moons'} — expand markers`;
  for(const name of moonEntries(planet)){const moon=doc.createElement('div');moon.className='moon';moon.title=name;moon.setAttribute('aria-label',name);list.appendChild(moon);}
  details.append(summary,list);
  const note=doc.createElement('p');note.textContent=planet.moonCount?'Dated NASA count; selected names, remaining numbered markers.':'No moons';
  group.append(circle,heading,details,note);section.appendChild(group);
 }
}
if(typeof module!=='undefined')module.exports={planets,moonEntries,renderSolarSystem};
if(typeof require!=='undefined'&&require.main===module)console.table(planets.map(p=>({planet:p.name,moons:p.moonCount,exampleNames:p.moons.join(', ')})));
