function maximumEnergy(energy: number[], k: number): number {
  const result = [...energy];

  for (let index = result.length - 1; index >= k; index -= 1) {
    const prevValue = result[index - k];

    result[index - k] = prevValue + result[index];
  }

  return Math.max(...result);
}
