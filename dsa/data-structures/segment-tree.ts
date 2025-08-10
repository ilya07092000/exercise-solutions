const list = [6, 4, 7, 10, 12, 1, 5, 2, 13];

// max tree
// query most left element satisfying the condition
class SegmentTree {
  data: number[];
  source: number[];

  constructor(source: number[]) {
    this.data = [];
    this.source = source;

    this.build(0, 0, this.source.length - 1);
  }

  getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  private build(treeIndex = 0, from: number, to: number): number {
    if (from === to) {
      this.data[treeIndex] = this.source[from];

      return this.data[treeIndex];
    }

    const middle = Math.floor((from + to) / 2);

    const leftVal = this.build(this.getLeftChildIndex(treeIndex), from, middle);
    const rightVal = this.build(
      this.getRightChildIndex(treeIndex),
      middle + 1,
      to,
    );

    this.data[treeIndex] = Math.max(leftVal, rightVal);
    return this.data[treeIndex];
  }

  queryClosestMin(
    minCondition: number,
    from = 0,
    to = this.source.length - 1,
    treeIndex = 0,
  ): number | undefined {
    // If this segment doesn't meet the condition, skip it
    if (this.data[treeIndex] < minCondition) {
      return;
    }

    // Leaf node
    if (from === to) {
      const result = this.data[treeIndex];

      this.data[treeIndex] = 0; // remove

      return result;
    }

    const middle = Math.floor((from + to) / 2);

    const leftIndex = this.getLeftChildIndex(treeIndex);
    const rightIndex = this.getRightChildIndex(treeIndex);

    // Try left first
    if (this.data[leftIndex] >= minCondition) {
      const res = this.queryClosestMin(minCondition, from, middle, leftIndex);

      this.data[treeIndex] = Math.max(
        this.data[leftIndex],
        this.data[rightIndex],
      );

      return res;
    }

    // Otherwise try right
    if (this.data[rightIndex] >= minCondition) {
      const res = this.queryClosestMin(
        minCondition,
        middle + 1,
        to,
        rightIndex,
      );

      this.data[treeIndex] = Math.max(
        this.data[leftIndex],
        this.data[rightIndex],
      );

      return res;
    }

    return Number.MAX_SAFE_INTEGER;
  }
}

const tree = new SegmentTree([22, 19, 7, 5, 4, 2, 11, 17, 23]);
console.log('min', tree.queryClosestMin(4));
console.log('min', tree.queryClosestMin(2));
console.log('min', tree.queryClosestMin(11));
console.log(tree.data);
