function findWinners(matches: number[][]): number[][] {
	const losers = {};
	const result = [[], []];

	matches.forEach(([winner, loser]) => {
		losers[loser] ??= 0;
		losers[winner] ??= 0;
		losers[loser] += 1;
	});

	Object.entries(losers).forEach(([player, loses]) => {
		if (loses === 1) {
			result[1].push(player);
		}

		if (!loses) {
			result[0].push(player);
		}
	});

	return result;
}
