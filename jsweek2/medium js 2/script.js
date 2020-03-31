var input = parseInt(prompt("Enter a number 1-12"));

var month = ['January', 'Feburary', 'March', 'April', 'May', 'June',];

if(input < 1 || input > 12) {
    alert('invalid number');
} else{
    console.log(month[input -1]);
}