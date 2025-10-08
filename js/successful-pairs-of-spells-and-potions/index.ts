const getMinPotionsForSpell = (spell: number, min: number) => {
  if (spell > min) {
    return 0;
  }

  return Math.ceil(min / spell);
};

const getMinPotionIndexFromSortedPotions = (potions: number[], min: number) => {
  if (potions[potions.length - 1] < min) {
    return null;
  }

  let left = 0;
  let right = potions.length - 1;
  let middle;
  let result = Number.MAX_SAFE_INTEGER;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);

    const potion = potions[middle];

    if (potion >= min) {
      result = Math.min(middle, result);
    }

    if (potion >= min) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return result;
};

function successfulPairs(
  spells: number[],
  potions: number[],
  success: number,
): number[] {
  potions.sort((a, b) => a - b);

  const lastPotionIndex = potions.length - 1;

  return spells.reduce<number[]>((acc, spell) => {
    const minPotions = getMinPotionsForSpell(spell, success);

    if (minPotions === 0) {
      acc.push(potions.length);
    } else {
      const minPotionsIndex = getMinPotionIndexFromSortedPotions(
        potions,
        minPotions,
      );

      if (minPotionsIndex !== null) {
        acc.push(lastPotionIndex - minPotionsIndex + 1);
      } else {
        acc.push(0);
      }
    }

    return acc;
  }, []);
}
