function minOperations(nums: number[]): number {
	const occurencesMap: Record<string, number> = nums.reduce(
		(acc: Record<string, number>, curr: number) => {
			acc[String(curr)] = (acc[String(curr)] ? acc[String(curr)] : 0) + 1;
			return acc;
		},
		{}
	);

	let result = 0;
	for (let key in occurencesMap) {
		let num = occurencesMap[key];
		if (num < 2) {
			return -1;
		}

		if (num % 3 === 0) {
			result += num / 3;
			num = 0;
		} else if (num % 3 === 1 && num > 4) {
			let numWithoutPadding = num - 4;
			result += numWithoutPadding / 3;
			num = 4;
		} else if (num % 3 === 2) {
			let numWithoutPadding = num - 2;
			result += numWithoutPadding / 3;
			num = 2;
		}

		result += num / 2;
	}

	return result;
}
