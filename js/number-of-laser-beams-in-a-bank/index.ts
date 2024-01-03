const regex = /1/gi;

function numberOfBeams(bank: string[]): number {
	let result = 0;

	bank.reduce((acc: number[], curr: string, idx: number) => {
		const numOfLasers = curr.match(regex);
		if (numOfLasers && numOfLasers?.length > 0) {
			acc.push(numOfLasers.length);
			if (acc.length >= 2) {
				// get previous row value
				const prevNum = acc[acc.length - 2];

				result += numOfLasers.length * prevNum;
			}
		}

		return acc;
	}, []);

	return result;
}

console.log(numberOfBeams(['011001', '000000', '010100', '001000'])); // 8
console.log(numberOfBeams(['1', '1'])); // 1
