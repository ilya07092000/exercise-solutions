function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  let pointer1 = 0;
  let pointer2 = 0;
  const result = [];

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    const [id1, value1] = nums1[pointer1];
    const [id2, value2] = nums2[pointer2];

    if (id1 === id2) {
      result.push([id1, value1 + value2]);
      pointer1 += 1;
      pointer2 += 1;
    } else if (id1 < id2) {
      result.push([id1, value1]);
      pointer1 += 1;
    } else {
      result.push([id2, value2]);
      pointer2 += 1;
    }
  }

  while (pointer1 < nums1.length) {
    const [id1, value1] = nums1[pointer1];

    result.push([id1, value1]);
    pointer1 += 1;
  }

  while (pointer2 < nums2.length) {
    const [id2, value2] = nums2[pointer2];

    result.push([id2, value2]);
    pointer2 += 1;
  }

  return result;
}
