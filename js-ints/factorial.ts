const factorial = (x: number): number => {
  if (x === 2) {
    return 2;
  }

  return x * factorial(x - 1);
};

console.log(factorial(5));
