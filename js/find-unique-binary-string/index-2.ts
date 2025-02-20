function findDifferentBinaryString(nums: string[]): string {
  const stack = ['0', '1'];
  const numsSet = new Set(nums);

  while (stack.length) {
    const currentString = stack.pop();

    if (
      !numsSet.has(currentString) &&
      currentString.length === nums[0].length
    ) {
      return currentString;
    }

    if (currentString.length < nums[0].length) {
      stack.push(`${currentString}0`);
      stack.push(`${currentString}1`);
    }
  }

  return '';
}
