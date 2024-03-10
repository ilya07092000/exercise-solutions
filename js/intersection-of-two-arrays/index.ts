function intersection(nums1: number[], nums2: number[]): number[] {
  const numsMap = nums1.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});

  const result = nums2.reduce((acc, curr) => {
    if (numsMap[curr]) {
      numsMap[curr] = false;
      acc.push(curr);
    }

    return acc;
  }, []);

  return result;
}
