function decodeString(s: string): string {
  const traverse = idx => {
    // store result
    let result = '';

    // store a number of repeats
    let currNum = '';
    // store symbol which need to repeat
    let symbol = '';
    // track brackets [ ]
    let stack = [];

    for (let i = idx; i < s.length; i += 1) {
      const el = s[i];
      // check that element is number and we are not inside other brackets
      if (isDigit(el) && !stack.length) {
        currNum += el;
        // otherwise inside other brackets we make recursion
      } else if (isDigit(el) && stack.length === 1) {
        symbol += traverse(i);
        // skip the next numbers in order to not call the recursion in the same brackets
        while (isDigit(s[i + 1])) {
          i += 1;
        }
        // means that we start searching for symbols
      } else if (el === '[') {
        stack.push(el);
        continue;
      } else if (el === ']') {
        // end of symbols, sum result
        result += symbol.repeat(+currNum);
        currNum = '';
        symbol = '';
        // if we met the close bracket but we are not inside pair of brackets
        if (!stack.length) {
          break;
        }
        stack.pop();
      } else {
        if (stack.length === 1) {
          symbol += el;
        } else if (stack.length === 0) {
          result += el;
        }
      }
    }

    return result;
  };

  return traverse(0);
}

const isDigit = s => /^\d+$/gi.test(s);
