// ES6
// var let const

let x = 1;
if (true) {
  let x = 2;
  console.log('x', x);
}
console.log('x', x);

// best usage

for (let i = 0; i < 5; i++) {
  // code
}

const y = 1;
// y = 4; error

const myArray = [1, 2, 3]; // memory location e.g x0fffffe05430ff60
myArray[3] = 4; // Valid because we are not chaning memory location data
console.log('array', myArray);
// myArray = [6,4,3]; NOT VALID A CONSTANT COLLECTION CONNOT REASSIGN
const myObj = { prop: 'val' };
myObj.prop2 = 'val2'; // adds new object property
delete myObj.prop2; // removes object property
console.log('obj', myObj);

// String literal
const ali = {
  name: 'ali',
  age: 25,
  describe: function () {
    // return 'Name is ' + this.name + ' age: ' + this.age;
    return `Name is ${this.name.toUpperCase()} age: ${this.age}`;
    // ${} a placeholder
  },
};
let v = 6;
// short hand syntex ( v ) well be givin a key
console.log({ v, ali: ali.describe() });

// lambda expression(arrow function)

function raiseToPower(num, power) {
  return Math.pow(num, power); // 5,2 5^2= 25
}

const raiseToPowerArr = (num, power) => Math.pow(num, power); // to return {} use ({prop1:1,prop2:2})

function devide(n1, n2) {
  /*
  if (0 === n2) { // Yuda 
    return 'Error';
  } else {
    return n1 / n2;
  }
 */
  // Gaurd clause
  if (0 === n2) return 'Error';
  return n1 / n2;
}

// version 1
const devideArrV1 = (n1, n2) => {
  if (0 === n2) return 'Error';
  return n1 / n2;
};

// version 2
const devideArrV2 = (n1, n2) => (0 === n2 ? 'Error' : n1 / n2);

// with one parameter () are optional
const anotherFunc = param => param.tostring(); // '5'

// it's better not to use 'this' keyword in arrow function

console.log('raise arr', raiseToPowerArr(5, 2));
console.log('devide arr v1', devideArrV1(20, 5));
console.log('devide arr v2', devideArrV2(20, 0));

// ...(spread operator) + copying objects
// [1,2,3].concat([4,5,6]) [1,2,3,4,5,6]

const arr1 = [1, 2, 3];

const [a, b, c] = arr1;
// is equivalent to
const a0 = arr1[0];
const b1 = arr1[1];
const c2 = arr1[2];

// React const [state, setstate] = useState()

// const arr3 = [arr1,4,5,6] will result in a 2 dimintional array [[1,2,3],4,5,6]
const arr3 = [...arr1, 4, 5, 6]; // [1,2,3,4,5,6]

const obj1 = { prop1: 1, prop2: 2 };
// const newobj1 = obj1;
// newobj1 points to the same memory location as obj1
// newobj1.prop2 = 4; overwrite obj1 IT IS ON THE SAME REFERENCE
// console.log('coping object referece',{obj1, newobj1}); obj1 and obj

const newobj1 = { ...obj1, prop2: 5 };
const newobj2 = Object.assign({}, obj1, { prop2: 5 });

// newobj2.prop2 = 8; Does not overwrite obj1 IT IS ON THE SAME REFERENCE

console.log('clone object', { obj1, newobj1 });
console.log('object.assign', { obj1, newobj2 });

// when declaring object literal
const compoundkey = { prop1: 1, ['prop' + 2]: 2 };
console.log('key expression', { compoundkey });
