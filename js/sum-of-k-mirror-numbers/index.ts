const numToKBase = (num: number, k: number) => {
  let result = '';
  let currentNumber = num;

  while (currentNumber !== 0) {
    result += currentNumber % k;
    currentNumber = Math.floor(currentNumber / k);
  }

  return result;
};

const getOddPalindrome = (number: number) => {
  if (number < 10) {
    return number;
  }

  const numString = String(number);

  return Number(
    `${numString}${numString
      .slice(0, numString.length - 1)
      .split('')
      .reverse()
      .join('')}`,
  );
};

const getEvenPalindrome = (number: number) => {
  const numString = String(number);

  return Number(`${numString}${numString.split('').reverse().join('')}`);
};

const isPalindrome = (str: string) => {
  return str === str.split('').reverse().join('');
};

function kMirror(k: number, n: number): number {
  let result = 0;
  let amount = 0;

  for (let i = 1; i > 0 && n > 0; i *= 10) {
    for (let j = i; j < i * 10 && n > 0; j += 1) {
      const candidate = getOddPalindrome(j);

      if (isPalindrome(numToKBase(candidate, k))) {
        result += candidate;
        amount += 1;
        n -= 1;
      }
    }

    for (let j = i; j < i * 10 && n > 0; j += 1) {
      const candidate = getEvenPalindrome(j);

      if (isPalindrome(numToKBase(candidate, k))) {
        result += candidate;
        amount += 1;
        n -= 1;
      }
    }
  }

  return result;
}
