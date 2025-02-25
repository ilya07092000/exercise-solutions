function mostProfitablePath(
  edges: number[][],
  bob: number,
  amount: number[],
): number {
  const paths = edges.reduce((acc, [from, to], index) => {
    if (!acc.has(from)) {
      acc.set(from, []);
    }

    if (!acc.has(to)) {
      acc.set(to, []);
    }

    acc.get(from).push(to);
    acc.get(to).push(from);

    return acc;
  }, new Map());

  const bobPaths = [bob];

  const findBobPaths = (parent, current) => {
    if (current === 0) {
      return true;
    }

    for (const p of paths.get(current)) {
      if (p !== parent) {
        bobPaths.push(p);

        if (findBobPaths(current, p)) {
          return true;
        } else {
          bobPaths.pop();
        }
      }
    }

    return false;
  };

  findBobPaths(-1, bob);

  const bobPathToStepMap = bobPaths.reduce((acc, curr, index) => {
    acc[curr] = index + 1;

    return acc;
  }, {});

  const traverse = (parent, alicePosition, bobPosition, income, step) => {
    let newIncome = income;
    let result = -10000000;

    if (alicePosition === bobPosition) {
      newIncome += amount[alicePosition] / 2;
    } else if (
      bobPathToStepMap[alicePosition] > step ||
      bobPathToStepMap[alicePosition] === undefined
    ) {
      newIncome += amount[alicePosition];
    }

    if (
      paths.get(alicePosition).length === 1 &&
      paths.get(alicePosition)[0] === parent
    ) {
      return Math.max(newIncome, result);
    }

    step += 1;

    paths.get(alicePosition).forEach(to => {
      if (to !== parent) {
        result = Math.max(
          result,
          traverse(alicePosition, to, bobPaths[step], newIncome, step),
        );
      }
    });

    return result;
  };

  return traverse(null, 0, bob, 0, 0);
}
