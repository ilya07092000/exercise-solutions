/**
 * A trie or prefix tree.
 * the key can be searched in O(M) time
 * Requires a lot of space
 *
 * can be done either with help of array to store the children or with help of dictionary:
 * array - generate index of each letter with help of "letter.charCodeAt(0) - 'a'.charCodeAt(0)" and save it to children array.
 * dictionary - use the letter as a key (should be faster as for me and case sensitive)
 */
let ALPHABET_SIZE = 26;
class TrieNode {
  children: TrieNode[] | null[];
  isEndOfWord: boolean;

  constructor() {
    this.children = new Array(26).fill(null);

    // isEndOfWord is True if node represent the end of the word
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * The time complexity for creating a Trie is O(WL),
   * where W is the number of words, and L is an average length of the word.
   * This is because, for each word, we are traversing down the path that corresponds to each character in the word,
   * so in total, the runtime comes out to be O(WL).
   */
  insert(key: string) {
    // current node (root)
    let currentLetter = this.root;

    // Iterate across the length of the string
    for (let i = 0; i < key.length; i += 1) {
      // generate letter index from 0 to 25, where 0 is a and 25 is z
      const letterIndex = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
      // Check if the node exist for the current character in the Trie.
      if (currentLetter.children[letterIndex] === null) {
        // If node for current character does not exist
        // then make a new node
        currentLetter.children[letterIndex] = new TrieNode();
      }

      currentLetter = currentLetter.children[letterIndex] as TrieNode;
    }

    // mark last node as leaf
    currentLetter.isEndOfWord = true;
  }

  search(key: string) {
    // store current letter
    let currentLetter = this.root;

    // iterate through the string
    for (let i = 0; i < key.length; i += 1) {
      // generate letter index from 0 to 25, where 0 is a and 25 is z
      let letterIndex = key[i].charCodeAt(0) - 'a'.charCodeAt(0);

      // check if this letter exists next to the current letter
      if (currentLetter.children[letterIndex] === null) {
        return false;
      }

      // if exists then go to the next letter
      currentLetter = currentLetter.children[letterIndex] as TrieNode;
    }

    return currentLetter.isEndOfWord;
  }

  startsWith(key: string) {
    // store current letter
    let currentLetter = this.root;

    // iterate through the string
    for (let i = 0; i < key.length; i += 1) {
      // generate letter index from 0 to 25, where 0 is a and 25 is z
      let letterIndex = key[i].charCodeAt(0) - 'a'.charCodeAt(0);

      // check if this letter exists next to the current letter
      if (currentLetter.children[letterIndex] === null) {
        return false;
      }

      // if exists then go to the next letter
      currentLetter = currentLetter.children[letterIndex] as TrieNode;
    }

    return true;
  }
}

let trie = new Trie();
trie.insert('abc');
trie.insert('abcd');
trie.insert('abcdg');
trie.insert('blabla');
trie.insert('blab');
trie.insert('hi');
trie.insert('ilya');
console.log(trie.search('blab')); // true
console.log(trie.search('bla')); // false
console.log(trie.startsWith('bla')); // true
