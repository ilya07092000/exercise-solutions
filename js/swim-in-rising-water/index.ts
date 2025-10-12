const getKey = (y: number, x: number) => {
  return `${y}-${x}`;
};

const getMinAvailableVerticeIndex = (
  vertices: {value: number; y: number; x: number}[],
) => {
  return vertices.findIndex(vertice => vertice !== undefined);
};

const moveDirections = [
  {y: -1, x: 0}, // top
  {y: 0, x: 1}, // right
  {y: 1, x: 0}, // bottom
  {y: 0, x: -1}, // left
];

const isValidCoordinate = (grid: number[][], y: number, x: number) => {
  return grid[y]?.[x] !== undefined;
};

const applyMoveToCoordinates = (
  y: number,
  x: number,
  move: {y: number; x: number},
) => {
  return {
    y: y + move.y,
    x: x + move.x,
  };
};

const deleteMinAvailableVerticeByIndex = (
  availableVertices: {value: number; y: number; x: number}[],
  index: number,
) => {
  availableVertices[index] = undefined;
};

function swimInWater(grid: number[][]): number {
  const visited = new Set<string>();
  let result = 0;

  const targetY = grid.length - 1;
  const targetX = grid[0].length - 1;

  const availableVertices = [];

  availableVertices[grid[0][0]] = {value: grid[0][0], y: 0, x: 0};

  while (true && availableVertices.length) {
    const minAvailableVerticeIndex =
      getMinAvailableVerticeIndex(availableVertices);
    const minAvailableVertice = availableVertices[minAvailableVerticeIndex];

    deleteMinAvailableVerticeByIndex(
      availableVertices,
      minAvailableVerticeIndex,
    );

    const {y, x, value} = minAvailableVertice;
    visited.add(getKey(y, x));

    result = Math.max(result, value);

    if (y === targetY && x === targetX) {
      return result;
    }

    for (const moveDirection of moveDirections) {
      const {y: moveY, x: moveX} = applyMoveToCoordinates(y, x, moveDirection);

      if (
        isValidCoordinate(grid, moveY, moveX) &&
        !visited.has(getKey(moveY, moveX))
      ) {
        availableVertices[grid[moveY][moveX]] = {
          value: grid[moveY][moveX],
          y: moveY,
          x: moveX,
        };
      }
    }
  }

  return result;
}
