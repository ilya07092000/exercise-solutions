function minimumLength(s: string): number {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  while (pointer1 <= pointer2) {
    if (pointer1 === pointer2) {
      return 1;
    }

    if (s[pointer1] !== s[pointer2]) {
      return pointer2 - pointer1 + 1;
    }

    while (s[pointer1] === s[pointer1 + 1] && pointer1 < pointer2) {
      pointer1 += 1;
    }

    while (s[pointer2] === s[pointer2 - 1] && pointer2 > pointer1) {
      pointer2 -= 1;
    }
    pointer1 += 1;
    pointer2 -= 1;
  }

  return 0;
}
