function findMaxLength(nums: number[]): number {
  let result = 0;
  /**
   * KEEP PREFIX SUM
   */
  let counter = 0;
  /**
   * Save The Prefix Sum Index
   */
  const sumMap = {};

  for (let i = 0; i < nums.length; i += 1) {
    /**
     * For 0 we descrease and for 1 increase  the prefix sub by 1
     */
    const value = nums[i] === 0 ? -1 : +1;
    counter += value;

    /**
     * If sum is 0 it means that we met equal distribution of 1 and 0
     */
    if (counter === 0) {
      result = i + 1;
    } else if (counter in sumMap) {
      // if the prefix sum is already is in the sum map
      // then the difference index betwen this two sums is the conigious array length
      const firstSumIdx = sumMap[counter];
      const arrLength = i - firstSumIdx;
      result = Math.max(arrLength, result);
    } else {
      sumMap[counter] = i;
    }
  }

  return result;
}
