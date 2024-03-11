function customSortString(order: string, s: string): string {
  const resultObj = {};
  resultObj[order.length] = '';

  const orderMap = order.split('').reduce((acc, curr, idx) => {
    acc[curr] = idx;
    return acc;
  }, {});

  for (let i = 0; i < s.length; i += 1) {
    const letter = s[i];

    if (letter in orderMap) {
      const letterPosition = orderMap[letter];
      resultObj[letterPosition] ??= '';
      resultObj[letterPosition] += letter;
    } else {
      resultObj[order.length] += letter;
    }
  }

  let resultStr = '';
  for (let i = 0; i < order.length + 1; i += 1) {
    resultStr += resultObj[i] || '';
  }

  return resultStr;
}
