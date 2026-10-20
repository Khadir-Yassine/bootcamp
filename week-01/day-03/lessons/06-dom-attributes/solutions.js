"use strict";
function readAttributes(doc){const link=doc.getElementById('geeks');const href=link.getAttribute('href'),hreflang=link.getAttribute('hreflang'),rel=link.getAttribute('rel'),target=link.getAttribute('target'),type=link.getAttribute('type');return {href,hreflang,rel,target,type};}
function styleParagraph(doc){const paragraph=doc.getElementById('text');paragraph.style.fontSize='28px';paragraph.style.fontFamily='Georgia, serif';paragraph.style.color='#b34e2e';paragraph.style.fontWeight='bold';return paragraph;}
if(typeof module!=='undefined')module.exports={readAttributes,styleParagraph};
if(typeof document!=='undefined'){document.querySelector('#output').textContent=JSON.stringify(readAttributes(document),null,2);styleParagraph(document);}
