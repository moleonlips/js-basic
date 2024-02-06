// Hieu hon ve cau lenh dieu kien va phep so sanh

var a = 1;
var b = 2;

var checking = a > b && a > 0

checking ? console.log('a < b') : console.log('a > b')
console.log(checking);


/**
 * Khi su dung toan tu logic:
 * - TH1: &&
 * => neu cac menh de cung mang gia tri truthy, => ket qua se la gia tri cua menh de cuoi cung
 * => neu trong bieu thuc logic co 1 hoac nhieu menh de mang gia tri falsy, => ket qua se la gia tri cua menh de falsy xuat hien dau tien
 * 
 * - TH2: ||
 * => neu cac menh de cung mang gia tri falsy, => ket qua se laf gia tri cua menh de dau tien
 * => neu co 1 hoac nhieu menh de mang gia tri truthy, => ket qua se la gia tri cua menh de truthy xuat hien dau tien
 */


// &&
checking = 'B' && 0 && undefined && null
console.log(checking);

checking = 1 && 0 && 6
console.log(checking);


// ||
checking = 0 || 'B' || null || 90
console.log(checking);

checking = 1 || 0 || 6
console.log(checking);