// object prototype - basic
/**
 * 1. prototype la gi (~ la nguyen mau cua doi tuong)
 * 2. su dung prototype khi nao?
 */

function User(firstName, lastName, avatar) {
  this.firstName = firstName
  this.lastName = lastName
  this.avatar = avatar

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`
  }
}

// dinh nghia them 1 thuoc tinh ben ngoai ham tao
User.prototype.className = 'gto'
User.prototype.sayHi = function () {
  return `hi my name is ${this.firstName} ${this.lastName}`
}

var u1 = new User(`thanh`, `long`, `avt.jpg`);
var u2 = new User(`tun`, `pham`, `avt.jpg`);
var u3 = new User()

console.log(`>>> check u3`, u3); // check u3 before set value

u3 = {
  avatar: 'xinchao.png',
  firstName: 'do',
  lastName: 'hieu'
}
console.log(u3);

u3.firstName = 'chiu'
u3.lastName = 'van'
u3.avatar = 'anonimous.webs'
console.log(u3);

console.log(u1.className);
console.log(u2.sayHi());
console.log('>>> check u3 after set value:', u3);
console.log(u3 === u2); // true

/**
 * bai tap thuc hanh:
 * tao 1 object constructor Student, voi cac propertis: firstName, lastName
 * sau do dinh nghia them 1 phuong thuc getFullName tra ve fullname cua Student
 */

function Student(firstName, lastName) {
  this.firstName = firstName,
    this.lastName = lastName
}

Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}

// kiem tra ket qua:
console.log(`Kiem tra ket qua:`);
var stu1 = new Student('tran', 'uyen')
console.log(`stu1:`, stu1);
console.log(`getFullName method: `, stu1.getFullName());