function isValidSudoku(board: string[][]): boolean {
	// check rows
	for (let row = 0; row < board.length; row += 1) {
		const map = {};
		for (let i = 0; i < board[row].length; i += 1) {
			const item = board[row][i];
			if (item === '.') {
				continue;
			}

			if (!(item in map)) {
				map[item] = 0;
			}
			map[item] = map[item] + 1;
			if (map[item] > 1) {
				return false;
			}
		}
	}

	// check cols
	for (let col = 0; col < board.length; col += 1) {
		const map = {};
		for (let i = 0; i < board[col].length; i += 1) {
			const item = board[i][col];
			if (item === '.') {
				continue;
			}

			if (!(item in map)) {
				map[item] = 0;
			}
			map[item] = map[item] + 1;
			if (map[item] > 1) {
				return false;
			}
		}
	}

	// check boxes
	for (let row = 0; row < 3; row += 1) {
		for (let col = 0; col < 3; col += 1) {
			const map = {};
			for (let i = 0; i < 3; i += 1) {
				for (let j = 0; j < 3; j += 1) {
					const item = board[row * 3 + i][col * 3 + j];
					if (item === '.') {
						continue;
					}

					if (!(item in map)) {
						map[item] = 0;
					}
					map[item] = map[item] + 1;
					if (map[item] > 1) {
						return false;
					}
				}
			}
		}
	}

	return true;
}
