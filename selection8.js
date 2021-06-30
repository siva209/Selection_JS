const prompt = require('prompt-sync')();
let  num1 = prompt(" Enter a number : ");
let  num2 = prompt(" Enter a number : ");
let  num3 = prompt(" Enter a number : ");

var operation1 = num1 + (num2 * num3);
var operation2 = num3 + (num1 / num2);
var operation3 = (num1 % num2) + num3;
var operation4 = (num1 * num2) + num3;
var max = 0;
var min = operation1;
var opMax = 0;
var opMin = 0;
var nums = [operation1, operation2, operation3, operation4];
for (var i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
        max = nums[i];
        opMax = i;
    }
    if (min > nums[i]) {
        min = nums[i];
        opMin = i;
    }
}
console.log("Maximum is : " + max + " in Operation : " + opMax);
console.log("Minimum is : " + min + " in Operation : " + opMin);