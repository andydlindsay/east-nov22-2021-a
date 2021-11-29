const numVowels = (str) => {
  if (!str) {
    return null;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let total = 0;

  for (const character of str) {
    // determine if the character is a vowel
    if (vowels.includes(character)) {
      total += 1;
    }
  }

  return total;
};

module.exports = numVowels;
