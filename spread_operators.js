// 4. Spread Operator of ES6.
let addnumbers = (a,b,c) => {console.log(a + b + c);}
var nums = [5,6,4];
addnumbers(...nums);

var fruit = ['apple', 'banana', 'pineapple'];
var food = ['leafy vegatable', ...fruit , 'meat', 'chicken'];
console.log(food);