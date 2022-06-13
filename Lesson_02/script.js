/*
A
  if(conditioon) one statement
  if(conditioon) {one block}
B 
  if(conditioon) one statement else one statement
  if(conditioon) {one block} else {one block} 
  */
var bool = false;

if (true === bool) {
  // Yoda condition
  console.log('true');
}
// Grade version 1
var grade = 65;
if (grade >= 90) console.log('Excelant');
else if (grade < 90 && grade >= 80) console.log('v.good');
else if (grade < 80 && grade >= 70) console.log('good');
else console.log('less than good');

// Grade version 2
if (grade < 70) console.log('less than good');
else if (grade < 80) console.log('good');
else if (grade < 90) console.log('v.good');
else console.log('Excelant');

// ?: tunary operator
var msg;

if (grade < 60) msg = 'fail';
else msg = 'pass';

msg = grade < 60 ? 'fail' : 'pass';

// switch
var num = 3;
switch (num) {
  case 1:
    console.log('1');
    break;
  case 2:
    console.log('2');
    break;
  case 3:
    console.log('3');
    break;
  default:
    console.log('None');
}
//  ++i vs i++
var ppnum = 5;
var ppres = ++ppnum - 1;
// ppnum = ppnum + 1;
// ppres = ppnum - 1;
console.log('ppres: ', ppres, 'ppnum: ', ppnum);

var numpp = 5;
var respp = numpp++ - 1;
// respp = numpp - 1;
// numpp = numpp + 1;
console.log('respp: ', respp, 'numpp: ', numpp);

// for, while, do-while
console.log('for-loop');
for (var for_i = 1; for_i < 5; for_i++) {
  console.log('I', for_i);
}
// same loop for analyzing first loop
var for_j = 1;
for (;;) {
  console.log('J', for_j);
  for_j++;
  if (for_j < 6) continue; // Next
  else break; // Exit
}

console.log('while-loop');
var while_k = 1;
while (while_k < 6) {
  if (while_k === 2) {
    console.log('K===2');
    ++while_k;
    continue;
  }
  console.log('K', while_k);
  while_k++;
}
console.log('do-while-loop');
var do_l = 1;
do {
  if (do_l === 2) {
    console.log('L===2');
    ++do_l;
    continue;
  }
  console.log('L', do_l);
  do_l++;
} while (do_l < 6);
