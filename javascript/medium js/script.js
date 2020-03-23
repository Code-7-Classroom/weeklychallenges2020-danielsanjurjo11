var userInput = prompt('what were you saying?')

if (userInput === userInput.toUpperCase()) {
    console.log(userInput);
}
else if (userInput === userInput.toLocaleLowerCase()){
    console.log("The user is whispering.")
}
else{
    console.log("the user is talking normally")
}