/**
 * Quickselect is a selection algorithm to find the k-th smallest element in an unordered list.
 * It is related to the quick sort sorting algorithm.
 *
 * The algorithm is similar to QuickSort.
 * The difference is, instead of recurring for both sides (after finding pivot),
 * it recurs only for the part that contains the k-th smallest element.
 * The logic is simple, if index of the partitioned element is more than k,
 * then we recur for the left part. If index is the same as k, we have found the k-th smallest element and we return.
 * If index is less than k, then we recur for the right part.
 * This reduces the expected complexity from O(n log n) to O(n), with a worst-case of O(n^2).
 */

/**
 * IMPLEMENTATION
 */
const partitionArr = (arr: number[], from: number, to: number): number => {
  let pivotEl = arr[to];
  // index of the last biggest el
  let newPivotIdx = from;

  /**
   * Move All Bigger Elements that "pivotEl" to the right side
   */
  for (let i = from; i < to; i += 1) {
    if (arr[i] > pivotEl) {
      let temp = arr[i];
      arr[i] = arr[newPivotIdx];
      arr[newPivotIdx] = temp;
      newPivotIdx += 1;
    }
  }

  /**
   * Swap last element (to) which is pivot with the
   * last biggest element index,
   * so bigger elements will be at the left, and smaller elements at the right
   */
  let temp = arr[to];
  arr[to] = arr[newPivotIdx];
  arr[newPivotIdx] = temp;

  return newPivotIdx;
};

const findKthLargest = (
  array: number[],
  k: number,
  from = 0,
  to = array.length - 1,
): number => {
  const partitionIdx = partitionArr(array, from, to);

  /**
   * K - 1 because it is index, so if the index of partition element === k - 1,
   * then it's the K-th biggest element
   */
  if (partitionIdx === k - 1) {
    return array[k - 1];
  }

  /**
   * Search In the Right Side If index is smaller, so K still at the right
   */
  if (partitionIdx < k) {
    return findKthLargest(array, k, partitionIdx + 1, to);
  }

  /**
   * Otherwise search at the left side
   */
  return findKthLargest(array, k, from, partitionIdx - 1);
};

export {};
