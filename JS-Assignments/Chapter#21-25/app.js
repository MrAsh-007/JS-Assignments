// Chapter#21-25



// // Q#1
// // Answer Code
// document.writeln("<br><b>Q#1</b>");
// document.writeln("<br>");


// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");



// firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();



// let fullName = `${firstName} ${lastName}`;



// document.writeln(`<br>Assalam-U-Alykum Wa Rahmatullahi Wa Barakatuh! ${fullName}`);



// document.writeln("<br>");




// // Q#2
// // Answer Code
// document.writeln("<br><b>Q#2</b>");
// document.writeln("<br>");


// let favMobile = prompt("Enter Your Favourite Mobile Phone Model");

// document.writeln(`<br>Your Favourite Mobile Phone is: ${favMobile}`);
// document.writeln(`<br>Length of String: ${favMobile.length}`);



// document.writeln("<br>");





// // Q#3
// // Answer Code
// document.writeln("<br><b>Q#3</b>");
// document.writeln("<br>");

// let string = "Pakistani";

// document.writeln(`<br>String: ${string}`);
// document.writeln(`<br>Index of 'n' is: ${string.indexOf(`n`)}`);




// document.writeln("<br>");







// // Q#4
// // Answer Code
// document.writeln("<br><b>Q#4</b>");
// document.writeln("<br>");

// let string2 = "Hello World";

// document.writeln(`<br>String: ${string2}`);
// document.writeln(`<br>Last Index of 'l' is: ${string2.lastIndexOf(`l`)}`);




// document.writeln("<br>");





// // Q#5
// // Answer Code
// document.writeln("<br><b>Q#5</b>");
// document.writeln("<br>");


// string = "Pakistani";

// document.writeln(`<br>String: ${string}`);
// document.writeln(`<br>Character at Index 3: ${string.charAt(3)}`);



// document.writeln("<br>");






// // Q#6
// // Answer Code
// document.writeln("<br><b>Q#6</b>");
// document.writeln("<br>");

// firstName = prompt("Enter Your First Name");
// lastName = prompt("Enter Your Last Name");


// firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();



// fullName = firstName.concat(" ",lastName);



// document.writeln(`<br>Assalam-U-Alykum Wa Rahmatullahi Wa Barakatuh! ${fullName}`);




// document.writeln("<br>");






// // Q#7
// // Answer Code
// document.writeln("<br><b>Q#7</b>");
// document.writeln("<br>");


// let city = "Hyderabad";

// document.writeln(`<br>City: ${city}`);

// city = city.replace("Hyder","Islam");

// document.writeln(`<br>After Replacement: ${city}`);


// document.writeln("<br>");







// // Q#8
// // Answer Code
// document.writeln("<br><b>Q#8</b>");
// document.writeln("<br>");

// let message = "Ali and Sami are best friends. They play cricket and football together.";

// document.writeln(`<br>Meesage: ${message}`);

// message = message.replace(/and/g, "&");

// document.writeln(`<br>After Replacement: ${message}`);


// document.writeln("<br>");





// // Q#9
// // Answer Code
// document.writeln("<br><b>Q#9</b>");
// document.writeln("<br>");


// let value = "472";

// document.writeln(`<br>Value: ${value}`);
// document.writeln(`<br>Type: ${typeof value}`);


// document.writeln("<br>");


// value = Number(value);

// document.writeln(`<br>Value: ${value}`);
// document.writeln(`<br>Type: ${typeof value}`);




// document.writeln("<br>");






// // Q#10
// // Answer Code
// document.writeln("<br><b>Q#10</b>");
// document.writeln("<br>");

// let userInput = prompt("Enter anything to convert it to UPPERCASE");
// document.writeln(`<br>User Input: ${userInput}`);

// document.writeln(`<br>Upper Case: ${userInput.toUpperCase()}`);



// document.writeln("<br>");






// // Q#11
// // Answer Code
// document.writeln("<br><b>Q#11</b>");
// document.writeln("<br>");

// let userTitleInput = prompt("Enter A Title");

// document.writeln(`<br>User Input: ${userTitleInput}`);
// document.writeln(`<br>Title Case: ${userTitleInput[0].toUpperCase()}${userTitleInput.slice(1)}`);


// document.writeln("<br>");





// // Q#12
// // Answer Code
// document.writeln("<br><b>Q#12</b>");
// document.writeln("<br>");

// let num = 35.36;
// document.writeln(`<br>Number: ${num}`);

// num = num.toString().replace(".","");
// document.writeln(`<br>Result: ${num}`);


// document.writeln("<br>");






// // Q#13
// // Answer Code
// document.writeln("<br><b>Q#13</b>");
// document.writeln("<br>");


// let userName = prompt("Enter a Valid Username");

// let userNameFlag = false;

// for(let i = 0; i < userName.length; i++){

//     let code = userName.charCodeAt(i);

//     if(code == 32 || (code >= 65 && code <= 90)  ||  (code >= 97 && code <= 122)){
//         userNameFlag = true
//     }else {
//         userNameFlag = false;
//         break;
//     }
// }


// if(userNameFlag === true){
//     document.writeln(`<br>Your Username <b>${userName}</b> has stored`);
// }else{
//     document.writeln(`<br>Please Enter A Valid Username`);
// }




// document.writeln("<br>");




// // Q#14
// // Answer Code
// document.writeln("<br><b>Q#14</b>");
// document.writeln("<br>");

// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userAskItem = prompt("Enter The Item You Wants To Order!").toLowerCase();

// let flagOfBakeryItem = false


// for (let i = 0; i < bakeryItems.length; i++) {
//     if (userAskItem == bakeryItems[i]) {
//         flagOfBakeryItem = true;
//     }
// }


// if (flagOfBakeryItem === true) {
//     document.writeln(`${userAskItem} is <b>Available</b> at Index ${bakeryItems.indexOf(userAskItem)} in our Bakery`);
// }else {
//     document.writeln(`We Are Sorry ${userAskItem} is <b>Not Available</b> at our Bakery`);
// }






// document.writeln("<br>");





// Q#15
// Answer Code
document.writeln("<br><b>Q#15</b>");
document.writeln("<br>");







document.writeln("<br>");



// // Q#16
// // Answer Code
// document.writeln("<br><b>Q#16</b>");
// document.writeln("<br>");

// let university = "University of Karachi";
// document.writeln(university);

// university = university.split("");
// for(let i = 0; i < university.length; i++){
//     document.writeln("<br>" + university[i]);
// }



// document.writeln("<br>");






// // Q#17
// // Answer Code
// document.writeln("<br><b>Q#17</b>");
// document.writeln("<br>");

// let userAnotherInput = prompt("Please Enter A Word");


// document.writeln(`<br>User Input: ${userAnotherInput}`);
// document.writeln(`<br>Last Character Of Input: ${userAnotherInput.slice(-1)}`);





// document.writeln("<br>");






// // Q#18
// // Answer Code
// document.writeln("<br><b>Q#18</b>");
// document.writeln("<br>");

// let text = "The quick brown fox jumps over the lazy dog";
// document.writeln(`<br>Text: ${text}`)

// text = text.toLowerCase();
// text = text.split(" ");

// let word = "the";

// let  occurancesOfWord = 0;

// for(let i = 0; i < text.length; i++){
//     if(text[i] == word){
//         occurancesOfWord++;
//     }
// }

// document.writeln(`<br>There are ${occurancesOfWord} occurance(s) of word '${word}'`);



// document.writeln("<br>");