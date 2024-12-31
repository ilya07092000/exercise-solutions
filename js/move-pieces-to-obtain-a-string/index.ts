const LEFT = 'L';
const RIGHT = 'R';
const SKIP = '_';

function canChange(start: string, target: string): boolean {
  const longerStr = start.length > target.length ? start : target;

  let rCount = 0;
  let lCount = 0;

  for (let i = 0; i < longerStr.length; i += 1) {
    const targetChar = target[i];
    const startChar = start[i];

    if (targetChar === LEFT) {
      lCount += 1;

      if (rCount > 0) {
        return false;
      }
    }

    if (startChar === RIGHT) {
      rCount += 1;

      if (lCount > 0) {
        return false;
      }
    }

    if (targetChar === RIGHT) {
      if (rCount <= 0) {
        return false;
      }

      rCount -= 1;
    }

    if (startChar === LEFT) {
      if (lCount === 0) {
        return false;
      }

      lCount -= 1;
    }
  }

  console.log(lCount, rCount);
  return lCount === 0 && rCount === 0;
}
