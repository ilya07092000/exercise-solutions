function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const resultArray = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    const el1 = nums1[pointer1];
    const el2 = nums2[pointer2];

    if (el1 < el2) {
      resultArray.push(el1);
      pointer1 += 1;
    } else {
      resultArray.push(el2);
      pointer2 += 1;
    }
  }

  if (pointer1 < nums1.length) {
    resultArray.push(...nums1.slice(pointer1));
  } else {
    resultArray.push(...nums2.slice(pointer2));
  }

  const isEven = resultArray.length % 2 === 0;
  const mid = Math.floor(resultArray.length / 2);

  if (isEven) {
    return (resultArray[mid - 1] + resultArray[mid]) / 2;
  }

  return resultArray[mid];
}
