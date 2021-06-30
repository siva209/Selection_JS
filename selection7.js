const prompt = require('prompt-sync')();
let  num = prompt(" Enter a number : ");
var result = "";
if (num == 1) {
    result = "unit";
}
else if (num == 10) {
    result = "tens";
}
else if (num == 100) {
    result = "hundreds";
}
else if (num == 1000) {
    result = "thousands";
}
else if (num == 10000) {
    result = "ten thousands";
}
else if (num == 100000) {
    result = "hundreds of thousands";
}
else if (num == 1000000) {
    result = "millions";
}
else if (num == 10000000) {
    result = "tens of millions";
}
else if (num == 100000000) {
    result = "hundreds of millions";
}
console.log(result);