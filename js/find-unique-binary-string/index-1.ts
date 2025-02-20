/**
 *  Diagonal Flipping
 */

function findDifferentBinaryString(nums: string[]): string {
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i][i] === '0') {
      result.push('1');
    } else {
      result.push('0');
    }
  }

  return result.join('');
}
