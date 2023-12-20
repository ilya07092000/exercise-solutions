function majorityElement(nums: number[]): number {
	const appearsMap = {};
	const appearThreshold = 50;
	const appearValue = 100 / nums.length;

	for (let i = 0; i < nums.length; i += 1) {
		const el = nums[i];
		if (!(el in appearsMap)) {
			appearsMap[el] = 0;
		}

		let currAppearsValue = appearsMap[el];
		currAppearsValue += appearValue;

		if (currAppearsValue >= appearThreshold) {
			return el;
		}
		appearsMap[el] = currAppearsValue;
	}
}
