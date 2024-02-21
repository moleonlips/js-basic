/**
 * Doi tuong Date trong JS
 */

var date = new Date()
// console.log(typeof date); // check kieu du lieu
// console.log(date); // tra ve gia tri

var date2 = Date() // typeof = string, khong su dung de truy xuat vao cac phuong thuc, thoc tinh cua doi tuong Date duoc
// console.log(date);

// mot so phuong thuc va thuoc tinh cua Date()
// console.log(date.getFullYear()); // Gets the year, using local time.
// console.log(date.getHours()); // Gets the hours in a date, using local time.
// console.log(date.getMinutes()); // Gets the minutes of a Date object, using local time
// console.log(date.getDay()); // Gets the day of the week, using local time
// console.log(date.getMonth()); // Gets the month, using local time
// console.log(date.getDate()); // Gets the day-of-the-month, using local time
// console.log(date.getTime()); // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC



/**
 * bai tap thuc hanh, tao dong ho dien tu
 */

function formatString(string) {
  return string.length < 2 ? `0${string}` : string
}

function returnTime() {
  console.clear();
  var h = new Date().getHours().toString()
  var m = new Date().getMinutes().toString()
  var s = new Date().getSeconds().toString()
  console.log('Thoi gian:');
  returnDate();
  console.log(formatString(h) + ':' + formatString(m) + ':' + formatString(s));
}

function returnDate() {
  var y = new Date().getFullYear().toString()
  var m = (new Date().getMonth() + 1).toString()
  var d = new Date().getDate().toString()
  var day = (new Date().getDay() + 1).toString()

  var mm = m.length > 1 ? m : `0${m}`
  var dd = d.length > 1 ? d : `0${d}`
  var ddd = ''
  switch (day) {
    case '2':
      ddd = 'Thu hai'
      break;
    case '3':
      ddd = 'Thu ba'
      break;
    case '4':
      ddd = 'Thu tu'
      break;
    case '5':
      ddd = 'Thu nam'
      break;
    case '6':
      ddd = 'Thu sau'
      break;
    case '7':
      ddd = 'Thu bay'
      break;
    case '1':
      ddd = 'Chu nhat'
      break;
    default:
      break;
  }
  console.log(`${ddd}, ngay ${dd} thang ${mm} nam ${y}`)
}

setInterval(() => {
  returnTime();
}, 1000)
