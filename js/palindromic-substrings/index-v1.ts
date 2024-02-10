function countSubstrings(s: string): number {
  const dp = [];
  s.split('').forEach(item => dp.push([item]));
  let counter = s.length;

  for (let i = 1; i < dp.length; i += 1) {
    const letter = s[i];
    const candidates = dp[i - 1];

    candidates.forEach(item => {
      const candidateStr = `${item}${letter}`;
      if (item[0] === letter && isPalindrome(candidateStr)) {
        counter += 1;
      }
      dp[i].push(candidateStr);
    });
  }

  return counter;
}

const isPalindrome = s => {
  const middle = Math.floor(s.length / 2);
  for (let i = 0; i < middle; i += 1) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
};

export {};
