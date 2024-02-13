function firstPalindrome(words: string[]): string {
  return words.find(isPalindromic) || '';
}

const isPalindromic = str => {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
};
