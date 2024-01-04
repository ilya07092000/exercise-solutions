function minOperations(nums: number[]): number {
	const occurencesMap = nums.reduce((acc, curr) => {
		acc[curr] = (acc[curr] ? acc[curr] : 0) + 1;
		return acc;
	}, {});
	let result = 0;

	for (let key in occurencesMap) {
		let num = occurencesMap[key];
		if (num < 2) {
			return -1;
		}

		while (num !== 2 && num !== 4) {
			if (num >= 3) {
				num -= 3;
				result += 1;
			} else {
				break;
			}

			if (num === 0) {
				break;
			}
		}

		while (num >= 2) {
			result += 1;
			num -= 2;
		}
	}

	return result;
}
