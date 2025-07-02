/**
 * SOLUTION WITH MAP
 */

// eslint-disable-next-line no-extend-native, func-names
Array.prototype.findUnique = function () {
  const elementsMap = this.reduce((acc, curr) => {
    if (!acc.has(curr)) {
      acc.set(curr, 0);
    }

    acc.set(curr, acc.get(curr) + 1);

    return acc;
  }, new Map());

  const result = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of elementsMap.entries()) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result;
};

/**
 * SOLUTION WITH OBJECT
 */

// eslint-disable-next-line no-extend-native, func-names
// Array.prototype.findUnique = function () {
//   const countMap = this.reduce((acc, curr) => {
//     if (!acc[curr]) {
//       acc[curr] = 0;
//     }

//     acc[curr] += 1;

//     return acc;
//   }, {});

//   return this.reduce((acc, curr) => {
//     if (countMap[curr] === 1) {
//       acc.push(curr);
//     }

//     return acc;
//   }, []);
// };

console.log([4, 1, 2, 3, 1, 5, 1].findUnique());
