/**
 * Lam viec voi array
 * 
 * 1. tostring
 * 2. join
 * 3. pop
 * 4. push
 * 5. shift
 * 6. unshift
 * 7. splicing
 * 8. concat
 * 9. slicing
 */

var flowers = [
  'rose',
  'sunflw',
  'violet'
]

// to string
var arrToString = flowers.toString();
console.log('>>> arr to string:', arrToString);

// join
var joinArr = flowers.join('...') // noi cac phan tu cua mang bang 1 ki tu truyen vao
console.log('>>> joinn arr:', joinArr);

// pop: xoa phan tu cuoi mang, va tra ve phan tu da xoa, truong hop mang rong se tra ve undefined
var afterPop = flowers.pop();
console.log('>>> poped item:', afterPop, '\narr after pop:', flowers);

// push: them 1 hoac nhieu phan tu vao cuoi mang, va tra ve so luong phan tu sau khi them
var afterPush = flowers.push('Lily', 'Begonia')
console.log('>>> check after push:', afterPush);

console.log('before shift:', flowers);
var atShift = flowers.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log('check shift:', atShift, flowers);


var mUnshift = flowers.unshift('Daisy') //Inserts new elements at the start of an array, and returns the new length of the array.
console.log('>>> after unshift:', mUnshift);

console.log('precheck:', flowers);
var doSclicing = flowers.splice(1, 1, 'hoa hong') //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log('check splice:', doSclicing); // xoa 1 or n phan tu trong mang, co the thay the phan tu moi vao vi tri bi xoa, tra ve ds cac phan tu bi xoa
// Lily, Begonia

var arr1 = [1, 2]
var arr2 = [3, 4]
var resultArr = arr1.concat(arr2, flowers) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// ket hop 2 hoac nhieu mang, phuong thuc nay tra ve mang moi ma k lam thay doi cac mang ban dau
console.log('>>> check concating:', arr1);
console.log('>>> check concating:', arr2);
console.log('>>> check concating:', resultArr);


var oriArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var checkSlicing = oriArr.slice(0, 9)
var checkSlicing2 = oriArr.slice(0, -7)
console.log('checkSlicing:', checkSlicing);
console.log('checkSlicing2:', checkSlicing2);