function maxProfit(prices: number[]): number {
	let result = 0;
	let buyDay = 0;
	let sellDay = 1;

	while (sellDay < prices.length) {
		const buyPrice = prices[buyDay];
		const sellPrice = prices[sellDay];
		const diff = sellPrice - buyPrice;

		if (diff > result) {
			result = diff;
		}

		if (buyPrice < sellPrice) {
			sellDay += 1;
		} else {
			buyDay = sellDay;
			sellDay += 1;
		}
	}

	return result;
}
