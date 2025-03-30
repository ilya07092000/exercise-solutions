function lengthOfLongestSubstring(s: string): number {
  let leftPointer = 0;
  let letters = new Set();
  let result = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer += 1) {
    let newLetter = s[rightPointer];

    while (leftPointer <= rightPointer && letters.has(newLetter)) {
      letters.delete(s[leftPointer]);
      leftPointer += 1;
    }

    letters.add(newLetter);
    result = Math.max(result, rightPointer - leftPointer + 1);
  }

  return result;
}
