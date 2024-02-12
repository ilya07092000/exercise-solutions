type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const memo = {};

  return function (...args) {
    const argsString = args.join(',');
    if (argsString in memo) {
      return memo[argsString];
    }

    const result = fn(...args);
    memo[argsString] = result;
    return result;
  };
}
