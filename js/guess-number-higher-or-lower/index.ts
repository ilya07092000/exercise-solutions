/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let start = 1;
  let end = n;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    const guessResult = guess(middle);

    if (guessResult === 0) {
      return middle;
    }

    if (guessResult === -1) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return 0;
}
