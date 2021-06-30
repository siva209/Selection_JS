const prompt = require('prompt-sync')();
let  day = prompt(" Enter a day  ");
let monthInWords= prompt(" Enter a month in words ");

var month = 0;
if (monthInWords == 'June') {
    month = 5;
}
else if (monthInWords == 'May') {
    month = 4;
}
else if (monthInWords == 'April') {
    month = 3;
}
else if (monthInWords == 'March') {
    month = 2;
}
var start = new Date(2020, 02, 20);
var end = new Date(2020, 05, 20);
var myDate = new Date(2020, month, day);
var isPresent = false;
if (myDate.getTime() <= end.getTime() && myDate.getTime() >= start.getTime()) {
    isPresent = true;
}
//Returns true if the date is present
console.log(isPresent);