let red = document.getElementsByClassName(".btn1")
let blue = document.getElementsByClassName(".btn2")

function changecolor(color){
    if (color === 'red'){
        document.body.style.backgroundColor="red"
    } else if (color === 'blue'){
        document.body.style.backgroundColor="blue"
    }
}