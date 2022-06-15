// Arrays

var arr = new Array(1, 2, 3); // object constructor

//  Array literal
var arr2 = [1, 2, 3];
var arr3 = [4, 5, 6];

console.log({ complete_array: arr2, first_element: arr2[0], second_element: arr2[1], third_element: arr2[2] });

for (var i = 0; i < arr2.length; i++) {
  console.log('Array element', arr2[i]);
}

console.log(arr2.concat(arr3)); // Adds arrays together

var objArr = [{ color: 'red', num: 5 }, { color: 'green' }, { color: 'blue' }];

for (var i = 0; i < objArr.length; i++) {
  console.log('objArr', objArr[i].color);
}

//  arr[i][j]
var twoDim = [
  [1, 2, 3],
  [10, 20, 30],
];

for (var i = 0; i < twoDim.length; i++) {
  for (var j = 0; j < twoDim[i].length; j++) {
    console.log(twoDim[i][j]);
  }
}

// Date and Math
console.log('---date---');
var d = new Date(2000, 3, 14); // month 0 - 11
console.log('Some date methods', d.getFullYear(), d.getHours());
console.log('Full date', d);
console.log('𝝅', Math.PI);
console.log('Absolute value', Math.abs(-4));
console.log('Square root', Math.sqrt(25));
console.log('Random ceil', Math.ceil(Math.random() * 25) + 1); // 1.1 2
console.log('Random floor', Math.floor(Math.random() * 25) + 1); // 1.1 1

// DOM document object modal DHTML Dynamic HyperText Markup Language
console.log('---DOM---');
var el = document.getElementById('list').style.backgroundColor = 'green'; // css #list{background-color:'green'}
var il = document.getElementById('intended').innerHTML = '<u>A</u>';

var btn = document.getElementById('btn');
// assigning event once 
btn.onmouseover = function () { // watch 'on'
  console.log('mouseover');
}

// multiple times
btn.addEventListener('click', function () {
  var paras = document.getElementsByTagName('p');
  for (var i = 0; i < paras.length; i++) {
    paras[i].style.color = 'red';
  }
});

btn.addEventListener('click', function () {
  var paragraphs = document.getElementsByTagName('p');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = 'Something else';
  }
});

// $('#list') jquery example

/*
  camelCase
  PascalCasing
  shish-kebab-casing
  snake_case
*/
