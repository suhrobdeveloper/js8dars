let word = prompt("son kiriting");
word=String(word)
let newword = "";
for (let i = word.length - 1; i >= 0; i--) {
  newword += word[i];
}
newword=Number(newword)
console.log(newword);
