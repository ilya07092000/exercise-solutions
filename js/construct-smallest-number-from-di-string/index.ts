function smallestNumber(pattern: string): string {
  const result = [];

  const backtrack = (used = {}, index = 0) => {
    if (index === pattern.length + 1) {
      return true;
    }

    const rule = pattern[index - 1];

    for (let number = 1; number <= 9; number += 1) {
      if (index !== 0 && used[number]) {
        continue;
      }

      let isValidNumber = true;

      if (index !== 0) {
        if (rule === 'I') {
          isValidNumber = number > result[index - 1];
        } else if (rule === 'D') {
          isValidNumber = number < result[index - 1];
        }
      }

      if (isValidNumber) {
        result[index] = number;
        used[number] = used;

        if (!backtrack(used, index + 1)) {
          result[index] = null;
          used[number] = false;
        } else {
          return true;
        }
      }
    }

    return false;
  };

  backtrack();

  return result.join('');
}
