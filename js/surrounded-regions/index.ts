/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const visitedZerosRegions = {};

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[0].length; col += 1) {
      const cell = board[row][col];
      if (cell === 'O' && !visitedZerosRegions?.[row]?.[col]) {
        let isSurrounded = true;
        const region = [];
        const stack = [[row, col]];

        while (stack.length) {
          const [y, x] = stack.pop();
          region.push([y, x]);
          if (!(y in visitedZerosRegions)) {
            visitedZerosRegions[y] = {};
          }
          visitedZerosRegions[y][x] = true;
          board[y][x] = 'X';

          if (
            y === 0 ||
            y === board.length - 1 ||
            x === 0 ||
            x === board[0].length - 1
          ) {
            isSurrounded = false;
          }

          // move to top
          if (y > 0 && board[y - 1][x] === 'O') {
            stack.push([y - 1, x]);
          }

          // move to bottom
          if (y < board.length - 1 && board[y + 1][x] === 'O') {
            stack.push([y + 1, x]);
          }

          // move to left
          if (x > 0 && board[y][x - 1] === 'O') {
            stack.push([y, x - 1]);
          }

          // move to right
          if (x < board[0].length - 1 && board[y][x + 1] === 'O') {
            stack.push([y, x + 1]);
          }
        }

        if (!isSurrounded) {
          region.forEach(([y, x]) => {
            board[y][x] = 'O';
          });
        }
      }
    }
  }
}
