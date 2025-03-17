function repairCars(ranks: number[], cars: number): number {
  const canRepair = minutes => {
    let result = 0;

    for (const rank of ranks) {
      result += Math.floor(Math.sqrt(minutes / rank));

      if (result >= cars) {
        return true;
      }
    }

    return result >= cars;
  };

  const minimun = Math.min(...ranks) * cars * cars;

  let left = 1;
  let right = minimun;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canRepair(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
