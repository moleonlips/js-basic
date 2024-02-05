/**
 * FALSY trong JS
 * - 0
 * - false
 * - '' or ""
 * - undefined
 * - null
 * 
 * Truthy trong JS
 * !Falsy
 */

// comment all value except your expect value
var isSuccess = 'thanh long'
// isSuccess = 0
// isSuccess = false
// isSuccess = ''
// isSuccess = undefined
// isSuccess = NaN
// isSuccess = null

if (isSuccess) {
  console.log('>>> truthy');
}
else {
  console.log('>>> falsy')
}