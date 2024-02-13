/** THAM SO VA DOI SO TRONG HAM
 * 1. Tham so:
 * - Dinh nghia
 * - Kieu du lieu
 * - Tinh private - chi su dung duoc trong ham
 * - 1 tham so
 * - nhieu tham so
 * 
 * 2. Tham so (parameters):
 * - duoc xac dinh khi dinh nghia ham
 * - 1 tham so hoac nhieu tham so
 * 
 * 3. Doi so (arguments):
 * - duoc truyen khi thuc thi (excute) ham
 * - co the truyen 1 hoac nhieu doi so, tuy thuoc vao so luong tham so khi dinh nghia (declare) ham
 */

function writeLog(msg) {
  console.log(msg)
}

writeLog('xin chao moi nguoi')
// => 1 tham so

function checkGender(hasPenis, hiforgirl, hiforboy) {
  if (hasPenis == false) {
    console.log(`this is a girl`, `and she says ${hiforgirl}`);
  }
  else {
    console.log(`this is a boy`, `and she says ${hiforboy}`);
  }
}

checkGender(true, 'hi mom', `hello mther fuker`)
checkGender(false, 'hi mom', `hello mther fuker`)