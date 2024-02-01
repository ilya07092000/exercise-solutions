const arr = [
  32, 18, 47, 5, 72, 91, 10, 63, 26, 54, 78, 2, 41, 89, 13, 60, 36, 80, 25, 59,
  43, 96, 7, 69, 15, 83, 21, 48, 67, 9, 55, 30, 86, 12, 38, 74, 17, 94, 50, 3,
  28, 76, 52, 20, 44, 97, 6, 87, 34, 81, 23, 51, 39, 92, 11, 64, 31, 75, 19, 56,
  40, 98, 8, 66, 27, 84, 22, 49, 37, 95, 14, 61, 33, 77, 16, 42, 29, 85, 24, 53,
  35, 93, 4, 70, 58, 1, 79, 45, 82, 68, 90, 57, 46, 99, 62, 88, 65, 100,
];

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const list1 = mergeSort(arr.slice(0, middle));
  const list2 = mergeSort(arr.slice(middle));

  return merge(list1, list2);
};

const merge = (l1, l2) => {
  const result = [];
  let l1Tracker = 0;
  let l2Tracker = 0;

  while (l1Tracker < l1.length && l2Tracker < l2.length) {
    if (l1[l1Tracker] < l2[l2Tracker]) {
      result.push(l1[l1Tracker]);
      l1Tracker += 1;
    } else {
      result.push(l2[l2Tracker]);
      l2Tracker += 1;
    }
  }

  if (l1Tracker < l1.length) {
    result.push(...l1.slice(l1Tracker));
  }

  if (l2Tracker < l2.length) {
    result.push(...l2.slice(l2Tracker));
  }

  return result;
};

console.log(mergeSort(arr));
