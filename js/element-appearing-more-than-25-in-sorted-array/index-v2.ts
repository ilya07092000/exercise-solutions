/**
 * V2
 *
 * this solution works faster in comparison to V1.
 * we can get rid of dictionary because we have
 * sorted array, so all repeated numbers are in correct order
 */

function findSpecialInteger(arr: number[]): number {
	const appearanceLimit = 25;
	const appearanceValue = 100 / arr.length;

	let currNum = arr[0];
	let currCounter = appearanceValue;

	for (let i = 1; i < arr.length; i += 1) {
		const num = arr[i];
		if (currNum !== num) {
			currCounter = 0;
			currNum = num;
		}

		currCounter += appearanceValue;

		if (currCounter > appearanceLimit) {
			return num;
		}
	}

	return currNum;
}
