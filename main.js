// object trong javascript
var myInfo = {
  name: 'thanh long',
  age: 12,
  address: 'ecopark',
  myKey: NaN
}

myInfo['cm-hc-cc'] = '09054937858394'

myInfo.name = 'other name'


console.log(myInfo);
/**{
 name: 'other name',
 age: 12,
 address: 'ecopark',
 'cm-hc-cc': '09054937858394'
} */

var myKey = 'address'
console.log(myInfo[myKey]) // = myInfo['address'] => ecopark

// dinh nghia them 1 cap key-value trong object
console.log('>>> before:', myInfo);
var emailKey = 'email'
myInfo = {
  ...myInfo,
  [emailKey]: 'tonthel@gmail.com'
}
console.log('>>> after:', myInfo);

// xoa 1 cap key-value trong obj:
console.log('------\nxoa 1 cap key - value trong obj');
console.log(`before: `, myInfo);
delete myInfo.myKey
console.log(`after: `, myInfo);
console.log('>>> myKey is deleted');

// can us save a value as a function
var testValueisAFunction = {
  name: 'thanh long', // aka a Property (thuoc tinh)
  getname: function () { // aka a Method (phuong thuc)
    return this.name // meaning this object
  }
}
console.log('>>> check function:');
console.log(testValueisAFunction.getname()); // 'thanh long'

