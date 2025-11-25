// Chapter#35-38



// // Q#1
// // Answer Code
// document.writeln(`<br><b>Q#1</b>`);
// document.writeln(`<br>`);

// function currentDateNTime(){
//     let currentDateNTime = new Date();
//     return document.writeln(`<br>${currentDateNTime}`);
// }
// currentDateNTime();



// document.writeln(`<br>`);





// // Q#2
// // Answer Code
// document.writeln(`<br><b>Q#2</b>`);
// document.writeln(`<br>`);

// function userGreet(firstName, lastName){
//     let fullName = `${firstName} ${lastName}`;

//     if(firstName == null && lastName == null){
//         return userGreet();
//     }else{
//         return alert(`Khush Aamdeed ${fullName}`);
//     }
// }

// userGreet(prompt(`Enter Your First Name`), prompt(`Enter Your Last Name`));




// document.writeln(`<br>`);






// // Q#3
// // Answer Code
// document.writeln(`<br><b>Q#3</b>`);
// document.writeln(`<br>`);

// function userOperation(firstNum, secondNum){
//     let sum3 = firstNum + secondNum;
//     document.writeln(`<br>The sum of ${firstNum} and ${secondNum} is ${sum3}`)
// }
// userOperation(+prompt(`Enter First Number`, 0), +prompt(`Enter Second Number`, 0));



// document.writeln(`<br>`);




// // Q#4
// // Answer Code
// document.writeln(`<br><b>Q#4</b>`);
// document.writeln(`<br>`);

// function userCalculator(num1, num2, operation){
//     if(operation == "+"){
//         let sum = num1 + num2;
//         return document.writeln(`The Sum of ${num1} and ${num2} is ${sum}`);
//     }else if(operation == "x"){
//         let product = num1 * num2;
//         return document.writeln(`The Product of ${num1} and ${num2} is ${product}`);
//     }else if(operation == "-"){
//         let difference = num1 - num2;
//         return document.writeln(`The Difference of ${num1} and ${num2} is ${difference}`);
//     }else if(operation == "/"){
//         let quotient = num1 / num2;
//         return document.writeln(`The Quotient of ${num1} and ${num2} is ${quotient}`);
//     }else if(operation == "%"){
//         let remainder = num1 % num2;
//         return document.writeln(`The Remainder of ${num1} and ${num2} is ${remainder}`);
//     }
// }
// userCalculator(+prompt(`Enter first number`), +prompt(`Enter second number`), prompt(`Enter operation sign: + - x / %`));



// document.writeln(`<br>`);





// // Q#5
// // Answer Code
// document.writeln(`<br><b>Q#5</b>`);
// document.writeln(`<br>`);

// function square(number){
//     let square = number**2
//     return document.writeln(`The Square of ${number} is ${square}`);
// }
// square(prompt(`Enter a number to get its square`));



// document.writeln(`<br>`);






// // Q#6
// // Answer Code
// document.writeln(`<br><b>Q#6</b>`);
// document.writeln(`<br>`);

// function factorial(f){
//     let value = f;
//     let factorial = [f];

//     for(let i = value - 1; i > 0; i--){

//         factorial.push(i);

//         value = value * i;

//     }
//     factorial = factorial.join(" x ");

//     document.writeln(`<br>Factorial of ${f} = ${factorial} = ${value}`);

// }
// factorial(+prompt(`Enter a number to get its Factorial`));



// document.writeln(`<br>`);








// // Q#7
// // Answer Code
// document.writeln(`<br><b>Q#7</b>`);
// document.writeln(`<br>`);

// function counting(start, end){
//     let counting = [];

//     for(let i = start; i <= end; i++){
//         counting.push(i);
//     }
//     counting = counting.join(" ");
//     document.writeln(`<br>The Counting Between ${start} and ${end}:<br>${counting}`);
// }
// counting(+prompt(`Enter Starting Number`), +prompt(`Enter Ending Number`));



// document.writeln(`<br>`);








// // Q#8
// // Answer Code
// document.writeln(`<br><b>Q#8</b>`);
// document.writeln(`<br>`);


// function hypotenuse(base, perpendicular) {
//     base = base ** 2;
//     perpendicular = perpendicular ** 2;

//     let hypotenuseOFARightAngleTriangle = base + perpendicular;

//     function squareRoot(value) {
//         let result = Math.sqrt(value);
//         document.writeln(`<br>The Hypotenuse of Right Angle Triangle is ${result}`);
//     }
//     squareRoot(hypotenuseOFARightAngleTriangle);
// }
// hypotenuse(+prompt("Enter base of a right angle triangle"), +prompt("Enter perpendicular of a right angle triangle"));







// document.writeln("<br>");











// // Q#9
// // Answer Code
// document.writeln(`<br><b>Q#9</b>`);
// document.writeln(`<br>`);

// function area(width, height){
//     let area = width * height;

//     return document.writeln(`Area is = ${area}`);
// }
// area(+prompt(`Enter Width`), +prompt(`Enter Height`));



// document.writeln(`<br>`);






// // Q#10
// // Answer Code
// document.writeln(`<br><b>Q#10</b>`);
// document.writeln(`<br>`);

// function palindrome(word){
//     word = word.toLowerCase();
//     let reverse = word.split("").reverse().join("");
//     if(word == reverse){
//         document.writeln(`<br><b>${word}</b> is a Palindrome`);
//     }else{
//         document.writeln(`<br><b>${word}</b> is not a Palindrome`);
//     }
// }
// palindrome(prompt(`Type a word to check Palindromes`));


// document.writeln(`<br>`);




// // Q#11
// // Answer Code
// document.writeln(`<br><b>Q#11</b>`);
// document.writeln(`<br>`);

// function titleCase(sentence){
//     let words = sentence.split(" ");

//     for(let i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
//     }
//     words = words.join(" ");

//     document.writeln("<br>",words);

// }
// titleCase(prompt(`Enter any Sentence so program will return it as Title Case`));

// document.writeln(`<br>`);







// // Q#12
// // Answer Code
// document.writeln(`<br><b>Q#12</b>`);
// document.writeln(`<br>`);

// function longestWord(sentence12){

//     let sentenceLength = sentence12.split(" ");
//     let lengths = [];

//     for (let i = 0; i < sentenceLength.length; i++) {
//         lengths[i] = sentenceLength[i].length;
//     }

//     lengths.sort((a, b) => b - a);

//     for (let i = 0; i < sentenceLength.length; i++) {
//         if (lengths[0] == sentenceLength[i].length) {
//             document.writeln("The longest word is ==>", sentenceLength[i]);
//         }
//     }
// }
// longestWord(prompt(`Enter a Sentence to get longest word`));






// document.writeln(`<br>`);









// // Q#13
// // Answer Code
// document.writeln(`<br><b>Q#13</b>`);
// document.writeln(`<br>`);

// function countLetter(string,letter){

//     string = string.toLowerCase();
//     letter = letter.toLowerCase();

//     let score = 0;

//     for (let i = 0; i < string.length; i++) {
//         if(string[i] == letter){
//           score++;
//         }
//     }
//     document.writeln(score);
// }
// countLetter(prompt(`Type anything you like`), prompt(`Enter letter to get its occurance`));



// document.writeln(`<br>`);





// Q#14
// Answer Code
document.writeln(`<br><b>Q#14</b>`);
document.writeln(`<br>`);





document.writeln(`<br>`);