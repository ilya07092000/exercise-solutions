type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  events: any;

  constructor() {
    this.events = {};
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!(eventName in this.events)) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        const eventIdx = this.events[eventName].indexOf(callback);
        if (eventIdx !== -1) {
          this.events[eventName].splice(eventIdx, 1);
        }
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (eventName in this.events) {
      return this.events[eventName].map(cb => cb(...args));
    }

    return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
