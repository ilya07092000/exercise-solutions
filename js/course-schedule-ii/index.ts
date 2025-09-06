// Topological sorting
// Kadan's alg

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const vertexIncome = {};

  for (let i = 0; i < numCourses; i += 1) {
    if (!vertexIncome[i]) {
      vertexIncome[i] = 0;
    }
  }

  const adjMap = prerequisites.reduce<Record<string, string[]>>(
    (acc, [to, from]) => {
      if (!acc[from]) {
        acc[from] = [String(to)];
      } else {
        acc[from].push(String(to));
      }

      vertexIncome[to] += 1;

      return acc;
    },
    {},
  );

  const vertexAmount = Object.keys(vertexIncome).length;
  const result = [];
  const queue = [];

  for (const [vertex, incomeCount] of Object.entries(vertexIncome)) {
    if (incomeCount === 0) {
      queue.push(vertex);
      vertexIncome[vertex] -= 1;
    }
  }

  if (!queue.length) {
    return [];
  }

  while (queue.length) {
    const vertex = queue.shift();

    result.push(Number(vertex));

    for (const outcomeVertex of adjMap[vertex] || []) {
      vertexIncome[outcomeVertex] -= 1;

      if (vertexIncome[outcomeVertex] === 0) {
        queue.push(outcomeVertex);
      }
    }
  }

  return result.length === vertexAmount ? result : [];
}
