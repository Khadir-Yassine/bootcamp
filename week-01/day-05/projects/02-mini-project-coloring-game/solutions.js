"use strict";
const COLORS=['#1c3738','#346751','#54a17b','#a9c47f','#e9c46a','#f4a261','#e76f51','#b84864','#a777b8','#6674ac','#4399b1','#ffffff'];
function createPainting(width=32,height=24){
 if(!Number.isInteger(width)||!Number.isInteger(height)||width<1||height<1)throw new RangeError('Positive integer dimensions required.');
 const pixels=Array(width*height).fill('#ffffff');
 return {width,height,pixels,paint(index,color){if(!Number.isInteger(index)||index<0||index>=pixels.length)throw new RangeError('Invalid cell.');if(!COLORS.includes(color))throw new RangeError('Choose a palette color.');pixels[index]=color;},clear(){pixels.fill('#ffffff');}};
}
function setup(doc){
 const painting=createPainting(),grid=doc.querySelector('#grid'),palette=doc.querySelector('#palette'),status=doc.querySelector('#status');let color=COLORS[0],drawing=false;
 for(const value of COLORS){const button=doc.createElement('button');button.className='swatch';button.style.background=value;button.setAttribute('aria-label',value==='#ffffff'?'Eraser':`Color ${value}`);button.setAttribute('aria-pressed',String(value===color));button.addEventListener('click',()=>{color=value;palette.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));status.textContent=value==='#ffffff'?'Eraser selected':`Selected ${value}`;});palette.append(button);}
 const cells=painting.pixels.map((_,i)=>{const cell=doc.createElement('button');cell.dataset.index=i;cell.setAttribute('aria-label',`Row ${Math.floor(i/painting.width)+1}, column ${i%painting.width+1}, white`);cell.addEventListener('click',()=>paint(cell));grid.append(cell);return cell;});
 function paint(cell){if(!cell||!grid.contains(cell)||cell.dataset.index===undefined)return;const i=Number(cell.dataset.index);painting.paint(i,color);cell.style.background=color;cell.setAttribute('aria-label',`Row ${Math.floor(i/painting.width)+1}, column ${i%painting.width+1}, ${color}`);}
 grid.addEventListener('pointerdown',e=>{if(e.button!==0)return;drawing=true;paint(e.target);e.preventDefault();});
 grid.addEventListener('pointermove',e=>{if(drawing)paint(doc.elementFromPoint(e.clientX,e.clientY));});
 doc.addEventListener('pointerup',()=>drawing=false);doc.addEventListener('pointercancel',()=>drawing=false);window.addEventListener('blur',()=>drawing=false);
 doc.querySelector('#clear').addEventListener('click',()=>{painting.clear();cells.forEach((cell,i)=>{cell.style.background='#ffffff';cell.setAttribute('aria-label',`Row ${Math.floor(i/32)+1}, column ${i%32+1}, white`);});status.textContent='Canvas cleared';});
}
if(typeof module!=='undefined')module.exports={COLORS,createPainting};
if(typeof document!=='undefined')setup(document);
