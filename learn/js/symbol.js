/**
 * Symbol is a built-in object whose constructor returns a symbol primitive —
 * also called a Symbol value or just a Symbol — that's guaranteed to be unique.
 */

const sym2 = Symbol('foo');
const sym3 = Symbol('foo');

console.log(typeof sym2); // symbol
console.log(sym2 === sym3); // false
console.log(sym2); // false

/**
 * It's to create a new symbol!
 * Returns a Symbol object from the global symbol registry matching the given key if found.
 * Otherwise, returns a new symbol with this key.
 */
const t1 = Symbol.for('foo');
const t2 = Symbol.for('foo');

console.log(t1 === t2); // true

/**
 * Returns a key from the global symbol registry matching the given Symbol if found.
 */
console.log(Symbol.keyFor(t1));

const symbolKeyForT1 = Symbol.keyFor(t1);
console.log(Symbol.for(symbolKeyForT1) === t1); // true
