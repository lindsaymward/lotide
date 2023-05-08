const countLetters = function(sentence) {
  let count = {};
  let lowerCaseSentence = sentence.toLowerCase();
  for (let letter of lowerCaseSentence) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

module.exports = countLetters;