/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const countArr = nums.reduce(
    (acc, curr) => {
      acc[curr] += 1;
      return acc;
    },
    new Array(Math.max(...nums) + 1).fill(0),
  );

  let index = 0;

  for (let number = 0; number < countArr.length; number += 1) {
    const count = countArr[number];

    for (let i = 0; i < count; i += 1) {
      nums[index++] = number;
    }
  }
}
