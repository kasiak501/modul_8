// scripts.js

/*var name = prompt('Enter your name'); 
alert('Hello, ' + name);/*
//console.log('Hello, ' + name); /*The console.log() method writes a message to the console*/

//triangle area

/*var a = 10,
    h = 60,
    triangleArea = prompt("Do you agree that triangle area is?:", a * h / 2);

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);*/


var a = 7,
    b = 0,
    Value = (a * a) - (2 * a * b) - (b * b);

if (Value > 0) {
    console.log('Wynik dodatni');
} else if (Value < 0) {
    console.log('Wynik ujemny');
} else {
    console.log('Wynik równy zero');
}
