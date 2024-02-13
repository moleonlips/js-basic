/**
 * STRING IN JS
 * 1. Creating
 * - how to creata a string
 * - what is the best way that we should to use
 * - data type checking
 * 
 * 2. when need backslash (\)
 * 
 * 3. length of string
 * 
 * 4. clean code
 * 
 * 5. template strign ES6
 * - gioi han chuoi ben trong cap dau ``
 */

// 1.
var s1 = 'String 1' // faster, should use
var s2 = new String('String 2') // lower, only learn to know
console.log(typeof s1);

// 2. [keysearch: backslash in JS]
console.log('when need \'backslash\'');
console.log('day la dau "\\"');

// 3. length of string
var myString = 'ly thanh long'
console.log('>>> length of \'ly thanh long\':', myString.length);


// 4. (cach trinh bay khi gap chuoi qua dai)
var longString = 'xin chao viet nam, toi den tu my, nam nay 27 tuoi'
  + 'xin chao viet nam, toi den tu my, nam nay 27 tuoi'
  + 'xin chao viet nam, toi den tu my, nam nay 27 tuoi'

console.log(longString);
console.log('>>> longStringUsingTemplateString: ', longStringUsingTemplateString);

// 5.
var firstName = 'Ly'
var lastName = 'Long'

console.log(`>>> check template string. \nToi la: ${firstName} ${lastName}`);