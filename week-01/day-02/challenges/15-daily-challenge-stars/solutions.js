"use strict";
function singleLoop(rows = 6) {
  const lines = [];
  let line = "";
  for (let row = 0; row < rows; row++) {
    line += row === 0 ? "*" : " *";
    lines.push(line);
  }
  return lines.join("\n");
}
function nestedLoops(rows = 6) {
  const lines = [];
  for (let row = 1; row <= rows; row++) {
    let line = "";
    for (let column = 0; column < row; column++) line += column === 0 ? "*" : " *";
    lines.push(line);
  }
  return lines.join("\n");
}
module.exports = { singleLoop, nestedLoops };
if (require.main === module) { console.log(singleLoop()); console.log("\nNested-loop version:\n"+nestedLoops()); }
