function maxProfit(prices: number[]): number {
	let profit = 0;

	for (let i = 0; i < prices.length - 1; i += 1) {
		let deal = prices[i + 1] - prices[i];
		if (deal > 0) {
			profit += deal;
		}
	}

	return profit;
}
