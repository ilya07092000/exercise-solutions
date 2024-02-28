const moveAllZerosToTheEnd = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count += 1;
    }
  }

  for (let i = count; i < arr.length; i += 1) {
    arr[i] = 0;
  }

  return arr;
};

console.log(moveAllZerosToTheEnd([1, 2, 0, 4, 3, 0, 5, 0]));
