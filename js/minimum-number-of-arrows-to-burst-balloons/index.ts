function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 0;
  let idx = 0;

  while (idx < points.length) {
    const currBaloon = points[idx];

    if (idx + 1 < points.length) {
      while (idx < points.length - 1 && currBaloon[1] >= points[idx + 1][0]) {
        idx += 1;
      }
    }

    arrows += 1;
    idx += 1;
  }

  return arrows;
}
