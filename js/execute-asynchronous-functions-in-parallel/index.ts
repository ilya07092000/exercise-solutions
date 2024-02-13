type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const result = [];
    let resolved = 0;

    for (let i = 0; i < functions.length; i += 1) {
      functions[i]()
        .then(r => {
          resolved += 1;
          result[i] = r;
          if (resolved === functions.length) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

export {};
