"use strict";
function frameWords(input){if(input===null)return '';const words=input.split(',').map(word=>word.trim()).filter(Boolean);if(words.length===0)return '';let width=0;for(const word of words)width=Math.max(width,word.length);const border='*'.repeat(width+4),lines=[border];for(const word of words)lines.push(`* ${word.padEnd(width,' ')} *`);lines.push(border);return lines.join('\n');}
if(typeof module!=='undefined')module.exports={frameWords};
if(typeof require!=='undefined'&&require.main===module)console.log(frameWords(process.argv.slice(2).join(' ')||'Hello, World, in, a, frame'));
if(typeof window!=='undefined'){const framed=frameWords(window.prompt('Enter words separated by commas:'));if(framed)console.log(framed);}
