/**
 * Follow up: Squaring each element and sorting the new array is very trivial,
 * could you find an O(n) solution using a different approach?
 * O(n)
 */

function sortedSquares(nums: number[]): number[] {
  let pointer1 = 0;
  let pointer2 = nums.length - 1;
  let result = new Array(nums.length);
  let idx = nums.length - 1;

  while (pointer1 <= pointer2) {
    const positive2 = Math.abs(nums[pointer2]);
    const positive1 = Math.abs(nums[pointer1]);

    if (positive2 >= positive1) {
      result[idx] = positive2 * positive2;
      pointer2 -= 1;
    } else {
      result[idx] = positive1 * positive1;
      pointer1 += 1;
    }

    idx -= 1;
  }

  return result;
}
