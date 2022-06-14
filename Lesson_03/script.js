// function calls
var numberOfStudents = prompt('How many students are there?', 10); // On cancel return null.
var isLearning = confirm('Are you learning\nJavascrip?'); // \n cartridge return.
alert('Welcome');
console.log({ numberOfStudents, isLearning });

/* FUNCTIONS 
PART1: function prototype
function myFunc(a, b, c) 

PART2: function body
function myFunc(a, b, c) {
    // code goes here
} 
function calling 
myFunc(1, 2, 3)
*/

// instuction vs returning

// calculation

function sum(number1, number2) {
  return number1 + number2;
}

console.log({ sum1: sum(1, 2), sum2: sum(5, 7) });

// Literal object
var ali = {
  name: 'Ali',
  age: 30,
  hairColor: 'red',
  talk: function () {
    console.log('my name is' + this.name + 'And i can talk');
  },
};
var ahmad = {
  name: 'Ahmad',
  age1: 35,
  'hair Color': 'black',
};
console.log('dot', ali.age, 'name', ahmad['hair Color']);

// Object constructor
function Person(name, age, hairColor) {
  this.name = name;
  this.age = age;
  this.hairColor = hairColor;
  this.car = {
    color: 'blue',
    type: 'sports car',
  };
  this.describeSelf = function () {
    console.log('My name is ' + this.name + ' I own a' + this.car.color + ' car.');
  };
}
var morad = new Person('Morad', 40, 'brown');
console.log(morad);
// object behavior
ali.talk();
morad.describeSelf();
