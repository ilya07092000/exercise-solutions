function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const weightGraph = {};
  flights.forEach(([from, to, price]) => {
    weightGraph[from] ??= {};
    weightGraph[from][to] = price;
  });
  let result = Number.MAX_SAFE_INTEGER;

  const traverse = (node, steps, cost) => {
    if (steps < 0) {
      return;
    }

    if (+node === dst) {
      result = Math.min(cost, result);
      return true;
    }

    const nodePaths = weightGraph[node];
    for (let vertex in nodePaths) {
      if (cost + nodePaths[vertex] > result || steps - 1 < 0) {
        continue;
      }

      traverse(vertex, steps - 1, cost + nodePaths[vertex]);
    }
  };

  traverse(src, k + 1, 0);
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}
