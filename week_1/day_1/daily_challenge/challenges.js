// ====== Daily Challenge 1
// 1
const sentence = "The movie is not that bad, I like it";
// 2
const wordNot = sentence.indexOf("not");
// 3
const wordBad = sentence.indexOf("bad");
// 4
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const result =
    sentence.slice(0, wordNot) +
    "good" +
    sentence.slice(wordBad + 3);
  console.log(result);
}

// 5
else {
  console.log(sentence);
}

// ====== Daily Challenge 2
let line = "";

for (let i = 1; i <= 6; i++) {
  line += "* ";
  console.log(line.trim());
}
    
// ====== Daily Challenge 3
