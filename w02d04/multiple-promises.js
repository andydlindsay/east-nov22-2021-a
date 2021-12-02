const promiseGenerator = require('./helpers/promise-generator');

const promiseOne = promiseGenerator('promise one', false, 5000, true);
const promiseTwo = promiseGenerator('promise two', false, 5000, true);
const promiseThree = promiseGenerator('promise three', false, 5000, true);
const promiseFour = promiseGenerator('promise four', false, 5000, true);
const promiseFive = promiseGenerator('promise five', false, 5000, true);

const promises = [promiseOne, promiseTwo, promiseThree, promiseFour, promiseFive];

Promise
  .race(promises)
  .then((justOneReturnVal) => {
    console.log('the winner is:', justOneReturnVal);
  });

// Promise.all(promises)
//   .then((arrOfReturnVals) => {
//     console.log(arrOfReturnVals);

//     const resultOfPromiseOne = arrOfReturnVals[0];
//     const resultOfPromiseTwo = arrOfReturnVals[1];
//   })
//   .catch((err) => {
//     console.log('error:', err);
//   });

// 3 5 2 = 10
// 3 5 2 = 5

// promiseOne
//   .then((data) => {
//     console.log('from promise one:', data);
//     const promiseTwo = promiseGenerator('promise two', false, 3000);
//     return promiseTwo;
//   })
//   .then((data) => {
//     console.log('from promise two:', data);
//   });
    

// promiseTwo
//   .then((data) => {
//     console.log('from promise two:', data);
//   });



// Promise.all()