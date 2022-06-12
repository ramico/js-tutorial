document.write('<h1>Hello world</h1>'); // Writes to the screen.
console.log('Hello console'); // Writes to the console.

var num = 5; // Number.
var isTrue = true; // Boolean.
var date = new Date(); // Date.
var str = 'Hello string'; // String.
var float = 5.6; // Number.

console.log('Logging values', { num, isTrue, date, float, str });

// Write the vals to the screen.
/*

a
b
c 


*/
var x = 6;
var y = 10;
// Arithmartic operators.
console.log('Add x+y', x + y);
console.log('Multiply x * y', x * y);
console.log('Subtract x-y', x - y);
console.log('Devide x/y', x / y);

// pemdas: (),√ or ^,X or ÷,+ or -
console.log(x + 5 * y);

// Boolen operatirs
console.log("5 == '5'", 5 == '5');
console.log("5 === '5'", 5 === '5');
console.log('5 > 5', 5 > 5);
console.log('5 < 5', 5 < 5);
console.log('5 <= 5', 5 <= 5);
console.log('5 >= 5', 5 >= 5);
// logical operatirs
console.log('And', 5 > 3 && 6 < 10);
console.log('Or', 5 > 3 || 6 < 4);
console.log('Not', !false);

// just think
function devide(x, y) {
  // guard clause
  if (y === 0) return;
  // devide logic
}

// is also used to skip a portion of the code
