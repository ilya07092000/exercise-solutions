function rearrangeArray(nums: number[]): number[] {
  const result = [];
  let positivePointer = 0;
  let negativePointer = 0;

  while (result.length < nums.length) {
    const numPosition = result.length;
    const isEvenNumber = numPosition % 2 === 0;

    if (isEvenNumber) {
      while (nums[positivePointer] < 0) {
        positivePointer += 1;
      }
      result.push(nums[positivePointer]);
      positivePointer += 1;
    } else {
      while (nums[negativePointer] > 0) {
        negativePointer += 1;
      }
      result.push(nums[negativePointer]);
      negativePointer += 1;
    }
  }

  return result;
}

export {};
