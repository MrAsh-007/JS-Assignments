// Chapter#6-9



// Q#1
// Answer Code
document.writeln("<br> <b>Q#1</b>");
document.writeln("<br>");

let x=10;

document.writeln("<br>Result: ");
document.writeln("<br>The value of x is: ",x);



document.writeln("<br>..............................................");
document.writeln("<br> ");


++x;
document.writeln("<br>The value of ++x is: ",x);
document.writeln("<br>Now the value of x is: ",x);


document.writeln("<br> ");


document.writeln("<br>The value of x++ is: ",x);
x++;
document.writeln("<br>Now the value of x is: ",x);


document.writeln("<br> ");


--x;
document.writeln("<br>The value of --x is: ",x);
document.writeln("<br>Now the value of x is: ",x);


document.writeln("<br> ");


document.writeln("<br>The value of x-- is: ",x);
x--;
document.writeln("<br>Now the value of x is: ",x);


document.writeln("<br> ");



// Q#2
// Answer Code
document.writeln("<br> <b>Q#2</b>");
document.writeln("<br>");










// Q#3
// Answer Code
document.writeln("<br> <b>Q#3</b>");
document.writeln("<br>");

let userName=prompt ("your name");
alert("Assalam-U-Alykum "+userName+"!");

document.writeln("<br>");





// Q#4
// Answer Code
document.writeln("<br> <b>Q#4</b>");
document.writeln("<br>");



tableNum=prompt("Enter a number to get its table",5);

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


// Q#5
// Answer Code
document.writeln("<br> <b>Q#5</b>");
document.writeln("<br>");
document.writeln("<br>");

let sub1=prompt("Enter 1st Subject");
let sub2=prompt("Enter 2nd Subject");
let sub3=prompt("Enter 3rd Subject");

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

document.writeln(`   
     <table>
        <tr>
            <th>Subjects</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${sub1}</td>
            <td>${totalMarks}</td>
            <td>${sub1Marks}</td>
            <td>${sub1Percentage}%</td>
        </tr>
        <tr>
            <td>${sub2}</td>
            <td>${totalMarks}</td>
            <td>${sub2Marks}</td>
            <td>${sub2Percentage}%</td>
        </tr>
        <tr>
            <td>${sub3}</td>
            <td>${totalMarks}</td>
            <td>${sub3Marks}</td>
            <td>${sub3Percentage}%</td>
        </tr>
        <tr>
            <th></th>
            <th>${allTotalMarks}</th>
            <th>${allObtainedMarks}</th>
            <th>${totalPercentage}%</th>
        </tr>
    </table>
    `)