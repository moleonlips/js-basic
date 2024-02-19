/**
 * kieu so (number) trong js
 * 
 * 1. tao gia tri number
 * - cac cach tao
 * - dung tnao, tsao
 * - kiem tra datatype
 * 
 * 2. lam viec voi number
 * - tostring
 * - tofixed
 */


// cach tao 1 number thong thuong
var age = 18;
var PI = 3.14;
// tao number su dung tu khoa new
var otherNumber = new Number(9)

console.log(typeof PI); // number
console.log(typeof age); // number
console.log(typeof otherNumber); // object -> unexpected


var result = 20 / 'xin chao'

console.log(result); // NaN

var rounded = PI.toFixed()

console.log(rounded);


// kiem tra 1 so co phai kieu so hay khong
function isNumber(value) {
  return isNaN(value) ? false : typeof value != 'number' ? false : true
}

var v1 = '90'
var v2 = 12
var v3 = NaN

console.log(isNumber(v1));
console.log(isNumber(v2));
console.log(isNumber(v3));