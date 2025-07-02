const resolver = (promises: Promise<any>[]) => {
  const errors: any[] = [];
  let processedPromises = 0;
  let resolved = false;

  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise
        .then(result => {
          if (!resolved) {
            resolved = true;
            resolve(result);
          }
        })
        .catch(err => errors.push(err))
        .finally(() => {
          processedPromises += 1;

          if (processedPromises === promises.length && !resolved) {
            reject(new Error(JSON.stringify(errors)));
          }
        });
    }
  });
};

resolver([
  Promise.resolve(1),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 4000)),
])
  .then(console.log)
  .catch(console.log);

resolver([Promise.reject(3), Promise.resolve(4)])
  .then(console.log)
  .catch(console.log);

resolver([Promise.reject(5), Promise.reject(6)])
  .then(console.log)
  .catch(console.log);
