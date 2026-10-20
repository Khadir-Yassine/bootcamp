"use strict";
function firstSwitch(a=2+2) {
 // 1. Evaluate 2 + 2, giving the number 4.
 // 2. Compare each case with strict equality: 3 fails, 4 matches.
 // 3. Produce "Exactly!"; break prevents fall-through into case 5.
 switch(a){case 3:return "Too small";case 4:return "Exactly!";case 5:return "Too large";default:return "I don't know such values";}
}
function groupedSwitch(a=2+2) {
 // 1. The expression evaluates to 4.
 // 2. Case 4 matches and produces "Right!", then exits.
 // 3. Cases 3 and 5 share the same pair of messages for those inputs.
 switch(a){case 4:return ["Right!"];case 3:case 5:return ["Wrong!","Why don't you take a math class?"];default:return ["The result is strange. Really."];}
}
module.exports={firstSwitch,groupedSwitch};
if(require.main===module){console.log(firstSwitch());for(const line of groupedSwitch())console.log(line);}
