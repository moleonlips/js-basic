/**
 * gioi thieu 1 so ham built-in co trong javascript
 * 1. alert
 * 2. console
 * 3. confirm
 * 4. promt
 * 5. settimeout
 * 6. setinterval
 */

console.log(`this is a log`)
console.log(123)

var fullName = `xin chao vietnam`
console.log(fullName);
console.warn(`log vua thoi`);

var isAdult = confirm(`Ban da tren 18 tuoi`);
console.log(`- confirmed: `, isAdult);

var whatYouEnter = prompt("Enter anything you are thinking about!")
console.log(`- promted: `, whatYouEnter);

setTimeout(() => {
  console.log(`I waited 1s`);
}, 1000);
setTimeout(() => {
  console.log(`I waited 2s`);
}, 2000);
setTimeout(() => {
  console.log(`I waited 3s`);
}, 3000);


/// Send current time after each a second
// setInterval(() => {
//   console.log('counting up: ', new Date().getSeconds(), new Date().getMinutes(), new Date().getHours());
// }, 1000);
