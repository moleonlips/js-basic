/**
 * Toan tu so hoc - detail
 *  1. cong
 *  2. tru
 *  3. nhan
 *  4. luy thua
 *  5. chia
 *  6. chia lay du
 *  7. tang 1 gia tri so
 *  8. giam 1 gia tri so
 */

// cong
var a;
a = 2 + 5
//console.log(a);

console.log('--- Hậu tố ---');

var number1 = 1;

console.log(number1++); // 1
console.log(number1); // 2

console.log(number1++); // 2
console.log(number1); // 3

console.log('--- Tiền tố ---');

var number2 = 1;

console.log(++number2); // 2
console.log(number2); // 2

console.log(++number2); // 3
console.log(number2); // 3

// Toán tử -- tương tự các bạn nhé, điểm khác
// là thay vì cộng 1 trừ toán tử -- sẽ trừ 1

console.log("Conclude: khi su dung ++ lam hau to,\nSe lam tang gia tri cua bien len 1 va tra ve gia tri cua bien truoc khi tang")
console.log(`Tien do thi khac, no tang gia tri cua bien va tra ve gia tri cua bien sau khi tang`);

// example
var number = 10;

/**
 * ++number => 11 * 2 => 22
 * number => 11
 * --numner => --11 => 11 * 2
 * 10 + 10 = 0
 */

var output = ++number * 2 - number-- * 2
console.log(`++number * 2 - number-- * 2:`, output);

// noi chuoi
var firstName = 'Thanh'
var lastName = 'Long'

fullName = firstName + ' ' + lastName
console.log(fullName);