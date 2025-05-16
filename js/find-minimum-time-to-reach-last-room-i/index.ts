const getCellKey = (y, x) => {
  return `${y}-${x}`;
};

const getClosestNotVisitedPosition = (
  results: number[][],
  visited: Set<string>,
) => {
  let minValue = Number.MAX_SAFE_INTEGER;
  let minX;
  let minY;

  for (let y = 0; y < results.length; y += 1) {
    for (let x = 0; x < results[0].length; x += 1) {
      const cellKey = getCellKey(y, x);

      if (results[y][x] < minValue && !visited.has(cellKey)) {
        minValue = results[y][x];
        minX = x;
        minY = y;
      }
    }
  }

  return minY !== undefined && minX !== undefined ? [minY, minX] : null;
};

const moveDirections = [
  [1, 0], // bottom
  [-1, 0], // top
  [0, 1], // right
  [0, -1], // left
];

const canMoveToPosition = (
  cell: number[],
  moveTime: number[][],
  visited: Set<string>,
) => {
  const [y, x] = cell;

  const isValidY = y >= 0 && y < moveTime.length;
  const isValidX = x >= 0 && x < moveTime[0].length;

  return isValidY && isValidX && !visited.has(getCellKey(y, x));
};

const getNextPosition = (cell: number[], direction: number[]) => {
  const [currentY, currentX] = cell;
  const [moveY, moveX] = direction;

  const finalY = currentY + moveY;
  const finalX = currentX + moveX;

  return [finalY, finalX];
};

function minTimeToReach(moveTime: number[][]): number {
  const results = Array.from({length: moveTime.length}, () =>
    new Array(moveTime[0].length).fill(Number.MAX_SAFE_INTEGER),
  );

  const visited = new Set<string>();
  results[0][0] = moveTime[0][0];

  let closestNotVisitedCell = getClosestNotVisitedPosition(results, visited);
  let isFirstMove = true;

  while (closestNotVisitedCell) {
    const [y, x] = closestNotVisitedCell;
    const currentCellValue = results[y][x];

    for (const direction of moveDirections) {
      const nextCell = getNextPosition(closestNotVisitedCell, direction);

      if (canMoveToPosition(nextCell, moveTime, visited)) {
        const [nextY, nextX] = nextCell;
        const nextCellValue = moveTime[nextY][nextX];

        if (isFirstMove && nextCellValue < currentCellValue) {
          results[nextY][nextX] = nextCellValue + 1;
        } else {
          if (nextCellValue >= currentCellValue) {
            results[nextY][nextX] = Math.min(
              nextCellValue + 1,
              results[nextY][nextX],
            );
          } else {
            results[nextY][nextX] = Math.min(
              currentCellValue + 1,
              results[nextY][nextX],
            );
          }
        }
      }
    }

    const cellKey = getCellKey(y, x);
    visited.add(cellKey);
    isFirstMove = false;

    closestNotVisitedCell = getClosestNotVisitedPosition(results, visited);
  }

  return results[results.length - 1][results[0].length - 1];
}

// [17,56]
// [97,80] = 81
// 1 = +17
// 2 = +

// [56,93]
//  [3,38]

// 56
//

//[[94,79,62,27,69,84]
// [6,32,11,82,42,30]]
