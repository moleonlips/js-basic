/**
 * Kiểu dữ liệu
 * 1. Kiểu dữ liệu nguyên thuỷ - Primitive Data
 * - number
 * - string
 * - boolean
 * - undefined
 * - null
 * - symbol
 * 
 * 2. Dữ liệu phức tạp - Complex data
 * - function
 * - object
 */

// number type
var a = 0
var a = 2
var a = 3.1

// string type
var fullname = 'TTNU'
var empty = ''
var something = 'i lvoe you'

// boolean type
var isOn = true
var isOff = false

// undefined type: is a variable that was declared but wasn't set any value
var noone

// null type
var isNull = null

// symbol type
var id1 = Symbol('id')
var id2 = Symbol('id')
var compare = id1 == id2
// console.log(`>> check symbol: ${compare}`);


// function type
var sayHello = function () {
  console.log(`xin chao moi nguoi`);
}


// opject type
var arr = [1, 2, 3, 5]
var person = {
  fName: 'cao van nam',
  age: 12,
  add: 'hungyen',
  isMale: true,
  activity: ['working', 'pooling', 'coffee', 'love'],
  action: function () {
    console.log('I did!');
  }
}

person.action()

console.log('>>> check type:', typeof person)
console.log('dont forget, type of null is object:', null, 'is', typeof null)