const isNumber = value => /^-?[0-9]+$/gi.test(value);

function evalRPN(tokens: string[]): number {
  const nums = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (isNumber(token)) {
      nums.push(token);
    } else {
      const operand = token;
      let op2 = nums.pop();
      let op1 = nums.pop();
      nums.push(makeOperation(+op1, +op2, operand));
    }
  }

  return nums[nums.length - 1];
}

const makeOperation = (op1, op2, operation) => {
  switch (operation) {
    case '+':
      return op1 + op2;

    case '-':
      return op1 - op2;

    case '*':
      return op1 * op2;

    case '/':
      const result = op1 / op2;
      return result < 0 ? Math.ceil(result) : Math.floor(result);

    default:
      throw new Error('Not A Valid Operation!');
  }
};
