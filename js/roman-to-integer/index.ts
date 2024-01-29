const symbolMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const isDecrementingSymbol = (symbol, nextSymbol) => {
  switch (symbol) {
    case 'I':
      return nextSymbol === 'V' || nextSymbol === 'X';

    case 'X':
      return nextSymbol === 'L' || nextSymbol === 'C';

    case 'C':
      return nextSymbol === 'D' || nextSymbol === 'M';

    default:
      return false;
  }
};

function romanToInt(s: string): number {
  let result = 0;
  let idx = 0;

  while (idx < s.length) {
    let symbol = s[idx];
    const nextSymbol = s[idx + 1];
    let num = symbolMap[symbol];

    if (nextSymbol && isDecrementingSymbol(symbol, nextSymbol)) {
      const nextNum = symbolMap[nextSymbol];
      num = nextNum - num;
      idx += 1;
    }

    result += num;
    idx += 1;
  }

  return result;
}
