class ElementItem<T> {
  element: T;
  priority: number;

  constructor(element: T, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

class MyPriorityQueue<T> {
  items: ElementItem<T>[];

  constructor() {
    this.items = [];
  }

  /**
   * add new item to the queue
   */
  enqueue(value: T, priority: number) {
    const element = new ElementItem(value, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority < element.priority) {
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

  /**
   * return element and delete it
   */
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.shift();
  }
}

function frequencySort(s: string): string {
  const queue = new MyPriorityQueue<string>();

  const lettersMap = s.split('').reduce((acc, letter) => {
    acc[letter] ??= 0;
    acc[letter] += 1;
    return acc;
  }, {});

  for (let letter in lettersMap) {
    queue.enqueue(letter, lettersMap[letter]);
  }

  let result = '';
  while (!queue.isEmpty()) {
    const item = queue.dequeue();
    if (item) {
      const letters = item.element.repeat(item.priority);
      result += letters;
    }
  }

  return result;
}
