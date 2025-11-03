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


for(let i = 0; i < matrixArray.length; i++){
    document.writeln(matrixArray[i].join(" ")+"<br>");
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
