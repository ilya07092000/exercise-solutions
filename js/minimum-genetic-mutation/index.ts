const canTransform = (from: string, to: string) => {
  let diff = 0;

  for (let i = 0; i < from.length; i += 1) {
    const fromLetter = from[i];
    const toLetter = to[i];

    if (fromLetter !== toLetter) {
      diff += 1;
    }

    if (diff > 1) {
      return false;
    }
  }

  return diff <= 1;
};

/**
  UNDIRECTED GRAPH
*/
function minMutation(
  startGene: string,
  endGene: string,
  bank: string[],
): number {
  if (!bank.length) {
    return -1;
  }

  const adjMap = {};

  for (const gene of [startGene, ...bank]) {
    if (!adjMap[gene]) {
      adjMap[gene] = new Set();
    }

    for (const vertex of Object.keys(adjMap)) {
      if (vertex !== gene && canTransform(gene, vertex)) {
        adjMap[gene].add(vertex);
        adjMap[vertex].add(gene);
      }
    }
  }

  if (!adjMap[endGene]?.size) {
    return -1;
  }

  let result = Number.MAX_SAFE_INTEGER;

  const visited = new Set<string>();

  const dfs = (gene: string, length: number) => {
    if (gene === endGene) {
      return length;
    }

    visited.add(gene);

    for (const neighbor of adjMap[gene]) {
      if (!visited.has(neighbor)) {
        const currentResult = dfs(neighbor, length + 1);

        if (currentResult) {
          result = Math.min(currentResult, result);
        }
      }
    }

    visited.delete(gene);
  };

  dfs(startGene, 0);

  return result;
}
