const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    let letter = sentence[index];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [Number(index)];
      } else {
        results[letter].push(Number(index));
      }
    }
  }
  return results;
};

// console.log(letterPositions("hi there"));
// assertArraysEqual(letterPositions("hello")["h"], [0]);
// assertArraysEqual(letterPositions("hello")["e"], [1]);
// assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
// assertArraysEqual(letterPositions("hello")["o"], [4]);

// assertArraysEqual(letterPositions("hi there")["t"], [3]);

module.exports = letterPositions;