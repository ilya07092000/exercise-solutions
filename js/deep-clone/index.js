const objForClone = {
  test: 123,
  name: {
    another: 3,
    innerSome: {
      other: 123,
    },
    inner1: {
      someValue: 2,
      inner2: {
        bla: 3,
        array: [1, 2, 3, {test: 123}, [1, {anotherTest: 789}]],
      },
    },
  },
  test2: 1234,
};

/**
 * with recursion
 */

const withRecursion = obj => {
  let result = {};

  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    for (let key in obj) {
      result[key] = withRecursion(obj[key]);
    }
  } else if (Array.isArray(obj)) {
    return obj.map(withRecursion);
  } else {
    return obj;
  }

  return result;
};
// const copy = withRecursion(objForClone);
// console.log(copy === objForClone);
// console.log(copy.name.inner1.inner2 === objForClone.name.inner1.inner2);

/**
 * without recursion
 */
const deepClone = obj => {
  const result = {};
  const stack = [[obj, result]];

  while (stack.length) {
    const [original, clone] = stack.pop();

    if (Array.isArray(original)) {
      original.forEach(item => {
        if (Array.isArray(item)) {
          const arrCopy = [];
          stack.push([item, arrCopy]);
          clone.push(arrCopy);
        } else if (typeof item === 'object' && item !== null) {
          const objCopy = {};
          stack.push([item, objCopy]);
          clone.push(objCopy);
        } else {
          clone.push(item);
        }
      });
    } else {
      for (let key in original) {
        const value = original[key];
        if (
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value)
        ) {
          clone[key] = {};
          stack.push([original[key], clone[key]]);
        } else if (Array.isArray(value)) {
          clone[key] = [];
          stack.push([original[key], clone[key]]);
        } else {
          clone[key] = value;
        }
      }
    }
  }

  return result;
};
const copy = deepClone(objForClone);
// console.log(copy === objForClone);
// console.log(copy.name.inner1.inner2 === objForClone.name.inner1.inner2);
