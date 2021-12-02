// 99.99% you are going to use promises from outside function
const promiseGenerator = require('./helpers/promise-generator');

const myPromise = promiseGenerator('promise one');
console.log(myPromise);

// setTimeout(() => {
//   console.log(myPromise);
// }, 3001);

myPromise
  .then((data) => {
    console.log('1', data);
    return 'happy birthday';
  })
  .then((data) => {
    console.log('2', data);
  })
  .then((data) => {
    console.log('3', data);
  })
  .then((data) => {
    console.log('4', data);
  })


// yourFunc('happy birthday')
myPromise
  .then((value) => {
    console.log('the value is:', value);
    const newPromise = promiseGenerator('promise two', true);
    return newPromise;
  })
  .catch((err) => {
    console.log('1. an error has happened:', err);
    return 'something really bad has happened';
  })
  .then((returnVal) => {
    console.log('returnVal', returnVal);
  })
  .catch((err) => {
    console.log('2. an error has happened:', err);
  })
  
