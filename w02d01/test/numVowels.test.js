const assert = require('chai').assert;
const numVowels = require('../numVowels');

describe('tests for numVowels function', () => {

  it.skip('returns 3 when given the string "orange"', () => {
    const actual = numVowels('orange');
    const expected = 3;

    assert.strictEqual(actual, expected);
  });

  it('returns 5 when given the string "lighthouse labs"', () => {
    const actual = numVowels('lighthouse labs');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('returns 5 when given the string "aeiou"', () => {
    const actual = numVowels('aeiou');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('returns null when not given a string', () => {
    const actual = numVowels();
    const expected = null;

    assert.strictEqual(actual, expected);
  });

  it('is still pending');

});
