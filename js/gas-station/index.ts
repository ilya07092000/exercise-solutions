function canCompleteCircuit(gas: number[], cost: number[]): number {
  let choiseIdx = 0;

  outer: while (choiseIdx < gas.length) {
    let gasValue = 0;

    // from left to right part
    for (let i = choiseIdx; i < gas.length; i += 1) {
      gasValue += gas[i];
      gasValue -= cost[i];

      if (gasValue < 0) {
        choiseIdx = i + 1;
        continue outer;
      }
    }

    // from right to left part
    for (let i = 0; i < choiseIdx; i += 1) {
      gasValue += gas[i];
      gasValue -= cost[i];

      // answer can not be found if we can not reach at least one gas station from the start
      if (gasValue < 0) {
        break outer;
      }
    }

    if (gasValue >= 0) {
      return choiseIdx;
    }
    choiseIdx += 1;
  }

  return -1;
}
