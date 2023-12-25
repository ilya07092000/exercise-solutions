const maxNum = Math.pow(2, 31);

function reverse(x: number): number {
	const isNegative = x < 0;

	const arrNum = Math.abs(x).toString().split('');
	const reversedNum = +arrNum.reverse().join('');

	if (reversedNum >= maxNum) {
		return 0;
	}

	return isNegative ? -reversedNum : reversedNum;
}

console.log(reverse(123000)); // 321
console.log(reverse(1534236469)); // 0
console.log(reverse(-2147483412)); // -2143847412
console.log(reverse(1463847412)); // 2147483641
console.log(reverse(-2147483648)); // 0
