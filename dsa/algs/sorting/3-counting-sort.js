/**
 * O(n)
 * Counting Sort is a non-comparison-based sorting algorithm that works well when
 * there is limited range of input values. It is particularly efficient when the range
 * of input values is small compared to the number of elements to be sorted. T
 * he basic idea behind Counting Sort is to count the frequency of each distinct element in the
 * input array and use that information to place the elements in their correct sorted positions.
 */
const arr = [1, 3, 4, 8, 7, 9, 3, 5, 1];

const countingSort = arr => {
  const maxEl = Math.max(...arr);
  const countArr = new Array(maxEl + 1).fill(0);
  const result = [];

  arr.forEach(item => {
    countArr[item] += 1;
  });

  for (let i = 1; i < countArr.length; i += 1) {
    countArr[i] += countArr[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result[countArr[arr[i]] - 1] = arr[i];
    countArr[arr[i]] -= 1;
    console.log(countArr, result);
  }

  return result;
};

console.log(countingSort(arr));
