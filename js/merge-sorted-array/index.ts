function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	const result = [];
	let l1Tracker = 0;
	let l2Tracker = 0;

	while (l1Tracker < m && l2Tracker < n) {
		if (nums1[l1Tracker] < nums2[l2Tracker]) {
			result.push(nums1[l1Tracker]);
			l1Tracker += 1;
		} else {
			result.push(nums2[l2Tracker]);
			l2Tracker += 1;
		}
	}

	while (l1Tracker < m) {
		result.push(nums1[l1Tracker]);
		l1Tracker += 1;
	}

	while (l2Tracker < n) {
		result.push(nums2[l2Tracker]);
		l2Tracker += 1;
	}

	result.forEach((item, idx) => {
		nums1[idx] = item;
	});
}
