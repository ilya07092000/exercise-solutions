const dfs = (
  graph: Record<string, Set<number>>,
  edgesMap: Record<string, Set<number>>,
  key: string,
  visited: Set<number>,
) => {
  const adjacentNodes = edgesMap[key];

  graph[key] = adjacentNodes;

  for (const edge of adjacentNodes) {
    if (!visited.has(edge)) {
      visited.add(edge);

      dfs(graph, edgesMap, String(edge), visited);
    }
  }

  return graph;
};

const getAdjacentMap = (edges: number[][]) => {
  return edges.reduce<Record<string, Set<number>>>((map, edge) => {
    const [from, to] = edge;

    if (!map[from]) {
      map[from] = new Set<number>();
    }

    if (!map[to]) {
      map[to] = new Set<number>();
    }

    map[from].add(to);
    map[to].add(from);

    return map;
  }, {});
};

const isValid = (graph: Record<string, Set<number>>) => {
  const edgesInComponent: Set<number>[] = Object.values(graph);
  const edgesCount = edgesInComponent.length;

  const isCompleted = edgesInComponent.every(e => {
    return e.size === edgesCount - 1;
  });

  return isCompleted;
};

function countCompleteComponents(n: number, edges: number[][]): number {
  const edgesMap: Record<string, Set<number>> = getAdjacentMap(edges);
  const visited = new Set<number>();
  let result = 0;

  for (const edgeKey in edgesMap) {
    if (!visited.has(Number(edgeKey))) {
      if (isValid(dfs({}, edgesMap, edgeKey, visited))) {
        result += 1;
      }
    }

    visited.add(Number(edgeKey));
  }

  return result + n - Object.keys(edgesMap).length;
}
