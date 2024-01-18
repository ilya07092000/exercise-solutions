function calculate(s: string): number {
	s = s.replace(/ /g, '');
	const stack = [];
	let result = 0;
	let num = 0;
	let prevSign = '+';

	for (let i = 0; i < s.length; i += 1) {
		if (isNumber(s[i])) {
			num = Number(num + s[i]);
		} else if (s[i] === '+') {
			result = performOperation(prevSign, result, num);
			num = 0;
			prevSign = '+';
		} else if (s[i] === '-') {
			result = performOperation(prevSign, result, num);
			num = 0;
			prevSign = '-';
		} else if (s[i] === '(') {
			stack.push(result);
			stack.push(prevSign);
			prevSign = '+';
			result = 0;
		} else if (s[i] === ')') {
			result = performOperation(prevSign, result, num);
			num = 0;
			if (stack.pop() === '-') {
				result *= -1;
			}
			result += stack.pop();
		}
	}

	return performOperation(prevSign, result, num);
}

const isNumber = (value) => /^-?[0-9]+$/gi.test(value);

const performOperation = (operation, num1, num2) => {
	switch (operation) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		default:
			throw new Error(`Operation ${operation} does not exist`);
	}
};

console.log(calculate('1 + 1')); // 2
// console.log(calculate('2-1 + 2')); // 3
// console.log(calculate('1 + (4 + 5 + 2) - 3 + (6 + 8)')); // 23
// console.log(calculate('1-(     -2)')); // 3
// console.log(calculate('-2+ 1')); // -1
// console.log(calculate('- (3 + (4 + 5))')); // -12;
// console.log(calculate('(7)-(0)+(4)')); // 11
// console.log(calculate('(6)-(8)-(7)+(1+(6))')); // -2

export {};
