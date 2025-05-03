function minDominoRotations(tops: number[], bottoms: number[]): number {
  let rotations = 0;

  const topCandidate = tops[0];
  const bottomCandidate = bottoms[0];

  const matchArray = (arr1, arr2, number) => {
    let swaps = 0;

    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] !== number && arr2[i] !== number) {
        return Infinity;
      }

      if (arr1[i] !== number) {
        swaps += 1;
      }
    }

    return swaps;
  };

  const result = Math.min(
    matchArray(tops, bottoms, topCandidate),
    matchArray(tops, bottoms, bottomCandidate),
    matchArray(bottoms, tops, topCandidate),
    matchArray(bottoms, tops, bottomCandidate),
  );

  return result === Infinity ? -1 : result;
}
