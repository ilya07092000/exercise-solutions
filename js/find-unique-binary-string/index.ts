/**
 * Recursion
 */

function findDifferentBinaryString(nums: string[]): string {
  const numsSet = new Set(nums);
  const desiredLength = nums[0].length;

  const backtrack = (num = '') => {
      if (num.length === desiredLength) {
          if (numsSet.has(num)) {
              return;
          }

          return num;
      }

      let possibleResult = backtrack(`${num}1`);

      if (possibleResult) {
          return possibleResult
      }

      possibleResult = backtrack(`${num}0`);

      if (possibleResult) {
          return possibleResult
      }
  }

  return backtrack();
};