// prompt asks for first number
var Number1 = prompt("Enter a Number");
// prompt asks for a opertaion
var Operation = prompt("Enter an operation");
//prompt asks for second number
var Number2 = prompt("Enter another Number");

// add's and solves 
switch(Operation.tostring()){
    case '+':
        console.log(Number1 + " + " + Number2 + " = " + (parseInt(Number1) + parseInt(Number2)));
        break;
}

// subtract and solves 
switch(Operation.tostring()){
    case '-':
        console.log(Number1 + " - " + Number2 + " = " + (parseInt(Number1) + parseInt(Number2)));
        break;
}
// multiply and solve
switch(Operation.tostring()){
    case '-':
        console.log(Number1 + " * " + Number2 + " = " + (parseInt(Number1) + parseInt(Number2)));
        break;
}
// divides and solves
switch(Operation.tostring()){
    case '-':
        console.log(Number1 + " / " + Number2 + " = " + (parseInt(Number1) + parseInt(Number2)));
        break;
}