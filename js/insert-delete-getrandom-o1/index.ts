class RandomizedSet {
	map: Record<string, number>;
	list: number[];

	constructor() {
		this.map = {};
		this.list = [];
	}

	insert(val: number): boolean {
		if (!(val in this.map)) {
			this.list.push(val);
			const idx = this.list.length - 1;
			this.map[val] = idx;
			return true;
		}
		return false;
	}

	remove(val: number): boolean {
		if (val in this.map) {
			const idx = this.map[val];
			// copy last element to the "val" index and remove last element from array
			// in this case we delete in O(1), just with replacing val with another element.
			// get idx of last element
			const lastIdxValue = this.list[this.list.length - 1];
			// move this element to "value" position in array
			this.list[idx] = lastIdxValue;
			// update last value index position in map
			this.map[lastIdxValue] = idx;
			// remove last element
			this.list.pop();
			delete this.map[val];
			return true;
		}

		return false;
	}

	getRandom(): number {
		return this.list[Math.floor(Math.random() * this.list.length)];
	}
}
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
