/**
 * Math object
 * - Math.PI => tra ve gia tri cua so pi
 * - Math.round() => lam tron so thap phan
 * - Math.abs() => Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5
 * - Math.pow() => Returns the value of a base expression taken to a specified power
 * - Math.ceil() => Returns the smallest integer greater than or equal to its numeric argument
 * - Math.floor() => Return the greatest integer less then or equal to ins numeric agrument
 * - Math.random() => Return the random number
 * - Math.min() => Returns the smaller of a set of supplied numeric expressions
 * - Math.max() => Returns the bigger of a set of supplied numeric expressions
 */


var myNum = Math.PI
var randomNum = Math.random()
// console.log(Math.PI);
// console.log(Math.abs(-5)); // 5
// console.log(Math.pow(3, 2)); // 3^2 = 9
// console.log(Math.ceil(5.4)); // 6
// console.log(Math.floor(4.7)); // 4
// console.log(Math.min(1, 24, 4, -2, -145, 355, 2));
// console.log(Math.max(1, 24, 4, -2, -145, 355, 2));

/**
 * Bai tap thuc hanh, tao 1 object constructor same like Math object
 */

var arr = [2, 4, 5]

// 
function getRandomItem(arr) {
  var lengthOfArr = arr.length;
  var randomItem = Math.ceil(Math.random() * lengthOfArr) - 1;
  return arr[randomItem]
}

console.log(getRandomItem(arr));
