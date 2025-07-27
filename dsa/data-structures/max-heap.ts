/**
 * A Min Heap Binary Tree is a Binary Tree where the root node has the minimum key in the tree.
 * The above definition holds true for all sub-trees in the tree. This is called the Min Heap property.
 *
 * Parent node - arr[(i-1)/2]
 * Left child - arr[(2*i) + 1]
 * Right child - arr[(2*i)+ 2]
 */

// import {HeapVisualizer} from './heapVisualizer';

export class MaxHeap<T> {
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

  private deleteMin() {
    this.data.pop();
  }

  heapify(index: number) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    let biggest = index;

    if (this.data[leftChildIndex] > this.data[biggest]) {
      biggest = leftChildIndex;
    }

    if (this.data[rightChildIndex] > this.data[biggest]) {
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

const maxHeap = new MaxHeap();

[
  16, 46, 43, 41, 42, 14, 36, 49, 50, 28, 38, 25, 17, 5, 18, 11, 14, 21, 23, 39,
  23,
].forEach(el => maxHeap.insert(el));

// maxHeap.insert(10);
// maxHeap.insert(8);
// maxHeap.insert(12);
// maxHeap.insert(9);
// maxHeap.insert(123);
// maxHeap.insert(2);
// maxHeap.insert(5);
// maxHeap.insert(100);
// maxHeap.insert(23);
// maxHeap.insert(522);
// maxHeap.insert(99);
// maxHeap.insert(92);
// maxHeap.insert(7);
// maxHeap.insert(1);
// maxHeap.insert(2333);
// maxHeap.insert(23444);

console.log(maxHeap);
// console.log(new HeapVisualizer(maxHeap).toString());
// maxHeap.deleteMax();
// console.log('------');
// console.log(new HeapVisualizer(maxHeap).toString());
// maxHeap.deleteMax();
// console.log('------');
// console.log(new HeapVisualizer(maxHeap).toString());
