function countDays(days: number, meetings: number[][]): number {
  let result = 0;

  meetings.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < meetings.length; i += 1) {
    const meeting = meetings[i];
    const [prevStart, prevEnd] = meetings[i - 1];
    const [start, end] = meeting;

    meetings[i] = [Math.max(prevEnd, start), Math.max(end, prevEnd)];

    const diff = start - prevEnd - 1;

    if (diff >= 1) {
      result += diff;
    }
  }

  const maxEnd = meetings[meetings.length - 1][1];
  const minStart = meetings[0][0];

  return result + (minStart - 1) + (days - maxEnd);
}
