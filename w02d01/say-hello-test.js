const assert = require('assert');

const sayHello = require('./say-hello');
// console.log('sayHello', sayHello);

const actual = sayHello('Alice');
const expected = 'hello there Alice';

// console.log(actual === expected);

// console.assert(false, 'i get printed');
// console.assert(true, 'i dont get printed');

console.assert(actual === expected, 'we got the wrong result');

assert.strictEqual(actual, expected); // error out


// assert.equal(1, '1', 'regular equal'); // ==
// assert.strictEqual(1, '1', 'strict equal'); // ===
