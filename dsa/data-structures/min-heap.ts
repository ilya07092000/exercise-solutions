/**
 * A Min Heap Binary Tree is a Binary Tree where the root node has the minimum key in the tree.
 * The above definition holds true for all sub-trees in the tree. This is called the Min Heap property.
 *
 * Parent node - arr[(i-1)/2]
 * Left child - arr[(2*i) + 1]
 * Right child - arr[(2*i)+ 2]
 */

// import {HeapVisualizer} from './heapVisualizer';

export class MinHeap<T> {
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

  private deleteMax() {
    this.data.pop();
  }

  heapify(index: number) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    let smallest = index;

    if (this.data[leftChildIndex] < this.data[smallest]) {
      smallest = leftChildIndex;
    }

    if (this.data[rightChildIndex] < this.data[smallest]) {
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

const minHeap = new MinHeap();

[
  16, 46, 43, 41, 42, 14, 36, 49, 50, 28, 38, 25, 17, 5, 18, 11, 14, 21, 23, 39,
  23,
].forEach(el => minHeap.insert(el));

// minHeap.insert(10);
// minHeap.insert(8);
// minHeap.insert(12);
// minHeap.insert(9);
// minHeap.insert(123);
// minHeap.insert(2);
// minHeap.insert(5);
// minHeap.insert(100);
// minHeap.insert(23);
// minHeap.insert(522);
// minHeap.insert(99);
// minHeap.insert(92);
// minHeap.insert(7);
// minHeap.insert(1);
// minHeap.insert(2333);
// minHeap.insert(23444);

console.log(minHeap);
// console.log(new HeapVisualizer(minHeap).toString());
// minHeap.deleteMin();
// console.log('------');
// console.log(new HeapVisualizer(minHeap).toString());
// minHeap.deleteMin();
// console.log('------');
// console.log(new HeapVisualizer(minHeap).toString());
