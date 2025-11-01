/**
 * MONOTONIC STACK
 */

function largestRectangleArea(heights: number[]): number {
  let stack = [];

  let leftMin: (number | null)[] = new Array(heights.length).fill(0);
  let rightMin: (number | null)[] = new Array(heights.length).fill(0);

  for (let i = 0; i < heights.length; i += 1) {
    const value = heights[i];

    while (stack.length && heights[stack[stack.length - 1]] >= value) {
      stack.pop();
    }

    leftMin[i] = stack[stack.length - 1] ?? null;

    stack.push(i);
  }

  stack = [];

  for (let i = heights.length - 1; i >= 0; i -= 1) {
    const value = heights[i];

    while (stack.length && heights[stack[stack.length - 1]] >= value) {
      stack.pop();
    }

    rightMin[i] = stack[stack.length - 1] ?? null;

    stack.push(i);
  }

  let maxArea = 0;

  for (let i = 0; i < leftMin.length; i += 1) {
    const leftMinIndex = leftMin[i] === null ? 0 : leftMin[i] + 1;
    const rightMinIndex =
      rightMin[i] === null ? heights.length - 1 : rightMin[i] - 1;
    const width = rightMinIndex - leftMinIndex + 1;

    maxArea = Math.max(
      maxArea,
      width *
        Math.min(heights[leftMinIndex], heights[rightMinIndex], heights[i]),
    );
  }

  return maxArea;
}
