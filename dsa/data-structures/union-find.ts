class UnionFind {
  values: number[];

  constructor() {
    this.values = Array.from({length: 26}, (_, i) => i);
  }

  find(index: number): number {
    if (this.values[index] === index) {
      return index;
    }

    return this.find(this.values[index]);
  }

  unite(x: number, y: number) {
    const xKey = this.find(x);
    const yKey = this.find(y);

    this.values[xKey] = yKey;
  }

  /**
   * BY ASC
   */
  // unite(x: number, y: number) {
  //   const xKey = this.find(x);
  //   const yKey = this.find(y);

  //   if (xKey > yKey) {
  //       this.values[xKey] = yKey;
  //   } else {
  //       this.values[yKey] = xKey;
  //   }
  // }
}
const unionFind = new UnionFind();

unionFind.unite(0, 1);
unionFind.unite(1, 2);
unionFind.unite(2, 3);

console.log(unionFind.values);
console.log(unionFind.find(2));

/**
  [A, B, C, D]
  [0, 1, 2, 3] 

  A -> B
  [1, 1, 2, 3]

  B -> C
  [1, 2, 2, 3]

  
*/
