function climbStairs(n: number): number {
	const fibbo = [1, 1];

	for (let i = 0; i < n - 1; i += 1) {
		fibbo.push(fibbo[fibbo.length - 2] + fibbo[fibbo.length - 1]);
	}

	return fibbo[n];
}
