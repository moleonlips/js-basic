/**
 * List of type of functions
 * 
 * 1. Declarationn function
 * - has Hoisting: yes
 * 
 * 2. Expression function
 * - has Hoisting: no
 * - co the dat ten hoac khong, (muc dich duy nhat cua ten ham chi de dev hieu duoc cong dung cua ham do, duoc su dung lam viec gi)
 * 
 * 3. Arrow function
 * - duoc gioi thieu lan dau trong ES6
 * - cho phep khai bao function voi cu phap ngan gon hon
 */

// 1. Declaration function - ham khai bao
function showMessage() {
  console.log('>> check declaration function');
}

// 2. Expression function -  ham bieu thuc
var showMsg2 = function testName() {
  console.log('>> check expression function');
}

// setTimeout(function testName() {

// }, 2000);

// var myObj = {
//   myFnt: function testName() {

//   }
// }


// 3. Arrow function
var arf = () => {
  console.log('>>> check arrow function!');
}

// arrow function return value by default
var say = (saySomething) => saySomething


// excuting
showMessage()
showMsg2()
arf()
console.log(say('>>> this is arrow function!'))