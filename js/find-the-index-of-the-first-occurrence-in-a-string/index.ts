function strStr(haystack: string, needle: string): number {
  let idx = -1;

  const traverse = (startIdx, result) => {
    if (result === needle) {
      idx = startIdx - needle.length;
    }

    if (idx !== -1) {
      return idx;
    }

    if (haystack[startIdx] === needle[result.length]) {
      traverse(startIdx + 1, result + needle[result.length]);
    }

    if (!result && startIdx < haystack.length - needle.length) {
      traverse(startIdx + 1, '');
    }
  };

  traverse(0, '');
  return idx;
}
