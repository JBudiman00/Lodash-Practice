const _ = require('lodash');

let arrNum = [1, 2, 3, 4, 5, 6];
let first = _.first(arrNum);
let last = _.last(arrNum);

console.log(first);
console.log(last);
console.log(_.nth(arrNum, 4));

let chunk1= _.chunk(arrNum, 2);
console.log(chunk1);

console.log(_.slice(arrNum, 1, 4)); //Inclusive, exclusive, should print [2, 3, 4]
console.log(_.random(5, 10));

_.times(4, ()=>{console.log("Testing")});

console.log(_.min(arrNum));
console.log(_.max(arrNum));

function multiply(a, b, c) {

    return a * b * c;
}

let curried = _.curry(multiply);

let ret = curried(2)(3)(4);
console.log(ret);

let newArr = _.filter(arrNum, e => e > 3);
console.log(newArr);

_.pull(newArr, 4, 6);
console.log(newArr);

console.log(_.take(arrNum, 3));

let [num1, num2] = _.partition(arrNum, e => e > 3);
console.log(num1);
console.log(num2);