const sayHello = (name) => {
  // console.log(`hello there ${name}`);
  const something = 'jello';
  return `hello there ${name}`;
};

// console.log('do I get run?!?!?!');

const addTwo = (num) => num + 2;
// console.log(addTwo(5));
addTwo(10);

module.exports = sayHello;

// module.exports = {
//   sayHello,
//   addTwo
// };

// module.exports = [sayHello, addTwo];

// module.exports.sayHello = sayHello;
// module.exports.addTwo = addTwo;
