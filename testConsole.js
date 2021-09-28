// var readline = require('readline')
//
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// rl.question('What do you want to input?', function (answer) {
//   // TODO: Log the answer in a database
//   console.log('Ok, you jast input:', answer)
//
// })

// function test (a, b, c) {
//   var test
//   test = a + b + c
//   return test
// // console.log (test + ' cm');
// }
// // console.log(test(3, 5, 6))
// var test0 = test(5, 5, 5)
// // if (test0 === 15) {
// //   console.log('OK=15')
// // } else if (test0 >= 20 && test0 <= 30) {
// //   console.log('from 20 to 30')
// // } else if ((test0 >= 30 && test0 <= 40) || test0 > 50) {
// //   console.log('from 20 to 30 or > 50')
// // }
// switch (test0) {
//   case 15:
//     console.log('OK=15')
//     break
//   case 20:
//     console.log('OK=20')
// }5
// var number = 1
// while (number <= 10) {
//   console.log(number + '_yeep!')
//   number = number + 1
// }
// var number0 = 11
// do {
//   number0 = number0 - 1
//   console.log(number0 + ' ok')
// } while (number0 > 1)
// console.log('done')
var arr = [1, 2, 3, 5]
for (var i = 0, test = 0; i < arr.length; i++) {
  if (arr[i] === 2 || arr[i] === 3) {
    // break
    continue
  }
  test += arr[i]
}
console.log(test)
