class ProductOfNumbers {
  prefixSum: number[];
  numbers: number[];
  isReady: boolean;

  constructor() {
    this.prefixSum = [];
    this.numbers = [];
    this.isReady = false;
  }

  add(num: number): void {
    this.numbers.push(num);
    this.isReady = false;
  }

  getProduct(k: number): number {
    if (!this.isReady) {
      for (let i = this.numbers.length - 1; i >= 0; i -= 1) {
        const isLastNum = i === this.numbers.length - 1;

        if (isLastNum) {
          this.prefixSum[i] = this.numbers[i];
        } else {
          const next = this.prefixSum[i + 1];
          this.prefixSum[i] = next * this.numbers[i];
        }
      }

      this.isReady = true;
    }

    return this.prefixSum[this.prefixSum.length - k];
  }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
