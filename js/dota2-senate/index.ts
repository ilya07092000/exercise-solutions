const senateNaming = {
  R: 'Radiant',
  D: 'Dire',
};

function predictPartyVictory(senate: string): string {
  if (senate.length === 2 || senate.length === 1) {
    return senateNaming[senate[0]];
  }

  /**
   * Count Dires and Radiants
   */
  let direAmount = 0;
  let radiantAmount = 0;
  for (let s of senate) {
    if (s === 'D') {
      direAmount += 1;
    } else {
      radiantAmount += 1;
    }
  }

  // if Dires not present then Radiants won
  if (direAmount === 0) {
    return senateNaming['R'];
  }

  // if Radiants not present then Dires won
  if (radiantAmount === 0) {
    return senateNaming['D'];
  }

  // track how many senators we need to exclude
  let dExcludedCount = 0;
  let rExcludedCount = 0;

  // senators which plays in current round
  let queue = senate.split('');

  while (true) {
    let roundResult = [];

    /**
     * Push Senator if corresponding "excludedCount" is 0,
     * otherwise exclude senator (just do not push him in the next round) and decrease excludedCount for
     * correspondind senate
     */
    queue.forEach(s => {
      if (s === 'R') {
        if (rExcludedCount) {
          rExcludedCount -= 1;
        } else {
          roundResult.push(s);
          dExcludedCount += 1;
          direAmount -= 1;
        }
      } else if (s === 'D') {
        if (dExcludedCount) {
          dExcludedCount -= 1;
        } else {
          roundResult.push(s);
          rExcludedCount += 1;
          radiantAmount -= 1;
        }
      }
    });

    if (direAmount <= 0) {
      return senateNaming['R'];
    }

    if (radiantAmount <= 0) {
      return senateNaming['D'];
    }

    // update the next round with the result of current round
    queue = roundResult;
  }
}
