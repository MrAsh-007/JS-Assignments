// Chapter#17-20


// Q#1
// Answer Code
document.writeln("<br><b>Q#1</b>");
document.writeln("<br>");

multiDimensionalArray=[
    [],[],[]
]


document.writeln("<br>");






// Q#2
// Answer Code
document.writeln("<br><b>Q#2</b>");
document.writeln("<br>");


matrixArray=[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

for(let i =0; i < matrixArray.length; i++){
for(let j =0; j < matrixArray[i].length; j++){
    document.writeln(matrixArray[i][j]);
}
document.writeln("<br>");
}



document.writeln("<br>");







// Q#3
// Answer Code
document.writeln("<br><b>Q#3</b>");
document.writeln("<br>");


for(let i = 1; i <= 10; i++){
    document.writeln(i + "<br>");
}



document.writeln("<br>");




// Q#4
// Answer Code
document.writeln("<br><b>Q#4</b>");
document.writeln("<br>");


let num = +prompt("Enter a number to get its Multiplication Table");
let lengthNumber= +prompt("Enter length of Multiplication Table");




document.writeln("<br>Multiplication Table of ",num);
document.writeln("<br>Length: ", lengthNumber);
document.writeln("<br>");
document.writeln("<br>");

for(let i = 1; i <= lengthNumber; i++){
    document.writeln(`${num} x ${i} = ${num*i} <br>`)
}


document.writeln("<br>");







// Q#5
// Answer Code
document.writeln("<br><b>Q#5</b>");
document.writeln("<br>");

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i = 0; i < fruits.length; i++){
    document.writeln(`<br>Element at index ${i} is ${fruits[i]}`);
}


document.writeln("<br>");






// Q#6
// Answer Code
document.writeln("<br><b>Q#6</b>");
document.writeln("<br>");

// a
document.writeln(`<br><b>Counting:</b><br>`);
for(let i=1; i <= 15; i++){
    document.writeln(i);
}

document.writeln("<br>");

// b
document.writeln(`<br><b>Reverse counting:</b><br>`);
for(let i=10; i >= 1; i--){
    document.writeln(i);
}

document.writeln("<br>");

// c
document.writeln(`<br><b>Even:</b><br>`);
for(let i=0; i <=20; i++){
    if(i % 2 == 0 ){
        document.writeln(i);
    }
}

document.writeln("<br>");


// d
document.writeln(`<br><b>Odd:</b><br>`);
for(let i=1; i <=19; i++){
    if(i % 2 == !0 ){
        document.writeln(i);
    }
}


document.writeln("<br>");


// e
document.writeln(`<br><b>Series:</b><br>`);
for(let i = 2; i <= 20; i++){
    if(i % 2 == 0){
        document.writeln(i+"k")
    }
    
}

document.writeln("<br>");






// Q#7
// Answer Code
document.writeln("<br><b>Q#7</b>");
document.writeln("<br>");



let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let ask = prompt("Welcome to Sugar Bakers. What would you like to order?");
let flag = false;


for (i = 0; i <= items.length; i++){
    if(ask == items[i]){
        document.writeln(`${ask} is <b>available</b> at index ${items.indexOf(ask)}`);
        flag = true;
        break
    }
}

if(flag==false){
    document.writeln(`we are sorry, ${ask} is <b>not available</b> at our bakery`);

}



document.writeln("<br>");






// Q#8
// Answer Code
document.writeln("<br><b>Q#8</b>");
document.writeln("<br>");

let randomNumbersArray = [24,53,78,91,12];

document.writeln(`Numbers Array:<br> ${randomNumbersArray}`);
randomNumbersArray.sort((a,b)=>b-a);
document.writeln(`<br>The <b>Largest</b> number is: <b>${randomNumbersArray[0]}</b>`);


document.writeln("<br>");







// Q#9
// Answer Code
document.writeln("<br><b>Q#9</b>");
document.writeln("<br>");

randomNumbersArray= [24,53,78,91,12];

document.writeln(`Numbers Array:<br> ${randomNumbersArray}`);
randomNumbersArray.sort((a,b)=>a-b);
document.writeln(`<br>The <b>Smallest</b> number is: <b>${randomNumbersArray[0]}</b>`);




document.writeln("<br>");






// Q#10
// Answer Code
document.writeln("<br><b>Q#10</b>");
document.writeln("<br>");



for (i = 1; i <= 100; i++){
    if( i % 5 == 0){
        document.writeln(i)
    }
}



document.writeln("<br>");