function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  if (!edges.length) {
    return true;
  }

  const graph: Record<string, number[]> = {};

  edges.forEach(([from, to]) => {
    if (!(from in graph)) {
      graph[from] = [];
    }

    if (!(to in graph)) {
      graph[to] = [];
    }

    graph[from].push(to);
    graph[to].push(from);
  });

  const stack = [];
  const visited = new Set();

  stack.push(source);

  while (stack.length) {
    const vertex = stack.pop();
    const paths = graph[vertex];

    if (!paths || !paths.length) {
      continue;
    }

    for (const p of paths) {
      if (p === destination) {
        return true;
      }

      if (!visited.has(p)) {
        stack.push(p);
      }
    }

    visited.add(vertex);
  }

  return false;
}
