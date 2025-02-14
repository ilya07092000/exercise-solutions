const sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

// const curry = fn => {
//   const argumentsList = [];

//   return function curried(...args) {
//     argumentsList.push(...args);

//     if (argumentsList.length >= fn.length) {
//       return fn(...argumentsList);
//     }

//     return curried;
//   };
// };

// const curry = fn => {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     }

//     return curried.bind(this, ...args);
//   };
// };

// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3)(4)(5));
