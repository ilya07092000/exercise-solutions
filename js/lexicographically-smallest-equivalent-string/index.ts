function letterToIndex(letter) {
  const char = letter.toUpperCase();

  return char.charCodeAt(0) - 65;
}

function indexToLetter(index) {
  return String.fromCharCode(index + 65);
}

class UnionFind {
  values: number[];

  constructor() {
    this.values = Array.from({length: 26}, (_, i) => i);
  }

  find(index: number) {
    if (this.values[index] === index) {
      return index;
    }

    return this.find(this.values[index]);
  }

  unite(x: number, y: number) {
    const xKey = this.find(x);
    const yKey = this.find(y);

    if (xKey > yKey) {
      this.values[xKey] = yKey;
    } else {
      this.values[yKey] = xKey;
    }
  }
}

function smallestEquivalentString(
  s1: string,
  s2: string,
  baseStr: string,
): string {
  const unionFind = new UnionFind();

  s1.split('').forEach((char, index) => {
    unionFind.unite(letterToIndex(char), letterToIndex(s2[index]));
  });

  const map = unionFind.values.reduce((acc, currKey, index) => {
    const letter = indexToLetter(index);
    const belongsTo = indexToLetter(unionFind.find(unionFind.values[index]));

    if (!acc[belongsTo]) {
      acc[belongsTo] = [];
    }

    if (!acc[letter]) {
      acc[letter] = [];
    }

    if (letter !== belongsTo) {
      acc[belongsTo].push(letter);
      acc[letter].push(belongsTo);
    }

    return acc;
  }, {});

  return baseStr
    .split('')
    .map(char => {
      const belongingChar = (
        map[char.toUpperCase()]?.[0] || char
      ).toLowerCase();

      return belongingChar < char ? belongingChar : char;
    })
    .join('')
    .toLowerCase();
}
