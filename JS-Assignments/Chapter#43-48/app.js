// Chapter#43-48



// Q#1
// Answer Code



// JS is Inline






// Q#2
// Answer Code







// Q#3
// Answer Code

function mobileAlert(e){
    alert("Thanks for purchasing phone from us");
}
let heading2 = document.getElementById("heading2");
heading2.style.color = "skyblue";

let container = document.getElementById("imgContainer");
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.justifyContent = "space-around";

let images = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];

for(let i = 0; i < images.length; i++){
    images[i].style.border = "2px solid skyblue"
    images[i].style.cursor = "pointer"
}







// Q#4
// Answer Code
function imgConversion(e) {
    e.src = "Images/animatedpic.jpg";
    e.style.cursor = "pointer"
}