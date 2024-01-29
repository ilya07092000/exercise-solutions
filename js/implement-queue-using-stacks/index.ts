class MyQueue {
  readStack: any[];
  writeStack: any[];

  constructor() {
    this.readStack = [];
    this.writeStack = [];
  }

  push(x: number): void {
    this.writeStack.push(x);
  }

  private perfromReadStackReversion() {
    while (this.writeStack.length) {
      this.readStack.push(this.writeStack.pop());
    }
  }

  pop(): number {
    if (!this.readStack.length) {
      this.perfromReadStackReversion();
    }
    return this.readStack.pop();
  }

  peek(): number {
    if (!this.readStack.length) {
      this.perfromReadStackReversion();
    }
    return this.readStack[this.readStack.length - 1];
  }

  empty(): boolean {
    return !(this.writeStack.length || this.readStack.length);
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
