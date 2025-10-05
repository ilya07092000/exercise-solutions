const directions = [
  {x: 0, y: -1}, // top
  {x: 1, y: 0}, // right
  {x: 0, y: 1}, // bottom
  {x: -1, y: 0}, // left
];

const isValidCoordinate = (y: number, x: number, board: string[][]) => {
  return board?.[y]?.[x] !== undefined;
};

const getFirstLettersCooridnates = (board: string[][], word: string) => {
  return board.reduce<number[][]>((acc, row, y) => {
    const coordinates = row.map((letter, x) => {
      if (letter === word[0]) {
        return [y, x];
      }

      return;
    });

    return [...acc, ...coordinates.filter(coordinate => Boolean(coordinate))];
  }, []);
};

const getNextCoordinate = (
  currentCoordinate: number[],
  direction: {y: number; x: number},
) => {
  const [currentY, currentX] = currentCoordinate;
  const {y: directionY, x: directionX} = direction;

  return [currentY + directionY, currentX + directionX];
};

const getCoordinateKey = (y: number, x: number) => {
  return `${y}-${x}`;
};

const hasEnoughLetters = (board: string[][], word: string) => {
  const lettersMap = board.reduce((acc, curr) => {
    curr.forEach(letter => {
      acc[letter] ??= 0;
      acc[letter] += 1;
    });

    return acc;
  }, {});

  const wordMap = word.split('').reduce((acc, curr) => {
    acc[curr] ??= 0;
    acc[curr] += 1;

    return acc;
  }, {});

  return Object.entries(wordMap).every(([letter, amount]) => {
    return lettersMap[letter] >= amount;
  });
};

function exist(board: string[][], word: string): boolean {
  if (!hasEnoughLetters(board, word)) {
    return false;
  }

  const firstLetterCoordinates = getFirstLettersCooridnates(board, word);
  const usedCoordinates = new Set<string>();

  const backtrack = (currentWord: string, currentCoordinate: number[]) => {
    const [y, x] = currentCoordinate;

    usedCoordinates.add(getCoordinateKey(y, x));

    if (currentWord === word) {
      return true;
    }

    for (const direction of directions) {
      const nextCoordinate = getNextCoordinate(currentCoordinate, direction);
      const isValid = isValidCoordinate(
        nextCoordinate[0],
        nextCoordinate[1],
        board,
      );

      if (
        !isValid ||
        usedCoordinates.has(
          getCoordinateKey(nextCoordinate[0], nextCoordinate[1]),
        )
      ) {
        continue;
      }

      const nextLetter = board[nextCoordinate[0]][nextCoordinate[1]];
      const isNeededLetter = word[currentWord.length] === nextLetter;

      if (!isNeededLetter) {
        continue;
      }

      const result = backtrack(`${currentWord}${nextLetter}`, nextCoordinate);

      if (result) {
        return true;
      }
    }

    usedCoordinates.delete(getCoordinateKey(y, x));
    return false;
  };

  for (const firstLetter of firstLetterCoordinates) {
    if (backtrack(word[0], firstLetter)) {
      return true;
    }
  }

  return false;
}
