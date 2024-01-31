/**
 * MONOTONIC MIN STACK
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const result = [];
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i -= 1) {
    const temp = temperatures[i];
    // remove els from the stack while we will find greater temperature than current one
    while (stack.length && temperatures[stack[stack.length - 1]] <= temp) {
      stack.pop();
    }

    // if stack is empty it means that we do not have bigger element further
    if (!stack.length) {
      result[i] = 0;
    } else {
      // otherwise we found greater temperature at the top of the stack
      // push index differences as a result
      result[i] = stack[stack.length - 1] - i;
    }

    // push current index to the stack
    stack.push(i);
  }

  return result;
}
