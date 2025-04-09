function minOperations(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);

  if (nums[nums.length - 1] < k) {
    return -1;
  }

  let currentNumber = nums[0];
  let counter = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== currentNumber && currentNumber > nums[i]) {
      counter += 1;
      currentNumber = nums[i];
    }
  }

  if (currentNumber > k) {
    currentNumber = k;
    counter += 1;
  }

  return currentNumber === k ? counter : -1;
}

// [9,7,5,3] - 7
// [7, 7, 5, 3] 5
// [5, 5, 5, 3] - 3
// [3, 3, 3, 3] - 1
// [1, 1, 1, 1] - 1
