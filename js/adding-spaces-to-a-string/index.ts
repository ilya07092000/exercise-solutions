function addSpaces(s: string, spaces: number[]): string {
  if (!spaces.length) {
    return s;
  }

  let result = '';
  let lastPointer = 0;

  for (const spaceIndex of spaces) {
    result += s.slice(lastPointer, spaceIndex);
    result += ' ';

    lastPointer = spaceIndex;
  }

  result += s.slice(lastPointer);

  return result;
}
