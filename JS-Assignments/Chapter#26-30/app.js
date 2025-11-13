// Chapter#26-30


// Q#1
// Answer Code
document.writeln("<br><b>Q#1</b>");
document.writeln("<br>");

let userNumber = +prompt("Enter a Number");

document.writeln(`<br>Number: ${userNumber}`);
document.writeln(`<br>Round off value: ${Math.round(userNumber)}`);
document.writeln(`<br>Floor value: ${Math.floor(userNumber)}`);
document.writeln(`<br>Ceil value: ${Math.ceil(userNumber)}`);




document.writeln("<br>");





// Q#2
// Answer Code
document.writeln("<br><b>Q#2</b>");
document.writeln("<br>");

let userNumber2 = +prompt("Enter a Negative Floating Point Number");

document.writeln(`<br>Number: ${userNumber2}`);
document.writeln(`<br>Round off value: ${Math.round(userNumber2)}`);
document.writeln(`<br>Floor value: ${Math.floor(userNumber2)}`);
document.writeln(`<br>Ceil value: ${Math.ceil(userNumber2)}`);






document.writeln("<br>");





// Q#3
// Answer Code
document.writeln("<br><b>Q#3</b>");
document.writeln("<br>");

let userNumber3 = +prompt("Enter a Number to get its Absolute Value");

document.writeln(`<br>The Absolute Value of ${userNumber3} is ${Math.abs(userNumber3)}`);




document.writeln("<br>");





// Q#4
// Answer Code
document.writeln("<br><b>Q#4</b>");
document.writeln("<br>");

let dice = Math.floor(Math.random() * 6) + 1;

document.writeln(`<br>${dice}`);



document.writeln("<br>");




// Q#5
// Answer Code
document.writeln("<br><b>Q#5</b>");
document.writeln("<br>");

let coin = Math.ceil(Math.random() * 2);

if (coin === 1) {
    document.writeln(`<br>${coin}<br>It's Heads`);
} else {
    document.writeln(`<br>${coin}<br>Its Tails`);
}


document.writeln("<br>");





// Q#6
// Answer Code
document.writeln("<br><b>Q#6</b>");
document.writeln("<br>");

let randomBetweenCentury = Math.ceil(Math.random() * 100);
document.writeln(`<br>Random Number Between 1 and 100: ${randomBetweenCentury}`);




document.writeln("<br>");








// Q#7
// Answer Code
document.writeln("<br><b>Q#7</b>");
document.writeln("<br>");

let userWeight = prompt("Enter Your Weight in Kilograms");
userWeight = parseFloat(userWeight);

if(userWeight){
    document.writeln(`The weight of user is ${userWeight} kilograms`);
}else{
    document.writeln(`Please enter some weight`);
}




document.writeln("<br>");







// Q#8
// Answer Code
document.writeln("<br><b>Q#8</b>");
document.writeln("<br>");


let randomSecretNumber = Math.ceil(Math.random() * 10);

let userGuess = +prompt("Guess The Number");

if(userGuess === randomSecretNumber){
    document.writeln(`Congratulations You Guess The Number ${userGuess} Which is Correct!!!`);
}else{
    document.writeln(`Try Again ${userGuess} isn't the Secret Number`);
}



document.writeln("<br>");