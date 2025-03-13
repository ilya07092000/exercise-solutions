function minZeroArray(nums: number[], queries: number[][]): number {
  if (nums.every((num) => num <= 0)) {
      return 0;
  }

  const isValid = (k) => {
      const diffArr = new Array(nums.length + 1).fill(0);

      for (let i = 0; i < k; i += 1) {
          const [l, r, value] = queries[i];

          diffArr[l] = diffArr[l] + value * -1;
          diffArr[r + 1] = diffArr[r + 1] + value;
      }

      let prefixSum = 0;

      for (let i = 0; i < nums.length; i += 1) {
          prefixSum += diffArr[i];

          if (nums[i] - Math.abs(prefixSum) > 0) {
              return false;
          }
      }

      return true;
  }

  if (!isValid(queries.length)) {
      return -1;
  }

  // binary search
  let left = 0;
  let right = queries.length;

  while (left < right) {
      const middle = Math.floor((left + right) / 2);

      if (isValid(middle)) {
          right = middle;
      } else {
          left = middle + 1;
      }
  }

  return right;
};