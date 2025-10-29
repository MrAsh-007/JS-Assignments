// Chapter#12-13


// Q#1
// Answer Code
document.writeln("<br><b>Q#1</b>");
document.writeln("<br>");

let character = prompt("Write Anything so you can get its ASCII code");

if(character.charCodeAt(0)  >= 65 && character.charCodeAt(0) <= 90){
    document.writeln("It is a Capital Alphabet");
}else if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 123) {
    document.writeln("It is a Small Alphabet");
}



document.writeln("<br>");



// Q#2
// Answer Code
document.writeln("<br><b>Q#2</b>");
document.writeln("<br>");

let firstInteger = +prompt("Write First Integer");
let secondInteger = +prompt("Write Second Integer");

if(firstInteger > secondInteger){
    document.writeln("<br>","<b>",firstInteger,"</b>"," is Larger than ",secondInteger);
}else if(firstInteger < secondInteger){
    document.writeln("<br>","<b>",secondInteger,"</b>"," is Larger than ",firstInteger);
}else if(firstInteger == secondInteger){
    document.writeln("<br>Both Integers are equal ","<b>",firstInteger,"</b>","=","<b>",secondInteger,"</b>");
}



document.writeln("<br>");




// Q#4
// Answer Code
document.writeln("<br><b>Q#4</b>");
document.writeln("<br>");


let char = prompt("Enter a single alphabet to check whether it is a vowel or not");

if(char == "A" || char == "a" || char == "E" || char == "e" || char == "I" || char == "i" || char == "O" || char == "o" || char == "U" || char == "u"){
    document.writeln("<br>True");
}else {
    document.writeln("<br>False");
}



document.writeln("<br>");



// Q#5
// Answer Code
document.writeln("<br><b>Q#5</b>");
document.writeln("<br>");

let storedPassword = "Hasan_Ashraf";
let checkPassword = prompt("Enter you Password");

if(checkPassword === storedPassword){
    document.writeln("<br>You Password is Correct!");
}else if(checkPassword == ""){
    document.writeln("<br>Please Enter Your Password");
}else{
    document.writeln("<br>Incorrect Password");
}


document.writeln("<br>");


// Q#6
// Answer Code
document.writeln("<br><b>Q#6</b>");
document.writeln("<br>");

var greeting;
var hour =13;

if(hour < 18){
    document.writeln(greeting = "Good Day");
}else{
    document.writeln(greeting = "Good Evening");
}


document.writeln("<br>");




// Q#7
// Answer Code
document.writeln("<br><b>Q#7</b>");
document.writeln("<br>");


let time = prompt("Enter the current time");
if (time >=0 && time < 1200){
  document.writeln("Good Morning!");
}
if (time >=1200 && time < 1700){
  document.writeln("Good afternoon!");
}
if (time >=1700 && time < 2100){
  document.writeln("Good Evening!");
}
if (time >=2100 && time < 2400){
  document.writeln("Good night!");
}

document.writeln("<br>");