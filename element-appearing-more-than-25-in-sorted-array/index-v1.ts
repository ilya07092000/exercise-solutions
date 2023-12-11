/**
 * V1
 */

function findSpecialInteger(arr: number[]): number {
	const appearanceLimit = 25;
	const appearanceValue = 100 / arr.length;
	const appearanceMap = {};

	for (let i = 0; i < arr.length; i += 1) {
		const num = arr[i];
		const newValue = (appearanceMap[num] || 0) + appearanceValue;
		appearanceMap[num] = newValue;

		if (newValue > appearanceLimit) {
			return num;
		}
	}

	return 0;
}
