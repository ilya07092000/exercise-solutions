function simplifyPath(path: string): string {
  const pathList = path.split('/');
  const result = [];

  for (let i = 0; i < pathList.length; i += 1) {
    let element = pathList[i];
    if (element === '.') {
      continue;
    } else if (element === '..') {
      result.pop();
    } else if (element) {
      result.push(element);
    }
  }

  return `/${result.join('/')}`;
}
