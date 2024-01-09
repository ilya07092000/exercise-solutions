function rob(nums: number[]): number {
	const values = [];
	// save first house value
	values[0] = nums[0];

	for (let i = 1; i < nums.length; i += 1) {
		let nextHouse = nums[i];
		let prevHouse = values[i - 1];

		if (i === 1) {
			// for the second house we just compare first house and second one to
			// choose which is more profitable
			values.push(Math.max(nextHouse, prevHouse));
		} else {
			// calculate how many profit we can get from current house and two houses ago, since we can not rob two near houses
			let robHouseValue = nextHouse + values[i - 2];
			// compare two profits:
			// 1 - we robbed previous house
			// 2 - we robbed current house + prev prev house
			// As a result we push the most profitable one
			values.push(Math.max(robHouseValue, prevHouse));
		}
	}

	return values[values.length - 1];
}
