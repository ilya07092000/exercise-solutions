const possibleLetters = ['a', 'b', 'c'];

function getHappyString(n: number, k: number): string {
  const happyStrings = [];

  const backtrack = (candidateString = '') => {
    if (candidateString.length === n) {
      happyStrings.push(candidateString);

      return true;
    }

    if (happyStrings[k - 1]) {
      return;
    }

    possibleLetters.forEach(letter => {
      const lastLetter = candidateString[candidateString.length - 1];

      if (!lastLetter || lastLetter !== letter) {
        backtrack(`${candidateString}${letter}`);
      }
    });
  };

  backtrack();

  return happyStrings[k - 1] || '';
}
