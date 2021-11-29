// describe(); // wrapper (optional)

// it(); // is the test

// const assert = require('assert');
const assert = require('chai').assert;

// const chai = require('chai');
// const assert = chai.assert;

const sayHello = require('../say-hello');

describe('tests for the sayHello function', () => {

  it('returns the correct value when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'hello there Alice';

    assert.strictEqual(actual, expected);
  });

});
