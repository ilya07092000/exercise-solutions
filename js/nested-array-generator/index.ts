type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
  arr: MultidimensionalArray,
): Generator<number, void, unknown> {
  const stack: any = [arr];

  while (stack.length) {
    const item = stack.pop();

    if (!Array.isArray(item)) {
      yield item;
    } else {
      for (let i = item.length - 1; i >= 0; i -= 1) {
        stack.push(item[i]);
      }
    }
  }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
