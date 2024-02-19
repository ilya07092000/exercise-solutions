function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let result = 0;
  let last = intervals[0];

  /**
   * If the current interval's start time is less than the end time of the 'last' interval,
   * they overlap. Increment 'answer' as we need to remove an interval to avoid overlap.
   * Otherwise, we update 'last' to the current interval.
   */
  for (let i = 1; i < intervals.length; i += 1) {
    if (intervals[i][0] < last[1]) {
      result += 1;
    } else {
      last = intervals[i];
    }
  }

  return result;
}
