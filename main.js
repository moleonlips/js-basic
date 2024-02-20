/// object constructor
function User(firstName, lastName, avatar) {
  this.first = firstName
  this.last = lastName
  this.ava = avatar
  this.getFullName = function () {
    return this.first + ' ' + this.last
  }
}

var tlong = new User('ly', 'thnh', 'dz.jpg')

console.log(`>>> check tlong`);
console.log(tlong);
console.log(tlong.getFullName());

// check 1 doi tuong co phai duoc xay dung 1 mot constructor hay khong:
console.log('>> check is constructor:', tlong.constructor == User)

/// cach khac de tao object constructor:
var banThietKe = function (_material, _height, _width, _length, _nofloor) {
  this.material = _material
  this.height = _height
  this.width = _width
  this.length = _length
  this.nofloor = _nofloor

  this.getArea = function () {
    return this.width * this.length
  }
}

var firstHouse = new banThietKe('xi mang', 190, 10, 15, 4)
console.log(`>> check first house:`, firstHouse.getArea());

