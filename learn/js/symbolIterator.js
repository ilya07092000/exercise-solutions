Number.prototype[Symbol.iterator] = function* () {
  console.log(this);
  for (let i = 0; i < this; i += 1) {
    yield i;
  }
};

console.log(Number[Symbol.iterator]);

console.log(...15);

for (let num of 10) {
  console.log(num); // 0, 1, 2, 3, 4
}

/**
 * ------
 */

// const myNumbers = {
//   [Symbol.iterator]() {
//     let n = 0;
//     let done = false;

//     return {
//       next() {
//         if (done) return {value: undefined, done: true};

//         n += 10;
//         if (n === 100) done = true;

//         return {value: n, done};
//       },
//     };
//   },
// };

// // Используем for...of
// for (let num of myNumbers) {
//   console.log(num); // 10, 20, 30, ..., 100
// }

/**
 * -----
 */

// function range(n) {
//   return {
//     [Symbol.iterator]: function* () {
//       for (let i = 0; i < n; i++) {
//         yield i;
//       }
//     },
//   };
// }

// for (let num of range(5)) {
//   console.log(num); // 0, 1, 2, 3, 4
// }
