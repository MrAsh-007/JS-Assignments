// Chapter#5





// Q#1
// Answer Code
document.writeln("<br><b>Q#1</b>");
document.writeln("<br>");



let num1=3;
let num2=5;

// Addition:
document.writeln("<br>Sum of ", num1, " and ", num2, " is ", num1+num2);


document.writeln("<br>");


// Q#2
// Answer Code
document.writeln("<br><b>Q#2</b>");
document.writeln("<br>");


// Subtraction:
document.writeln("<br>Difference of ", num1, " and ", num2, " is ", num1-num2);

// Multiplication:
document.writeln("<br>Product of ", num1, " and ", num2, " is ", num1*num2);

// Division:
document.writeln("<br>Quotient of ", num1, " and ", num2, " is ", num1/num2);

// Modulus:
document.writeln("<br>Remainder of ", num1, " and ", num2, " is ", num1%num2);



document.writeln("<br>");

// Q#3
// Answer Code
document.writeln("<br><b>Q#3</b>");
document.writeln("<br>");


let number;
document.writeln("<br>Value after variable declaration is ",number);
number=5;
document.writeln("<br>Initial value: ",number);
++number;
document.writeln("<br>Value after increment is: ",number);
number=number+7;
document.writeln("<br>Value after addition is: ",number);
--number;
document.writeln("<br>Value after decrement is: ",number);
number=number%3;
document.writeln("<br>Remainder is: ",number);



document.writeln("<br>");


// Q#4
// Answer Code
document.writeln("<br><b>Q#4</b>");
document.writeln("<br>");


let costOf1Ticket= 600;
let requiredTickets=5;
document.writeln("<br>Total cost to buy ", 5, " tickets to a movie is ", costOf1Ticket*requiredTickets,"PKR");


document.writeln("<br>");


// Q#5
// Answer Code
document.writeln("<br><b>Q#5</b>");
document.writeln("<br>");


tableNum=5;
document.writeln("<br>", tableNum, " x ", 1, " = ", tableNum*1);
document.writeln("<br>", tableNum, " x ", 2, " = ", tableNum*2);
document.writeln("<br>", tableNum, " x ", 3, " = ", tableNum*3);
document.writeln("<br>", tableNum, " x ", 4, " = ", tableNum*4);
document.writeln("<br>", tableNum, " x ", 5, " = ", tableNum*5);
document.writeln("<br>", tableNum, " x ", 6, " = ", tableNum*6);
document.writeln("<br>", tableNum, " x ", 7, " = ", tableNum*7);
document.writeln("<br>", tableNum, " x ", 8, " = ", tableNum*8);
document.writeln("<br>", tableNum, " x ", 9, " = ", tableNum*9);
document.writeln("<br>", tableNum, " x ", 10, " = ", tableNum*10);


document.writeln("<br>");

// Q#6
// Answer Code
document.writeln("<br><b>Q#6</b>");
document.writeln("<br>");


let cTemp=25;

let conversionToFarenheit=(cTemp*9/5)+32;
document.writeln("<br>", cTemp, "°C is ", conversionToFarenheit,"°F");


let fTemp=70;

let conversionToCelsius=(fTemp-32)*5/9;
document.writeln("<br>", fTemp, "°F is ", conversionToCelsius,"°C");



document.writeln("<br>");


// Q#7
// Answer Code
document.writeln("<br><b>Q#7</b>");
document.writeln("<br>");


let priceItem1=650;
let orderedQuantityOfItem1=3;

let priceItem2=100;
let orderedQuantityOfItem2=7;

let shippingCharges=100;

let totalCoastOfOrder=(priceItem1*orderedQuantityOfItem1)+(priceItem2*orderedQuantityOfItem2)+shippingCharges;

document.writeln("<h1>Shopping Cart</h1>");
document.writeln("<br>Price of item 1 is ", priceItem1);
document.writeln("<br>Quantity of item 1 is ", orderedQuantityOfItem1);
document.writeln("<br>Price of item 2 is ", priceItem2);
document.writeln("<br>Quantity of item 2 is ", orderedQuantityOfItem2);
document.writeln("<br>Shipping Charges ", shippingCharges);
document.writeln("<br>");
document.writeln("<br>Total coast of your order is ", totalCoastOfOrder);


document.writeln("<br>");


// Q#8
// Answer Code
document.writeln("<br><b>Q#8</b>");
document.writeln("<br>");


let totalMarks=980;
let obtainedMarks=804;

let percentage= obtainedMarks/totalMarks*100+"%";

document.writeln("<h1>Marks Sheet</h1>");
document.writeln("<br>Total marks: ", totalMarks);
document.writeln("<br>Marks obtained: ", obtainedMarks);
document.writeln("<br>Percentage: ", percentage);

document.writeln("<br>");



// Q#9
// Answer Code
document.writeln("<br><b>Q#9</b>");
document.writeln("<br>");



let quantityOfUSD=10;
let usd1ToPKR=104.80;

let quantityOfSAR=25;
let sar1ToPKR=28;


let totalInPKR= (quantityOfUSD*usd1ToPKR)+(quantityOfSAR*sar1ToPKR);


document.writeln("<h1>Currency in PKR</h1>");
document.writeln("<br>Total Currency in PKR: ", totalInPKR);



document.writeln("<br>");




// Q#10
// Answer Code
document.writeln("<br><b>Q#10</b>");
document.writeln("<br>");


let num=4;
num= ((num+5)*10)/2;

document.writeln("<br>Result of the calculation is: ", num);

document.writeln("<br>");




// Q#11
// Answer Code
document.writeln("<br><b>Q#11</b>");
document.writeln("<br>");

let currentYear=2025;
let birthYear=2006;

let age1= currentYear-birthYear;
let age2= age1 - 1;

document.writeln("<h1>Age Calculator</h1>");
document.writeln("<br>Current Year: ", currentYear);
document.writeln("<br>Birth Year: ", birthYear);

document.writeln("<br>The person is either ", age1, " or ", age2, " years old");


document.writeln("<br>");



// Q#12
// Answer Code
document.writeln("<br><b>Q#12</b>");
document.writeln("<br>");


let radius=20;

let circumferance= 2*3.142*20;
let area= 3.142*(20*20);

document.writeln("<h1>The Geometrizer</h1>");
document.writeln("<br>Radius of a cricle: ", radius);
document.writeln("<br>The circumferance is: ", circumferance);
document.writeln("<br>The area is: ", area);


document.writeln("<br>");



// Q#13
// Answer Code
document.writeln("<br><b>Q#13</b>");
document.writeln("<br>");


let favSnack= "Slanty";
let currentAge= 19;
let maxYearToStopEatingfavSnack= 21;
let estimatedAmountPerDay= 2;
let daysInAYear= 365;
let restLifeOfSlantyEating= maxYearToStopEatingfavSnack-currentAge;

let restAmountOfSlantyEating= (restLifeOfSlantyEating*daysInAYear)* estimatedAmountPerDay;



document.writeln("<h1>The Lifetime Supply Calculator</h1>");
document.writeln("<br>Favourite Snack: ", favSnack);
document.writeln("<br>Current age: ", currentAge);
document.writeln("<br>Max year to stop eating ", favSnack, ": ", maxYearToStopEatingfavSnack);
document.writeln("<br>Amount of ", favSnack, " per day: ", estimatedAmountPerDay);
document.writeln("<br>Rest of the amount of eating ", favSnack, ": ", restAmountOfSlantyEating)


document.writeln("<br> ");