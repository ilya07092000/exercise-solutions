const directions = [
  {x: 0, y: -1}, // top
  {x: -1, y: 0}, // left
  {x: 1, y: 0}, // right
  {x: 0, y: 1}, // bottom
];

const isValidCoordinate = ([y, x]: [number, number], heights: number[][]) => {
  return heights[y]?.[x] !== undefined;
};

const getNewCoordinates = (
  {y, x}: {y: number; x: number},
  [currentY, currentX]: [number, number],
): [number, number] => {
  return [y + currentY, x + currentX];
};

const getKey = (y: number, x: number) => `${y}-${x}`;

const fillReachablePoints = (
  paths: number[][],
  heights: number[][],
  direction: 'pacific' | 'atlantic',
) => {
  const visited = new Set<string>();

  const dfs = ([y, x]: [number, number]) => {
    if (paths[y][x] === 1) {
      return;
    }

    visited.add(getKey(y, x));

    for (const direction of directions) {
      const newCoords = getNewCoordinates(direction, [y, x]);

      if (!isValidCoordinate(newCoords, heights)) {
        continue;
      }

      const [newY, newX] = newCoords;

      if (paths[newY][newX] === 1 && heights[y][x] >= heights[newY][newX]) {
        paths[y][x] = 1;

        return true;
      }

      if (
        paths[newY][newX] === null &&
        !visited.has(getKey(newY, newX)) &&
        heights[y][x] >= heights[newY][newX]
      ) {
        const canReach = dfs([newY, newX]);

        if (canReach) {
          paths[y][x] = 1;

          return true;
        }
      }
    }

    visited.delete(getKey(y, x));
    paths[y][x] = 0;
  };

  for (let i = 0; i < heights.length; i += 1) {
    for (let j = 0; j < heights[0].length; j += 1) {
      if (!visited.has(getKey(i, j))) {
        dfs([i, j]);
      }
    }
  }
};

function pacificAtlantic(heights: number[][]): number[][] {
  const pacificOceanPaths = Array.from({length: heights.length}, (_, index) => {
    let row: number[] = new Array(heights[0].length);

    if (index === 0) {
      row.fill(1);
    } else {
      row.fill(null);
      row[0] = 1;
    }

    return row;
  });

  const atlanotOceanPaths = Array.from({length: heights.length}, (_, index) => {
    let row: number[] = new Array(heights[0].length);

    if (index === heights.length - 1) {
      row.fill(1);
    } else {
      row.fill(null);
      row[row.length - 1] = 1;
    }

    return row;
  });

  fillReachablePoints(pacificOceanPaths, heights, 'pacific');
  fillReachablePoints(atlanotOceanPaths, heights, 'atlantic');

  const intersections = [];

  for (let i = 0; i < pacificOceanPaths.length; i += 1) {
    for (let j = 0; j < pacificOceanPaths[0].length; j += 1) {
      if (
        atlanotOceanPaths[i][j] === pacificOceanPaths[i][j] &&
        atlanotOceanPaths[i][j] === 1
      ) {
        intersections.push([i, j]);
      }
    }
  }

  return intersections;
}
