function checkValidCuts(n: number, rectangles: number[][]): boolean {
  let cuts = 0;
  let maxEnd = 0;

  rectangles.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < rectangles.length; i += 1) {
    const currRectangle = rectangles[i];
    const prevRectangle = rectangles[i - 1];

    const currentStart = currRectangle[0];
    const prevEnd = prevRectangle[2];

    maxEnd = Math.max(prevEnd, maxEnd);

    if (currentStart >= maxEnd) {
      cuts += 1;
    }
  }

  if (cuts >= 2) {
    return true;
  }

  maxEnd = 0;
  cuts = 0;

  rectangles.sort((a, b) => a[1] - b[1]);

  for (let i = 1; i < rectangles.length; i += 1) {
    const currRectangle = rectangles[i];
    const prevRectangle = rectangles[i - 1];

    const currentStart = currRectangle[1];
    const prevEnd = prevRectangle[3];

    maxEnd = Math.max(prevEnd, maxEnd);

    if (currentStart >= maxEnd) {
      cuts += 1;
    }
  }

  return cuts >= 2;
}
