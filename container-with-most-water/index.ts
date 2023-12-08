/**
 * O(n)
 *
 * idea is to start from the biggest width, like [i, j]
 * then increase i if j > i and otherwise, descrease j if j < i.
 * In this case we will also have the biggest heights
 */

function maxArea(height: number[]): number {
	// max value
	let maxWater = 0;
	// define first pointer and last one
	let lastPointer = height.length - 1;
	let firstPointer = 0;

	while (lastPointer > firstPointer) {
		// calculate water size
		const width = lastPointer - firstPointer;
		const maxHeight = Math.min(height[lastPointer], height[firstPointer]);
		const container = width * maxHeight;
		if (container > maxWater) {
			maxWater = container;
		}

		// move last or first pointer depends on their sizes
		if (height[lastPointer] >= height[firstPointer]) {
			firstPointer += 1;
		} else {
			lastPointer -= 1;
		}
	}

	return maxWater;
}
