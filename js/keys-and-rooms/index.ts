function canVisitAllRooms(rooms: number[][]): boolean {
  /**
   * Store Visited Rooms in order to avoid infinite loop
   */
  const visited = {};
  visited[0] = true;

  /**
   * Store keys in the stack
   * Keys are rooms which we can visit
   */
  const keys = [];
  keys.push(...rooms[0]);

  while (keys.length) {
    /**
     * Get The Next key and check whether we have not visited this room it before
     */
    const roomToVisit = keys.pop();
    if (visited[roomToVisit]) {
      continue;
    }

    /**
     * Get Keys from the room and check which rooms we have mot visited yet
     */
    const roomByKey = rooms[roomToVisit];
    roomByKey.forEach(k => {
      if (!(k in visited)) {
        keys.push(k);
      }
    });

    /**
     * Mark room as visited
     */
    visited[roomToVisit] = true;
  }

  return Object.keys(visited).length === rooms.length;
}
