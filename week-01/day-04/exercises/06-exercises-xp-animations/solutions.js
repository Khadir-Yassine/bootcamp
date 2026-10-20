"use strict";
function setupTimer(doc,clock=globalThis,notify=()=>{}){
 const container=doc.querySelector('#timer-container');let interval=null;
 function stop(){if(interval!==null){clock.clearInterval(interval);interval=null;}doc.querySelector('#timer-status').textContent='Interval stopped.';}
 function append(){if(container.children.length>=5){stop();return;}const p=doc.createElement('p');p.textContent='Hello World';container.appendChild(p);if(container.children.length>=5)stop();}
 const alertTimeout=clock.setTimeout(()=>notify('Hello World'),2000);
 const paragraphTimeout=clock.setTimeout(append,2000);
 interval=clock.setInterval(append,2000);doc.querySelector('#clear').addEventListener('click',stop);
 return {stop,append,alertTimeout,paragraphTimeout};
}
function nextPosition(position,limit){return Math.min(position+1,limit);}
function setupMotion(doc,clock=globalThis){let interval=null;const box=doc.querySelector('#animate'),container=doc.querySelector('#container');
 function myMove(){if(interval!==null)clock.clearInterval(interval);let position=0;box.style.left='0px';const limit=Math.max(0,container.clientWidth-box.offsetWidth);if(limit===0)return;interval=clock.setInterval(()=>{position=nextPosition(position,limit);box.style.left=`${position}px`;if(position>=limit){clock.clearInterval(interval);interval=null;}},1);}
 doc.querySelector('#move').addEventListener('click',myMove);return myMove;
}
if(typeof module!=='undefined')module.exports={setupTimer,nextPosition,setupMotion};
if(typeof document!=='undefined'){setupTimer(document,globalThis,message=>window.alert(message));setupMotion(document);}
