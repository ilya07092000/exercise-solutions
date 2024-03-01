function maximumOddBinaryNumber(s: string): string {
  /**
   * Count how many "1" in a string
   */
  let ones = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1') {
      ones += 1;
    }
  }

  /**
   * use all ones - 1, since one "1" we keep to put at the end because we need odd number
   */
  let result = '';
  for (let i = 0; i < s.length - 1; i += 1) {
    if (ones > 1) {
      result += '1';
      ones -= 1;
    } else {
      result += '0';
    }
  }

  // use last "1"
  result += '1';
  return result;
}
