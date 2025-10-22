// Chapter#10-11


// Q#1
// Answer Code
document.writeln("<br><b>Q#1</b>");
document.writeln("<br>");

let city = prompt("Enter your city name");

if(city == "Karachi"){
    document.writeln("<br>Welcome to city of lights");
}else {
    document.writeln("<br>Karachi Ajao");
}


document.writeln("<br>");



// Q#2
// Answer Code
document.writeln("<br><b>Q#2</b>");
document.writeln("<br>");

let gender = prompt("Enter your gender");

if(gender == "Male"){
    document.writeln("<br>Good Morning Sir.");
}else if (gender == "Female"){
    document.writeln("<br>Good Morning Ma'am.");
}


document.writeln("<br>");




// Q#3
// Answer Code
document.writeln("<br><b>Q#3</b>");
document.writeln("<br>");

let trafficSignal = prompt("Enter traffic signal light color");

if(trafficSignal == "Red"){
    document.writeln("<br>Must Stop");
}else if (trafficSignal == "Yellow"){
    document.writeln("<br>Ready to move");
}else if(trafficSignal == "Green"){
    document.writeln("<br>Move now");
}


document.writeln("<br>");



// Q#4
// Answer Code
document.writeln("<br><b>Q#4</b>");
document.writeln("<br>");

let fuel= prompt("Please enter your cars remaining fuel in litres");

if(fuel < 0.25){
    document.writeln("<br>Please refill the fuel in your car");
}


document.writeln("<br>");




// Q#5
// Answer Code
document.writeln("<br><b>Q#5</b>");
document.writeln("<br>");

let a = 4;
if (++a === 5){
    alert("giver conditions for variable a is true");
}

let b = 82;
if (++b === 83){
    alert("giver conditions for variable b is true");
}

let c = 12;

// Condition 1
if (c++ === 13){
    alert("condition 1 is true");
}

// Condition 2
if (c === 13){
    alert("condition 2 is true");
}

// Condition 3
if (++c < 14){
    alert("condition 3 is true");
}

// Condition 4
if (c === 14){
    alert("condition 4 is true");
}


let materialCost=20000;
let laborCost=2000;
let totalCost= materialCost + laborCost;

if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}


if ("car" < "cat"){
    alert("car is smaller than cat");
}


document.writeln("<br>");




// Q#6
// Answer Code
document.writeln("<br><b>Q#6</b>");
document.writeln("<br>");

let sub1Marks=Number(prompt("Enter 1st Subject Marks"));
let sub2Marks=Number(prompt("Enter 2nd Subject Marks"));
let sub3Marks=Number(prompt("Enter 3rd Subject Marks"));

let totalMarks=100;


let sub1Percentage= sub1Marks/totalMarks*100;
let sub2Percentage= sub2Marks/totalMarks*100;
let sub3Percentage= sub3Marks/totalMarks*100;



let allTotalMarks=totalMarks*3;

let allObtainedMarks=sub1Marks+sub2Marks+sub3Marks;

let totalPercentage=(sub1Percentage+sub2Percentage+sub3Percentage)/3;



document.writeln("<br><h1>Marks Sheet</h1>");
document.writeln("<br>Total Marks: ",allTotalMarks);
document.writeln("<br>Marks Obtained: ",allObtainedMarks);
document.writeln("<br>Percentage: ",totalPercentage);
if(totalPercentage >= 80){
    document.writeln("<br>Grade: A-one");
    document.writeln("<br>Remarks: Excellent");
}else if(totalPercentage >= 70){
    document.writeln("<br>Grade: A");
    document.writeln("<br>Remarks: Good");
}else if(totalPercentage >= 60){
    document.writeln("<br>Grade: B");
    document.writeln("<br>Remarks: You need to improve");
}else if(totalPercentage >= 50){
    document.writeln("<br>Grade: Fail");
    document.writeln("<br>Remarks: Sorry");
}



document.writeln("<br>");





// Q#7
// Answer Code
document.writeln("<br><b>Q#7</b>");
document.writeln("<br>");

let secretNumber =7;

let userNumber = +prompt("Guess the number from 1-10");

if(userNumber === secretNumber){
    document.writeln("<br>Bingo! Correct Answer");
}else if (++userNumber === secretNumber){
    document.writeln("<br>Close enough to the correct answer");
}else {
    document.writeln("<br>Try different number");
}


document.writeln("<br>");




// Q#8
// Answer Code
document.writeln("<br><b>Q#8</b>");
document.writeln("<br>");

let divisibleNumber = +prompt("Enter a number to find whether it can be divide by 3 or not");

if(divisibleNumber % 3 === 0){
    document.writeln("<br>This number is divisible by 3");
}else {
    document.writeln("<br>This number is not divisible by 3");
}


document.writeln("<br>");



// Q#9
// Answer Code
document.writeln("<br><b>Q#9</b>");
document.writeln("<br>");

let typeOfInteger = +prompt("Enter a number to find whether it is an even number or an odd number");

if(typeOfInteger % 2 === 0){
    document.writeln("<br>This is an even number");
}else {
    document.writeln("<br>This is an odd number");
}


document.writeln("<br>");




// Q#10
// Answer Code
document.writeln("<br><b>Q#10</b>");
document.writeln("<br>");

let temp = +prompt("Enter todays temperature");

if(temp > 40 ){
    document.writeln("<br>It's too hot outside");
}else if(temp > 30 ){
    document.writeln("<br>The weather is normal today");
}else if(temp > 20 ){
    document.writeln("<br>Today's weather is cool");
}else if(temp > 10 ){
    document.writeln("<br>OMG! Today's weather is so Cool");
}else {
    document.writeln("<br>It's Freeezing Ouuutsiiide")
}


document.writeln("<br>");



// Q#11
// Answer Code
document.writeln("<br><b>Q#11</b>");
document.writeln("<br>");

