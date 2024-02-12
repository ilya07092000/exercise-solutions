type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  if (n === 0) {
    return arr;
  }

  const traverse = (depth, list) => {
    const result = [];
    for (let i = 0; i < list.length; i += 1) {
      const element = list[i];
      if (Array.isArray(element) && depth < n) {
        result.push(...traverse(depth + 1, element));
      } else {
        result.push(element);
      }
    }

    return result;
  };

  return traverse(0, arr);
};
