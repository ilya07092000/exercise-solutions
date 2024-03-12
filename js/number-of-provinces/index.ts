function findCircleNum(isConnected: number[][]): number {
  /**
   * Construct Graph
   */
  const graph = {};
  isConnected.forEach((conn, idx) => {
    graph[idx] = [];

    for (let i = 0; i < conn.length; i += 1) {
      // i === idx it's node's connection with itself
      // ignore that
      if (i === idx) continue;
      if (conn[i] === 1) {
        graph[idx].push(i);
      }
    }
  });

  let provinces = 0;
  // keep track of visited nodes
  const visited = {};
  const stack = [];

  for (let vertex in graph) {
    if (vertex in visited) continue;

    provinces += 1;
    visited[vertex] = true;

    /**
     * Take the vertex and check whether it has connection with
     * any non visited vertexes
     */
    stack.push(...graph[vertex]);

    /**
     * Make DFS in order to traverse all connections
     */
    while (stack.length) {
      const vertex = stack.pop();
      // mark vertex as visited
      visited[vertex] = true;
      /**
       * Take the vertex and check whether it has connection with
       * any non visited vertexes
       */
      graph[vertex].forEach(v => {
        if (!(v in visited)) {
          stack.push(v);
        }
      });
    }
  }

  return provinces;
}
