const prompt = require('prompt-sync')();
const number = prompt("Enter Number");
var result = "";
switch (Number(number)) {
    case 1:
        result = "unit";
        break;
    case 10:
        result = "tens";
        break;
    case 100:
        result = "hundreds";
        break;
    case 1000:
        result = "thousands";
        break;
    case 10000:
        result = "ten thousands";
        break;
    case 100000:
        result = "hundreds of thousands";
        break;
    case 1000000:
        result = "millions";
        break;
    case 10000000:
        result = "tens of millions";
        break;
    case 100000000:
        result = "hundreds of millions";
        break;
}
console.log(result);