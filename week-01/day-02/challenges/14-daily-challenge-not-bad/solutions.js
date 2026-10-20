"use strict";
function improveSentence(sentence) {
  const wordNot = sentence.indexOf("not");
  const wordBad = sentence.indexOf("bad");
  if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot)
    return sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + "bad".length);
  return sentence;
}
module.exports = { improveSentence };
if (require.main === module) {
  const sentence = "The movie is not that bad, I like it";
  console.log(improveSentence(sentence));
}
