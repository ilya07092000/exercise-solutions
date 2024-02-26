function compress(chars: string[]): number {
  // final result
  let counter = 0;
  let idx = 0;

  if (chars.length === 1) {
    return 1;
  }

  while (idx < chars.length) {
    let result = '';
    let sequence = 1;

    // count how many repeating characters
    while (chars[idx] === chars[idx + 1]) {
      idx += 1;
      sequence += 1;
    }

    // compress string from
    // e.g bbbb -> b4
    result += chars[idx];
    if (sequence > 1) {
      result += sequence;
    }

    // replace characters
    chars.splice(idx - (sequence - 1), sequence, ...result);

    if (sequence === 1) {
      idx += 1;
    } else {
      idx = idx - sequence + result.length + 1;
    }
    counter += result.length;
  }

  return counter;
}

export {};
