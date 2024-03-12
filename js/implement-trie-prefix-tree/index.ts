class TrieNode {
  children: {[key: string]: TrieNode};
  isEndOfTheWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfTheWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let currentLetter = this.root;

    for (let i = 0; i < word.length; i += 1) {
      let letter = word[i];

      if (!currentLetter.children[letter]) {
        currentLetter.children[letter] = new TrieNode();
      }

      currentLetter = currentLetter.children[letter];
    }

    currentLetter.isEndOfTheWord = true;
  }

  search(word: string): boolean {
    let currentLetter = this.root;

    for (let i = 0; i < word.length; i += 1) {
      let letter = word[i];

      if (!currentLetter.children[letter]) {
        return false;
      }

      currentLetter = currentLetter.children[letter];
    }

    return currentLetter.isEndOfTheWord;
  }

  startsWith(prefix: string): boolean {
    let currentLetter = this.root;

    for (let i = 0; i < prefix.length; i += 1) {
      let letter = prefix[i];

      if (!currentLetter.children[letter]) {
        return false;
      }

      currentLetter = currentLetter.children[letter];
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
