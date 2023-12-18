function twoSum(numbers: number[], target: number): number[] {
	let leftPointer = 0;
	let rightPointer = numbers.length - 1;
	let sum = 0;

	while (leftPointer < rightPointer) {
		sum = numbers[leftPointer] + numbers[rightPointer];

		if (sum === target) {
			return [leftPointer + 1, rightPointer + 1];
		}

		if (sum > target) {
			rightPointer -= 1;
		} else {
			leftPointer += 1;
		}
	}
}
