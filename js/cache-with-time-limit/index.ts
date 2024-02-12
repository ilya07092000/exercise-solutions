type Element = {
  expired: boolean;
  value: number;
  tm: ReturnType<typeof setTimeout>;
};

class TimeLimitedCache {
  map: Record<number, Element>;
  counter: number;

  constructor() {
    this.counter = 0;
    this.map = {};
  }

  isExpired(key: number) {
    return this.map[key].expired;
  }

  getElement(key: number): Element | -1 {
    const el = this.map[key];
    return el || -1;
  }

  updateElement(key: number, value: number, duration: number): boolean {
    const element = this.getElement(key);
    if (element === -1) {
      return false;
    }

    clearTimeout(element.tm);
    this.addTimeout(element, duration);
    element.value = value;

    return true;
  }

  addTimeout(obj: Element, duration: number): Element {
    obj.tm = setTimeout(() => {
      obj.expired = true;
      this.counter -= 1;
    }, duration);
    return obj;
  }

  set(key: number, value: number, duration: number): boolean {
    if (key in this.map && !this.isExpired(key)) {
      return this.updateElement(key, value, duration);
    }

    const newElement: any = {
      value,
      expired: false,
    };
    this.addTimeout(newElement, duration);
    this.counter += 1;
    this.map[key] = newElement;

    return false;
  }

  get(key: number): number {
    const obj = this.map[key];
    if (obj && !obj?.expired) {
      return obj?.value;
    } else {
      return -1;
    }
  }

  count(): number {
    return this.counter;
  }
}

export {};
