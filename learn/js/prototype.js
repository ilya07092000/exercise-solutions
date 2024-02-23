/**
 * all objects has __proto__
 * __proto__ is object
 *
 */

let ob = {};
let arr = [];
let age = 18;
function func() {}
// console.log(ob.__proto__, ob.prototype);
// console.log(arr.__proto__, arr.prototype);
// console.log(age.__proto__, age.prototype);
// console.log(func.__proto__, func.prototype);

/**
 * They (__proto__) are equal becuase they were created with the help of
 * the same contructor.
 * E.g new Object, new Array, new Number, etc....
 *
 * Every object is created with help of class (constructor)
 * Every object has __proto__
 */
// console.log({}.__proto__ === {}.__proto__); // true
// console.log([].__proto__ === [].__proto__); // true
// let num1 = 1;
// let num2 = 2;
// console.log(num1.__proto__ === num2.__proto__); // true

/**
 * Each class or function has prototype
 */
// console.log({}.prototype); // undefined
// console.log([].prototype); // undefined
// console.log(Object.prototype); // [Object: null prototype] {}
// console.log(Function.prototype); // {}
// console.log(Array.prototype); // Object(0) []
// console.log(Number.prototype); // Object(0) []
// console.log(Promise.prototype); // Object [Promise] {}

/**
 * object's __proto__ is equal to the class prototype where this object was created
 */
// console.log(Object.prototype === {}.__proto__); // true
// console.log(Object.getPrototypeOf({}) === Object.prototype); // true;

function User() {
  this.name = 'Ilya';
  this.surName = 'Ischenko';
  this.test = function test() {
    console.log(123);
  };
}

User.prototype.hello = () => {
  console.log('hello');
};
// console.log(User.prototype === new User().__proto__); // true;
// console.log(User.prototype.hello === new User().__proto__.hello); // true;

/**
 * TEST
 */
let user = {name: 'Ilya'};
// console.log(user.prototype); // undefined
// console.log(Object.getPrototypeOf(user)); // [Object: null prototype] {}
// console.log(Object.getPrototypeOf(user) === Object.prototype); // true
// console.log(user.__proto__ === Object.prototype); // true

class SomeClass {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('Hi!');
  }
}

// console.log(SomeClass.prototype); // {}
// console.log(SomeClass.__proto__ === Function.prototype); // true

const instance = new SomeClass('test');
console.log(instance.__proto__.__proto__ === Object.prototype);
// console.log(instance.prototype); // undefined
// console.log(instance.__proto__ === SomeClass.prototype); // true;
// console.log(SomeClass.prototype.hello); // [Function: hello]

function someFunc() {}
// console.log(someFunc.prototype === someFunc.__proto__); // false
// console.log(Function.prototype === someFunc.__proto__); // true
