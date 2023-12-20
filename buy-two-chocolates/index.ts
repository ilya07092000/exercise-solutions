function buyChoco(prices: number[], money: number): number {
	let firstChocPrice = null;
	let secondChocPrice = null;

	prices.forEach((price) => {
		if (firstChocPrice === null || firstChocPrice > price) {
			secondChocPrice = firstChocPrice;
			firstChocPrice = price;
		} else if (secondChocPrice === null || secondChocPrice > price) {
			secondChocPrice = price;
		}
	});

	const result = money - (firstChocPrice + secondChocPrice);

	return result < 0 ? money : result;
}
