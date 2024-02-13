/**
 * LAM VIEC VOI CHUOI
 * keyword: js string method
 */

// 1. length
var mystring = 'xin chao viet nam'
console.log('>>> check length of string:', mystring.length);

// 2. find index
var string2 = 'this is this my string'
console.log('>>> index of "this":', string2.indexOf('this'));
console.log('>>> index of "camxamita":', string2.indexOf('camxamita'));

function searchString(inputString, keyword) {
  return inputString.indexOf(keyword) !== -1 ? `"${keyword}" was find in "${inputString}" at ${inputString.indexOf(keyword)}` : `"${keyword}" wasn't find in "${inputString}"`
}

/// tim kiem tu khoa trong 1 chuoi dua vao index
var mystr = 'this is my string'
console.log(searchString(mystr, 'is'));
console.log(searchString(mystr, 'us'));
console.log(searchString(mystr, 'long'));

console.log('>>> search attribute:', mystr.search('my s'))

/// cut string
var fullname = 'LY THANH LONG'
// expect: chi tra ve lastname
function getLastName(fullname) {
  let _fName = String(fullname)
  let lastSpace = _fName.lastIndexOf(' ')
  return _fName.substring(lastSpace + 1, _fName.length) // using substring
}

console.log('>>> get lastname:', getLastName(fullname));

// 2nd solution
var outputstring = fullname.slice(3)
console.log('>>> after slice:', outputstring);
/// truyen so am de cat nguoc tu cuoi chuoi, vidu:
console.log('>>> cat nguoc:', fullname.slice(-4)) // 'LY THANH LONG' -> 'LONG'


// replace
var mstr = 'hello world, wellcome to my JS course, lesson 1 - what is JS'
// without REGEX: only first searchvalue is replaced
console.log('>>> without regex:', mstr.replace('JS', 'Javascript'))

// within REGEX: replace all searchvalue present in input string
console.log('>>> within regex:', mstr.replace(/JS/g, 'Javascript'));


// trim: Removes the leading and trailing white space and line terminator characters from a string, eg:
var testTrim = '   xin chao moi nguoi  '
console.log('>>> before trim:', testTrim, testTrim.length);
console.log('>>> after trim:', testTrim.trim(), testTrim.trim().length);


// split: 
var testSplit = 'Java - PHP - Ruby - C# - C++'
console.log('>>> after split:', testSplit.split(' - '));