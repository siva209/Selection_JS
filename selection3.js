const prompt = require('prompt-sync')();
let  year = prompt(" Enter any year  ");
var isLeapYear = false;
if (year % 4 == 0 && year % 100 != 0) {
    isLeapYear = true;
}
else if (year % 100 == 0) {
    if (year % 400 == 0) {
        isLeapYear = true;
    }
}
console.log(isLeapYear);