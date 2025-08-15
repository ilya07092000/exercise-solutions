function largestGoodInteger(num: string): string {
  let result = '';

  let numLength = 0;
  let currentNum = null;

  for (let i = 0; i < num.length; i += 1) {
    const curr = num[i];

    if (currentNum === null) {
      currentNum = curr;
      numLength = 1;
    } else if (currentNum === curr) {
      numLength += 1;
    } else {
      numLength = 1;
      currentNum = curr;
    }

    if (numLength === 3) {
      result = currentNum > result ? currentNum : result;
    }
  }

  return result ? result.repeat(3) : result;
}
