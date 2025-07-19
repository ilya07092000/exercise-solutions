class MaxHeap<T> {
  data: T[];

  constructor() {
    this.data = [];
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  getMax() {
    return this.data[0];
  }

  getMin() {
    return this.data[this.data.length - 1];
  }

  deleteMin() {
    this.data.pop();
  }

  heapify(index: number) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    let biggest = index;

    if (
      leftChildIndex < this.data.length &&
      this.data[leftChildIndex] > this.data[biggest]
    ) {
      biggest = leftChildIndex;
    }

    if (
      rightChildIndex < this.data.length &&
      this.data[rightChildIndex] > this.data[biggest]
    ) {
      biggest = rightChildIndex;
    }

    if (biggest !== index) {
      const temp = this.data[biggest];

      this.data[biggest] = this.data[index];
      this.data[index] = temp;

      this.heapify(biggest);
    }
  }

  deleteMax() {
    const min = this.getMin();

    this.deleteMin();

    this.data[0] = min;

    return this.heapify(0);
  }

  insert(value: T) {
    this.data.push(value);

    let valueIndex = this.data.length - 1;
    let parentIndex = this.getParentIndex(valueIndex);
    let parentValue = this.data[parentIndex];

    while (valueIndex > 0 && parentValue && parentValue < value) {
      this.data[valueIndex] = parentValue;
      this.data[parentIndex] = value;

      valueIndex = parentIndex;
      parentIndex = this.getParentIndex(parentIndex);
      parentValue = this.data[parentIndex];
    }

    return this.data;
  }
}

class MinHeap<T> {
  data: T[];

  constructor() {
    this.data = [];
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  getMin() {
    return this.data[0];
  }

  getMax() {
    return this.data[this.data.length - 1];
  }

  deleteMax() {
    this.data.pop();
  }

  heapify(index: number) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    let smallest = index;

    if (
      leftChildIndex < this.data.length &&
      this.data[leftChildIndex] < this.data[smallest]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.data.length &&
      this.data[rightChildIndex] < this.data[smallest]
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      const temp = this.data[smallest];

      this.data[smallest] = this.data[index];
      this.data[index] = temp;

      this.heapify(smallest);
    }
  }

  deleteMin() {
    const max = this.getMax();

    this.deleteMax();

    this.data[0] = max;

    return this.heapify(0);
  }

  insert(value: T) {
    this.data.push(value);

    let valueIndex = this.data.length - 1;
    let parentIndex = this.getParentIndex(valueIndex);
    let parentValue = this.data[parentIndex];

    while (valueIndex > 0 && parentValue && parentValue > value) {
      this.data[valueIndex] = parentValue;
      this.data[parentIndex] = value;

      valueIndex = parentIndex;
      parentIndex = this.getParentIndex(parentIndex);
      parentValue = this.data[parentIndex];
    }

    return this.data;
  }
}

function minimumDifference(nums: number[]): number {
  const elemntsToRemove = nums.length / 3;
  const minSize = (nums.length - elemntsToRemove) / 2;

  let leftSum = 0;
  const maxHeap = new MaxHeap<number>();
  const leftToRightSumArray = [];

  nums.forEach((num, index) => {
    if (index < minSize) {
      leftSum += num;
      maxHeap.insert(num);
    } else {
      const currentMax = maxHeap.getMax();

      if (num < currentMax) {
        leftSum -= currentMax;
        leftSum += num;

        maxHeap.deleteMax();
        maxHeap.insert(num);
      }
    }

    leftToRightSumArray[index] = leftSum;
  });

  const rightToLeftSumArray = [];
  const minHeap = new MinHeap<number>();
  let rightSum = 0;

  for (let index = nums.length - 1; index >= 0; index -= 1) {
    const num = nums[index];

    if (nums.length - 1 - index < minSize) {
      rightSum += num;
      minHeap.insert(num);
    } else {
      const currentMin = minHeap.getMin();

      if (num > currentMin) {
        rightSum -= currentMin;
        rightSum += num;

        minHeap.deleteMin();
        minHeap.insert(num);
      }
    }

    rightToLeftSumArray[index] = rightSum;
  }

  return leftToRightSumArray.reduce((acc, curr, index) => {
    if (
      index >= minSize - 1 &&
      index < nums.length - minSize &&
      index + 1 < nums.length
    ) {
      return Math.min(
        acc,
        leftToRightSumArray[index] - rightToLeftSumArray[index + 1],
      );
    }

    return acc;
  }, Number.MAX_SAFE_INTEGER);
}

// small - big
