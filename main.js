/**
 * Luu y: Thu tu uu tien doi voi cac dieu kien re nhanh:
 * - Cac dieu kien nao mang tinh dam bao cao hon (neu no xay ra thi cac dieu kien khac se xay ra) thi nen duoc uu tien kiem tra truoc.
 * @param {int} a So tu nhien cho truoc
 * @returns Tra ve kha nang chia het cua 'a' cho cac so 3, 5, 15 tuong ung voi cac gia tri 1, 2, 3
 */

function run(a) {
  if (a % 15 === 0) {
    return 3
  }
  else if (a % 5 === 0) {
    return 2
  }
  else if (a % 3 === 0) {
    return 1
  }
  else {
    return 0
  }
}

// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3