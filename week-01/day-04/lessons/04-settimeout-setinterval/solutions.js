"use strict";
function scheduleBanner(doc,clock=globalThis){const banner=doc.querySelector('#sale-banner');banner.hidden=true;return clock.setTimeout(()=>{banner.hidden=false;},5000);}
if(typeof module!=='undefined')module.exports={scheduleBanner};if(typeof document!=='undefined')scheduleBanner(document);
