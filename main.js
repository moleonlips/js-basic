/**
 * 1. khi function dat trung ten?
 * 2. khi khai bao bien trong ham
 * 3. dinh nghia ham trong ham
 */

// 1:
function myFnt() {
  console.log('1');
}
function myFnt() {
  console.log('2');
}
function myFnt() {
  console.log('3');
}
function myFnt() {
  console.log('4');
}
// => se thuc thi fucntion duoc khai bao cuoi cung

// 2:
function testVarInFnt() {
  var a = 1;
  console.log('>>> check var: ', a)
}
// => Ket luan: co the tao bien trong ham

// 3:
function dadFnt(pa) {
  function sonFnt(params) {
    return params
  }

  sonFnt(pa)
}

console.log(dadFnt(123));
// Concluding: able to defind a function inside another function