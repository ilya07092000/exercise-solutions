const weighGraph = {};
weighGraph.a = {b: 2, c: 1};
weighGraph.b = {f: 7};
weighGraph.c = {d: 5, e: 2};
weighGraph.d = {f: 2};
weighGraph.e = {f: 1};
weighGraph.f = {g: 1};
weighGraph.g = {};

const dejikstraAlg = (graph, start, end) => {
  const path = {};
  const visited = [];

  Object.keys(graph).forEach(vertext => {
    if (vertext !== start) {
      const value = graph[start][vertext] || Number.MAX_SAFE_INTEGER;
      path[vertext] = value;
    }
  });

  let vertexCandidate = findMinPath(path, visited);
  while (vertexCandidate) {
    visited.push(vertexCandidate);

    const vertexCandidatesPath = graph[vertexCandidate];
    Object.keys(vertexCandidatesPath).forEach(innerVertex => {
      if (
        path[innerVertex] >
        vertexCandidatesPath[innerVertex] + path[vertexCandidate]
      ) {
        path[innerVertex] =
          vertexCandidatesPath[innerVertex] + path[vertexCandidate];
      }
    });

    vertexCandidate = findMinPath(path, visited);
  }

  return path;
};

const findMinPath = (path, visited) => {
  let closestVertex;
  let closestMinPath = Number.MAX_SAFE_INTEGER;

  Object.keys(path).forEach(vertex => {
    if (!visited.includes(vertex) && path[vertex] < closestMinPath) {
      closestVertex = vertex;
      closestMinPath = path[vertex];
    }
  });

  return closestVertex;
};

console.log(dejikstraAlg(weighGraph, 'a', 'g'));
