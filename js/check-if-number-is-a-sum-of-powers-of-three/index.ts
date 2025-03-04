function checkPowersOfThree(n: number): boolean {
  let currentNumber = n;

  while (currentNumber > 0) {
      if (currentNumber % 3 >= 2) {
          return false;
      }

      currentNumber = Math.floor(currentNumber / 3);
  }

  return true;
};