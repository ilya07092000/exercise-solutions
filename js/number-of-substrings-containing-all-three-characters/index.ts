const isValid = map => {
  return map.a && map.b && map.c;
};

function numberOfSubstrings(s: string): number {
  let map = {
    a: 0,
    b: 0,
    c: 0,
  };
  let result = 0;

  let left = 0;
  let right = 0;

  while (right <= s.length) {
    map[s[right]] += 1;

    while (isValid(map)) {
      result += 1;
      result += s.length - right - 1;

      map[s[left]] -= 1;
      left += 1;
    }

    right += 1;
  }

  return result;
}
