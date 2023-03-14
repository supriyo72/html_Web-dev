const fs = require("fs");
// const text = fs.readFileSync("dele.txt", "utf-8");
let text = fs.readFileSync("dele.txt", "utf-8");
text=text.replace("web-dev","youtube")


console.log("you know what supriyo is pursuing in ?");
console.log(text);

console.log("The modified version is:");
fs.writeFileSync("modify.txt",text);
