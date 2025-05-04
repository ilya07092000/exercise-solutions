function numEquivDominoPairs(dominoes: number[][]): number {
  const dominoesPerms = {};

  return dominoes.reduce((acc, curr) => {
    const [a, b] = curr;

    const perm1 = `${a}-${b}`;
    const perm2 = `${b}-${a}`;

    let existingPermKey = perm2;

    if (!dominoesPerms[existingPermKey]) {
      existingPermKey = perm1;
    }

    const existingPermCount = dominoesPerms[existingPermKey];

    if (existingPermCount) {
      acc += existingPermCount;
    }

    dominoesPerms[existingPermKey] = (existingPermCount || 0) + 1;

    return acc;
  }, 0);
}

// a  b   c d
// [1,2],[2, 1]
// a == c and b == d "1-2" && "1-2"
// a == d and b == c "2-1" && "2-1"

// 0 + 1
// 0 + 2
// 1 + 2

//
