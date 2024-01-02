class MinStack {
	stack: any[];
	minStack: any[];

	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val: number): void {
		if (
			(this.stack.length && val < this.minStack[this.minStack.length - 1]) ||
			!this.stack.length
		) {
			this.minStack.push(val);
		} else if (
			this.stack.length &&
			val >= this.minStack[this.minStack.length - 1]
		) {
			this.minStack.push(this.minStack[this.minStack.length - 1]);
		}
		this.stack.push(val);
	}

	pop(): void {
		this.stack.pop();
		this.minStack.pop();
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.minStack[this.minStack.length - 1];
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
