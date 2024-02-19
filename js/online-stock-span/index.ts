/**
 * MONOTONIC STACK
 */

class StockSpanner {
  stack: any;

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    /**
     * if stack is empty or yesterday's price is bigger than jsut push price and setup span = 1
     */
    if (!this.stack.length || this.stack[this.stack.length - 1] > price) {
      this.stack.push({price, span: 1});
      return 1;
    }

    /**
     * if we today's price is bigger than yesterday's,
     * then we start to pop elements and
     * combine the spans while we met the price which is bigger than today's one
     */
    let span = 1;
    while (
      this.stack.length &&
      this.stack[this.stack.length - 1].price <= price
    ) {
      span += this.stack.pop().span;
    }

    const value = {price, span};
    this.stack.push(value);
    return value.span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
