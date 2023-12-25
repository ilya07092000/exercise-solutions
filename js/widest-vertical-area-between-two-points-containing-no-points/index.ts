function maxWidthOfVerticalArea(points: number[][]): number {
	const verticalCoordsList = points.map((point) => point[0]);
	verticalCoordsList.sort((a, b) => a - b);
	let result = 0;

	for (let i = 0; i < verticalCoordsList.length - 1; i += 1) {
		const diff = Math.abs(verticalCoordsList[i] - verticalCoordsList[i + 1]);
		if (diff > result) {
			result = diff;
		}
	}

	return result;
}
