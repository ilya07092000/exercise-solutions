const dfs = (adjMap, key, visited) => {
  const stack = [key];
  const results = [];

  while (stack.length) {
    const current = stack.pop();

    if (!visited.has(current)) {
      let emails = adjMap[current]?.emails || [];

      results.push(current);
      visited.add(current);

      for (const email of emails) {
        if (!visited.has(email)) {
          stack.push(email);
        }
      }
    }
  }

  return results;
};

function accountsMerge(accounts: string[][]): string[][] {
  const adjMap: Record<string, {name: string; emails: Set<string>}> = {};

  for (const account of accounts) {
    let [name, ...emails] = account;

    for (let i = 0; i < emails.length; i += 1) {
      const email = emails[i];

      if (!adjMap[email]) {
        adjMap[email] = {
          name,
          emails: new Set(),
        };
      }

      adjMap[email].emails.add(emails[0]);

      if (i !== 0) {
        if (!adjMap[emails[0]]) {
          adjMap[emails[0]] = {
            name,
            emails: new Set(),
          };
        }

        adjMap[emails[0]].emails.add(email);
      }
    }
  }

  const visited = new Set();

  return Object.entries(adjMap).reduce((acc, [key, data]) => {
    if (!visited.has(key)) {
      const result = dfs(adjMap, key, visited);
      result.sort();
      result.unshift(data.name);
      acc.push(result);
    }

    return acc;
  }, []);
}
