





const img1 ="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80";
const img2 ="https://images.unsplash.com/photo-1526353536919-01971c26cfc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img3 ="https://images.unsplash.com/photo-1507246207829-732ed643ea0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img4 ="https://images.unsplash.com/photo-1516721951823-4f214c97eb4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const imgTag = document.getElementById("slide") 

const images = [img1, img2, img3, img4]

let i = 0

const slider = (isUp) => {
    i = isUp ? ++i : --i
    i > images.length -1 ? i = 0 : i 
    i < 0 ? i = images.length -1 : i 
    console.log('increment= ',i)
    imgTag.src = images[i]
} 

const start = () => imgTag.src = images[0]
























// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
 