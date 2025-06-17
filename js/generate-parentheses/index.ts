function generateParenthesis(n: number): string[] {
  const result = [];
  const desiredAmount = n * 2;

  const backtrack = (bracketsAmount, brackets, open, close) => {
    if (bracketsAmount === desiredAmount && open === close) {
      result.push(brackets);
    } else {
      const remainBrackets = desiredAmount - bracketsAmount;

      if (open < n) {
        backtrack(bracketsAmount + 1, `${brackets}(`, open + 1, close);
      }

      if (close < open) {
        backtrack(bracketsAmount + 1, `${brackets})`, open, close + 1);
      }
    }
  };

  backtrack(0, '', 0, 0);

  return result;
}
