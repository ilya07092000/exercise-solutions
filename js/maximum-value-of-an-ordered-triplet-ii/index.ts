
function maximumTripletValue(nums: number[]): number {
  let leftNumIndex = 0;
  let rightNumIndex = 1;
  let biggestNumIndex = 2;
  let maxDiff = nums[leftNumIndex] - nums[rightNumIndex];
  let maxResult = maxDiff * nums[biggestNumIndex];

  for (let i = 2; i < nums.length; i += 1) {
      biggestNumIndex = i;

      if (nums[i - 1] > nums[leftNumIndex]) {
          leftNumIndex = i - 1;
          rightNumIndex = i - 1;
      } else if (nums[i - 1] < nums[rightNumIndex]) {
          rightNumIndex = i - 1;
      }

      maxDiff = Math.max(maxDiff, nums[leftNumIndex] - nums[rightNumIndex]);
      maxResult = Math.max(maxResult, maxDiff * nums[biggestNumIndex]);
  }

  return maxResult;
};