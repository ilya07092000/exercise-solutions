function countSubstrings(s: string): number {
  let counter = s.length;

  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j < s.length; j += 1) {
      if (s[i] === s[j] && isPalindrome(s.slice(i, j + 1))) {
        counter += 1;
      }
    }
  }

  return counter;
}

const isPalindrome = s => {
  if (!s) {
    return false;
  }

  const middle = Math.floor(s.length / 2);
  for (let i = 0; i < middle; i += 1) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
};

export {};
