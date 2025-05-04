function pushDominoes(dominoes: string): string {
  if (dominoes.length === 1) {
    return dominoes;
  }

  let result = '';

  let rIndex = null;

  for (let i = 0; i < dominoes.length; i += 1) {
    const element = dominoes[i];

    if (element === '.') {
      continue;
    }

    if (element === 'L') {
      // no R before
      if (element === 'L' && rIndex === null) {
        let gap = i - result.length + 1;

        result = `${result}${'L'.repeat(gap)}`;
      } else if (element === 'L' && rIndex !== null) {
        // found L with after R
        let dotsAmount = i - rIndex - 1;

        if (dotsAmount === 0 || dotsAmount === 1) {
          result += '.'.repeat(dotsAmount);
        } else {
          const isEvenDotsAmount = dotsAmount % 2 === 0;
          const dotsToProcess = Math.floor(dotsAmount / 2);
          let convertedString = isEvenDotsAmount ? '' : '.';

          for (let dotIndex = 0; dotIndex < dotsToProcess; dotIndex += 1) {
            convertedString = `R${convertedString}L`;
          }

          result += convertedString;
        }

        rIndex = null;
        result += 'L';
      }
    } else if (element === 'R') {
      let gapBeforePrevElement = i - result.length;
      let lastSymbol = rIndex !== null ? 'R' : '.';

      if (gapBeforePrevElement > 0) {
        result += lastSymbol.repeat(gapBeforePrevElement);
      }

      rIndex = i;
      result += 'R';
    }
  }

  let lastSymbol = rIndex !== null ? 'R' : '.';

  return `${result}${lastSymbol.repeat(dominoes.length - result.length)}`;
}
