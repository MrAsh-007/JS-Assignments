// Chapter#21-25



// Q#1
// Answer Code
document.writeln("<br><b>Q#1</b>");
document.writeln("<br>");


let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");



firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();



let fullName = `${firstName} ${lastName}`;



document.writeln(`<br>Assalam-U-Alykum Wa Rahmatullahi Wa Barakatuh! ${fullName}`);



document.writeln("<br>");




// Q#2
// Answer Code
document.writeln("<br><b>Q#2</b>");
document.writeln("<br>");


let favMobile = prompt("Enter Your Favourite Mobile Phone Model");

document.writeln(`<br>Your Favourite Mobile Phone is: ${favMobile}`);
document.writeln(`<br>Length of String: ${favMobile.length}`);



document.writeln("<br>");





// Q#3
// Answer Code
document.writeln("<br><b>Q#3</b>");
document.writeln("<br>");

let string = "Pakistani";

document.writeln(`<br>String: ${string}`);
document.writeln(`<br>Index of 'n' is: ${string.indexOf(`n`)}`);




document.writeln("<br>");







// Q#4
// Answer Code
document.writeln("<br><b>Q#4</b>");
document.writeln("<br>");

let string2 = "Hello World";

document.writeln(`<br>String: ${string2}`);
document.writeln(`<br>Last Index of 'l' is: ${string2.lastIndexOf(`l`)}`);




document.writeln("<br>");





// Q#5
// Answer Code
document.writeln("<br><b>Q#5</b>");
document.writeln("<br>");


string = "Pakistani";

document.writeln(`<br>String: ${string}`);
document.writeln(`<br>Character at Index 3: ${string.charAt(3)}`);



document.writeln("<br>");






// Q#6
// Answer Code
document.writeln("<br><b>Q#6</b>");
document.writeln("<br>");

firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");


firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();



fullName = firstName.concat(" ",lastName);



document.writeln(`<br>Assalam-U-Alykum Wa Rahmatullahi Wa Barakatuh! ${fullName}`);




document.writeln("<br>");






// Q#7
// Answer Code
document.writeln("<br><b>Q#7</b>");
document.writeln("<br>");


let city = "Hyderabad";

document.writeln(`<br>City: ${city}`);

city = city.replace("Hyder","Islam");

document.writeln(`<br>After Replacement: ${city}`);


document.writeln("<br>");







// Q#8
// Answer Code
document.writeln("<br><b>Q#8</b>");
document.writeln("<br>");

let message = "Ali and Sami are best friends. They play cricket and football together.";

document.writeln(`<br>Meesage: ${message}`);

message = message.replace(/and/g, "&");

document.writeln(`<br>After Replacement: ${message}`);


document.writeln("<br>");





// Q#9
// Answer Code
document.writeln("<br><b>Q#9</b>");
document.writeln("<br>");


let value = "472";

document.writeln(`<br>Value: ${value}`);
document.writeln(`<br>Type: ${typeof value}`);


document.writeln("<br>");


value = Number(value);

document.writeln(`<br>Value: ${value}`);
document.writeln(`<br>Type: ${typeof value}`);




document.writeln("<br>");






// Q#10
// Answer Code
document.writeln("<br><b>Q#10</b>");
document.writeln("<br>");

let userInput = prompt("Enter anything to convert it to UPPERCASE");
document.writeln(`<br>User Input: ${userInput}`);

document.writeln(`<br>Upper Case: ${userInput.toUpperCase()}`);



document.writeln("<br>");






// Q#11
// Answer Code
document.writeln("<br><b>Q#11</b>");
document.writeln("<br>");
