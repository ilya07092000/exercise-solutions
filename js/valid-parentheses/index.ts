function isValid(s: string): boolean {
	const stack = [];
	const arr = s.split('');

	for (let i = 0; i < s.length; i += 1) {
		const item = arr[i];

		if (item === '(' || item === '{' || item === '[') {
			stack.push(item);
			continue;
		}

		if (item === ')' && stack.pop() !== '(') {
			return false;
		}

		if (item === '}' && stack.pop() !== '{') {
			return false;
		}

		if (item === ']' && stack.pop() !== '[') {
			return false;
		}
	}

	return !stack.length;
}
