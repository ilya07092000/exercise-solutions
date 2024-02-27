function removeStars(s: string): string {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const elem = s[i];
    if (elem === '*') {
      stack.pop();
    } else {
      stack.push(elem);
    }
  }

  return stack.join('');
}
