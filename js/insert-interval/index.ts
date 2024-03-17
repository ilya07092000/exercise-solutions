function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result = [];

  for (let i = 0; i < intervals.length; i += 1) {
    // if the end of new interval does not overlap with the current start interval,
    // then there is not way how it can overlap the next ones
    // for example [1, 2], [5, 7] can not overlap with [3, 4]
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval);
      result.push(...intervals.slice(i));
      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      // if the start of newInterval is greater then end of current interval,
      // then they are not overlapping
      result.push(intervals[i]);
    } else {
      // means that current interval is overlapping with a newInterval
      // so we contruct the new interval by selecting the low and max value for the start and the end of interval
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }
  result.push(newInterval);
  return result;
}
