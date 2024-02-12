declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const result = this.reduce((acc, item) => {
    const key = fn(item);
    if (!(key in acc)) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
