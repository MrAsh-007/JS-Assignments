// Chapter#38-42




// // Q#1
// // Answer Code
// document.writeln(`<br><b>Q#1</b>`);
// document.writeln(`<br>`);

// let base = 3;
// let exponent = 5;

// function power(a, b){
//     let value = a ** b;
//     document.writeln(`<br>${value}`);
// }
// power(base, exponent);



// document.writeln(`<br>`);








// // Q#2
// // Answer Code
// document.writeln(`<br><b>Q#2</b>`);
// document.writeln(`<br>`);

// function leapYear(year){
//     if(year % 4 == 0){
//         document.writeln(`<br>${year} is a Leap Year`);
//     }else{
//         document.writeln(`<br>${year} is not a Leap Year`);
//     }
// }
// leapYear(+prompt(`Enter a Year to Check if that a Leap Year or not`));




// document.writeln(`<br>`);











// // Q#3
// // Answer Code
// document.writeln(`<br><b>Q#3</b>`);
// document.writeln(`<br>`);

// function areaOfTriangle(a, b, c) {

//     let semiperimeter = (a + b + c) / 2;

//     function area() {

//         let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));

//         document.writeln(`Area of triangle is = ${area}`);
//     }
//     area()
// }
// areaOfTriangle(+prompt(`Enter length of side a of the Triangle`), +prompt(`Enter length of side b of the Triangle`), +prompt(`Enter length of side c of the Triangle`));





// document.writeln(`<br>`);











// // Q#4
// // Answer Code
// document.writeln(`<br><b>Q#4</b>`);
// document.writeln(`<br>`);

// function mainFunction(sub1, sub2, sub3) {
//     let totalMarks = 300;
//     let obtainedMarks = sub1 + sub2 + sub3;

//     function average() {
//         return obtainedMarks / 3;
//     }

//     function percentage() {
//         return obtainedMarks / totalMarks * 100;
//     }
//     document.writeln(`<br>The average is ${average()} and the percentage is ${percentage()}%`)
// }
// mainFunction(80, 80, 80);




// document.writeln(`<br>`);









// Q#5
// Answer Code
document.writeln(`<br><b>Q#5</b>`);
document.writeln(`<br>`);







document.writeln(`<br>`);










// // Q#6
// // Answer Code
// document.writeln(`<br><b>Q#6</b>`);
// document.writeln(`<br>`);

// function vowels(sentence){
//     sentence = sentence.toLowerCase().split("");

//     for(let i = 0; i < sentence.length; i++){
//         if(sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u" ){
//             sentence.splice(i, 1);
//         }
//     }

//     sentence = sentence.join("").trim();

//     document.writeln(sentence);
// }
// vowels(prompt(`Type any sentence to remove its vowels`));




// document.writeln(`<br>`);










// // Q#7
// // Answer Code
// document.writeln(`<br><b>Q#7</b>`);
// document.writeln(`<br>`);

// function successionOfVowels(sentence) {

//     let lowerSen = sentence.toLowerCase();

//     let succession = 0;
//     let vowels = [];

//     for (let i = 0; i < lowerSen.length - 1; i++) {
//         let first = lowerSen[i];
//         let second = lowerSen[i + 1];

//         switch (first) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch (second) {
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         succession++;
//                         vowels.push(first + second);
//                         break;
//                 }
//                 break;
//         }
//     }
//     document.writeln(`<br>Sentence:<br><b>"${sentence}"</b>`);
//     document.writeln(`<br>Total Double Occurances: <b>${succession}</b>`);
//     document.writeln(`<br>Succession Vowels: <b>${vowels}</b>`);
// }
// successionOfVowels(prompt(`Enter Any Sentence to get succesion vowels in it`));




// document.writeln(`<br>`);











// // Q#8
// // Answer Code
// document.writeln(`<br><b>Q#8</b>`);
// document.writeln(`<br>`);

// function distance(dis) {

//     dis = parseFloat(dis);

//     function meter() {

//         let meter = dis * 1000

//         document.writeln(`<br>The distance in Meter: ${meter}m`);

//         function centimeters() {

//             let centimeters = meter * 100;

//             document.writeln(`<br>The distance in Centimeter: ${centimeters}cm`);
//         }
//         centimeters();


//         function feets() {

//             let foot = meter * 3280.84;

//             document.writeln(`<br>The distance in Foot: ${foot}ft`);

//             function inches() {

//                 let inches = foot * 12;

//                 document.writeln(`<br>The distance in Inches: ${inches}in`);
//             }
//             inches();
//         }
//         feets();
//     }
//     meter();
// }
// distance(prompt(`Enter distance between two cities in kilometer`));





// document.writeln(`<br>`);










// Q#9
// Answer Code
document.writeln(`<br><b>Q#9</b>`);
document.writeln(`<br>`);







document.writeln(`<br>`);








// Q#10
// Answer Code
document.writeln(`<br><b>Q#10</b>`);
document.writeln(`<br>`);







document.writeln(`<br>`);