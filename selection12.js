const prompt = require('prompt-sync')();
 
const number = prompt('Enter number to convert');
console.log("1. feet to inches convertion");
console.log("2. inches to feet conversion");
console.log("3. feet to meter conversion");
console.log("4. meter to feet conversion");
const choice = prompt('Enter your choice');
switch(Number(choice)){
case 1:
	let inches = number * 12;
	console.log("feet in inches ="+inches);
	break;
case 2:
	let feet = number / 12;
	console.log("inches in feet="+feet);
	break;
case 3:
	let meter = number / 3.281;
	console.log("feet in meter="+meter);
	break;
case 4:
	let feet1 = number * 3.281;
	console.log("meter in feet ="+feet1);
	break;
default:
	console.log("Choose proper choice");
}