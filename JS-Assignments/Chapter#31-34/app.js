// Chapter#31-34



// Q#1
// Answer Code
document.writeln(`<br><b>Q#1</b>`);
document.writeln(`<br>`);


let date1 = new Date();

document.writeln(`<br>${date1}`);







document.writeln(`<br>`);






// Q#2
// Answer Code
document.writeln(`<br><b>Q#2</b>`);
document.writeln(`<br>`);

let months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

let currentMonth = months[new Date().getMonth()];

document.writeln(`<br>Current month: ${currentMonth}`);





document.writeln(`<br>`);






// Q#3
// Answer Code
document.writeln(`<br><b>Q#3</b>`);
document.writeln(`<br>`);

let daysInAWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let today = daysInAWeek[new Date().getDay()];

document.writeln(`<br>Today is ${today}`);




document.writeln(`<br>`);










// Q#4
// Answer Code
document.writeln(`<br><b>Q#4</b>`);
document.writeln(`<br>`);


daysInAWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

today = daysInAWeek[new Date().getDay()];


if(today == daysInAWeek[0] || today == daysInAWeek[6]){
    document.writeln(`<br>It's Fun day`);
}else{
    document.writeln(`<br>Today is ${today}`);
}





document.writeln(`<br>`);







// Q#5
// Answer Code
document.writeln(`<br><b>Q#5</b>`);
document.writeln(`<br>`);

let date5 = new Date().getDate();

if(date5 < 16){
    document.writeln(`<br>First fifteen days of the month`);
}else{
    document.writeln(`<br>Last days of the month`);
}



document.writeln(`<br>`);






// Q#6
// Answer Code
document.writeln(`<br><b>Q#6</b>`);
document.writeln(`<br>`);

let currentDate6 = new Date();
document.writeln(`<br>Cureent Date: ${currentDate6}`);

let seconds6 = currentDate6.getTime();
document.writeln(`<br>Elapsed milliseconds since January 1, 1970: ${seconds6}`);

let minutes6 = currentDate6.getTime()/1000/60;
document.writeln(`<br>Elapsed minutes since January 1, 1970: ${minutes6}`);






document.writeln(`<br>`);






// Q#7
// Answer Code
document.writeln(`<br><b>Q#7</b>`);
document.writeln(`<br>`);

let time7 = new Date().getHours();
if(time7 < 12){
    document.writeln(`<br>It's AM`);
}else{
    document.writeln(`<br>It's PM`);
}






document.writeln(`<br>`);









// Q#8
// Answer Code
document.writeln(`<br><b>Q#8</b>`);
document.writeln(`<br>`);

let date8 = new Date("31 December 2020");
document.writeln(`<br>${date8}`);







document.writeln(`<br>`);








// Q#9
// Answer Code
document.writeln(`<br><b>Q#9</b>`);
document.writeln(`<br>`);

let dateOfThisRamadan = new Date("18 February 2026");

let ramadan2015 = new Date("18 June 2015");


let daysBetween9 = dateOfThisRamadan.getTime() - ramadan2015.getTime();

daysBetween9 = daysBetween9 / 1000 / 60 / 60 / 24;

document.writeln(`<br>${daysBetween9} Days have passed since 1st Ramadan, 2015`);







document.writeln(`<br>`);









// Q#10
// Answer Code
document.writeln(`<br><b>Q#10</b>`);
document.writeln(`<br>`);

let referenceDate = new Date();

document.writeln(`<br>On reference date ${referenceDate}`)


let firstDayOf2015 = new Date("1 January 2015");

let secondsBetween10 = referenceDate.getTime() - firstDayOf2015.getTime();

secondsBetween10 = Math.round(secondsBetween10 / 1000) ;

document.writeln(`<br>${secondsBetween10} Seconds had passed since beginning of 2015`);







document.writeln(`<br>`);













// Q#11
// Answer Code
document.writeln(`<br><b>Q#11</b>`);
document.writeln(`<br>`);

let currentTime11 = new Date();
document.writeln(`<br>Cureent Date: ${currentTime11}`);


let currenHour = currentTime11.getHours();

currentTime11.setHours(currenHour - 1);


document.writeln(`<br>1 hour ago, it was: ${currentTime11}`);



document.writeln(`<br>`);







// Q#12
// Answer Code
document.writeln(`<br><b>Q#12</b>`);
document.writeln(`<br>`);


let currentTime12 = new Date();
document.writeln(`<br>Cureent Date: ${currentTime12}`);


let currentYear = currentTime12.getFullYear();

currentTime12.setFullYear(currentYear - 100);


document.writeln(`<br>100 years back, it was: ${currentTime12}`);


alert(`Cureent Date: ${currentTime12}\n100 years back, it was: ${currentTime12}`)



document.writeln(`<br>`);












// Q#13
// Answer Code
document.writeln(`<br><b>Q#13</b>`);
document.writeln(`<br>`);


let userAge = +prompt("Enter Your Age");
document.writeln(`<br>Your age is ${userAge}`);

let birthYear = new Date().getFullYear() - userAge;

document.writeln(`<br>Your birth years is ${birthYear}`)







document.writeln(`<br>`);








// Q#14
// Answer Code
document.writeln(`<br><b>Q#14</b>`);
document.writeln(`<br>`);

let userName14 = "Ashas Sheikh";

months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

let currentMonth14 = new Date().getMonth();

let numberOfUnits = 410;

let chargesPerUnit = 16;

let netAmount = numberOfUnits * chargesPerUnit;

let lateSurchages = 350;

let amountAfterDue = netAmount + lateSurchages;


document.writeln(`<br><h3>K-Electric Bill</h3>`);
document.writeln(`<br>Customer Name: <b>${userName14}</b>`);
document.writeln(`<br>Month: <b>${months[currentMonth14]}</b>`);
document.writeln(`<br>Number of units: <b>${numberOfUnits}</b>`);
document.writeln(`<br>Charges per unit: <b>${chargesPerUnit}</b>`);


document.writeln(`<br>`);


document.writeln(`<br>Net Amount Payable (within Due Date): <b>${netAmount}</b>`);
document.writeln(`<br>Late Payment Surcharge: <b>${lateSurchages}</b>`);
document.writeln(`<br>Gross Amount Payable (after Due Date): <b>${amountAfterDue}</b>`);









document.writeln(`<br>`);