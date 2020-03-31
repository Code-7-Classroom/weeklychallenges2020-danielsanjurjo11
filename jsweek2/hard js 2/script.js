var tomHeight= 9;
var tomMass = 8;

var jerryHeight= 10;
var jerryMass = 45;

var tomBmi = tomMass / (tomHeight * tomHeight);
var jerryBmi = jerryMass / (jerryHeight * jerryHeight);

var higherBmi = tomBmi > jerryBmi;

console.log("Is Tom's BMI higher than Jerrys's ?");
console.log(higherBmi);