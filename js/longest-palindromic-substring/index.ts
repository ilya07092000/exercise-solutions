function longestPalindrome(s: string): string {
  let longest = '';

  for (let i = 0; i < s.length; i += 1) {
    let left = i;
    let right = i;

    while (right < s.length && s[left] === s[right + 1]) {
      right += 1;
    }

    while (left > 0 && right < s.length && s[left - 1] === s[right + 1]) {
      left -= 1;
      right += 1;
    }

    const candidate = s.slice(left, right + 1);
    longest = longest.length > candidate.length ? longest : candidate;
  }

  return longest;
}
