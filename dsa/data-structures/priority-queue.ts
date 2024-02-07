class Element<T> {
  element: T;
  priority: number;

  constructor(element: T, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  items: Element<T>[];

  constructor() {
    this.items = [];
  }

  /**
   * add new item to the queue
   */
  enqueue(value: T, priority: number) {
    const element = new Element(value, priority);
    let contain = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > element.priority) {
        this.items.splice(i, 0, element);
        contain = true;
        break;
      }
    }

    // if the element have the highest priority
    // it is added at the end of the queue
    if (!contain) {
      this.items.push(element);
    }
  }

  /**
   * return element and delete it
   */
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.shift();
  }

  /**
   * returns the highest priority element
   */
  front() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items[0];
  }

  /**
   *  return true if the queue is empty.
   */
  isEmpty() {
    return this.items.length == 0;
  }

  /**
   * printQueue function
   * prints all the element of the queue
   */
  printPQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + ' ';
    return str;
  }
}

const queue = new PriorityQueue<string>();
queue.enqueue('string2', 2);
queue.enqueue('string3', 3);
queue.enqueue('string1', 1);
queue.enqueue('string4', 4);
console.log(queue.printPQueue());

export {};
