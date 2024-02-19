/**
 * mang trong JS - Array
 * 
 * 1. tao mang
 * - cach tao
 * - su dung cach nao, tai sao
 * - kiem tra data type
 * 
 * 2. truy xuat mang
 * - do dai mang
 * - lay phan tu theo index
 */

// the 1st way:
var flowers = [
  'rose',
  'sun-flower',
  'violet',
]

var addon = [...flowers, 2000, { name: 'thanh long', gender: 'male' }, 'hello']

console.log(addon);

// the 2nd way:
var flwers = new Array('xin chao', 123, { field: 'person' }) // -> khong khuyen cao su dung

/// Kiem tra kieu du lieu
console.log('>>> check type:', typeof flowers)

// phan biet giua Array voi Object
var arr = []
var obj = {}

console.log('arr is array:', Array.isArray(arr)); // true
console.log('obj is array:', Array.isArray(obj)); // false


/// truy xuat phan tu trong mang
console.log(flowers[2]); // phan tu thu 3 trong mang