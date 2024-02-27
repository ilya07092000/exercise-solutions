function asteroidCollision(asteroids: number[]): number[] {
  const result = [];

  for (let i = 0; i < asteroids.length; i += 1) {
    const asteroid = asteroids[i];
    let prevAsteroid = result[result.length - 1];
    let isNegativeAsteroid = Math.abs(asteroid) !== asteroid;

    if (!result.length) {
      result.push(asteroid);
      continue;
    }

    if (isNegativeAsteroid && prevAsteroid > 0) {
      if (Math.abs(asteroid) === prevAsteroid) {
        result.pop();
        continue;
      }

      if (prevAsteroid > 0 && Math.abs(asteroid) < prevAsteroid) {
        continue;
      }

      while (
        result.length &&
        prevAsteroid > 0 &&
        Math.abs(asteroid) >= prevAsteroid
      ) {
        result.pop();
        prevAsteroid = result[result.length - 1];

        if (Math.abs(asteroid) === prevAsteroid) {
          result.pop();
          break;
        }

        if (prevAsteroid < 0 || !result.length) {
          result.push(asteroid);
          break;
        }
      }
    } else {
      result.push(asteroid);
    }
  }

  return result;
}
