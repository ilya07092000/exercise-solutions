// Topological sorting (DFS approach)

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adjMatrix = {};

  for (const [second, first] of prerequisites) {
    if (!adjMatrix[first]) {
      adjMatrix[first] = [String(second)];
    } else {
      adjMatrix[first].push(String(second));
    }
  }

  let visited = new Set<string>();
  let currentRecursionVertices = new Set<string>();

  const isCyclic = (vertex: string) => {
    if (currentRecursionVertices.has(vertex)) {
      return true;
    }

    if (visited.has(vertex)) {
      return false;
    }

    visited.add(vertex);

    currentRecursionVertices.add(vertex);

    for (const neigbors of adjMatrix[vertex] || []) {
      if (isCyclic(neigbors)) {
        return true;
      }
    }

    currentRecursionVertices.delete(vertex);

    return false;
  };

  for (const vertex in adjMatrix) {
    if (!visited.has(vertex) && isCyclic(vertex)) {
      return false;
    }
  }

  const courses = [];
  visited = new Set<string>();

  const dfs = (vertex: string) => {
    visited.add(vertex);

    for (const neigbor of adjMatrix[vertex] || []) {
      if (!visited.has(neigbor)) {
        dfs(neigbor);
      }
    }

    courses.push(vertex);
  };

  for (let i = 0; i < numCourses; i += 1) {
    if (visited.has(String(i))) {
      continue;
    }

    dfs(String(i));
  }

  return courses.length >= numCourses;
}

// 4 -> 1
// 4 -> 2
// 1 -> 3
// 2 -> 3
