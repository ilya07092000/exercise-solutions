function trap(height: number[]): number {
  let result = 0;
  // find first block with height > 0
  let startContainerIdx = height.findIndex(item => item > 0);

  while (startContainerIdx < height.length - 1) {
    // setup endContainerIdx to the next block
    let endContainerIdx = startContainerIdx + 1;
    // keep track of the maximum block height
    let maxHeight = 0;

    // skip this iteration in case next block is higher than first one,
    // because in this case we can't fill the water
    if (height[startContainerIdx + 1] >= height[startContainerIdx]) {
      startContainerIdx = endContainerIdx;
      continue;
    }

    for (let i = endContainerIdx; i < height.length; i += 1) {
      const candidateHeight = height[i];

      // if one of the blocks higher than start block, then this block is end of our water container,
      // so we choose this block at "end container",
      // otherwise keep tracking max height block, if we found block higher than "maxHeight"
      if (candidateHeight >= height[startContainerIdx]) {
        maxHeight = candidateHeight;
        endContainerIdx = i;
        break;
      } else if (candidateHeight > maxHeight) {
        maxHeight = candidateHeight;
        endContainerIdx = i;
      }
    }

    // calculate value of block if we found "container" where we can fill the water
    if (maxHeight) {
      const containerHeight = Math.min(
        height[startContainerIdx],
        height[endContainerIdx],
      );
      const containerWidth = endContainerIdx - startContainerIdx - 1;

      // fill value represents how many space is used by other blocks within our container
      let fillValue = 0;
      for (let i = startContainerIdx + 1; i < endContainerIdx; i += 1) {
        fillValue += height[i];
      }

      result += containerHeight * containerWidth - fillValue;
    }

    // move startContainerIdx to the end of our container
    startContainerIdx = endContainerIdx;
  }

  return result < 0 ? 0 : result;
}
