const vowels = ['a', 'e', 'i', 'o', 'u'];

function halvesAreAlike(s: string): boolean {
	const middle = Math.floor(s.length / 2);
	let counter = 0;

	for (let i = 0; i < middle; i += 1) {
		if (isVowel(s[i])) {
			counter += 1;
		}

		if (isVowel(s[middle + i])) {
			counter -= 1;
		}
	}

	return counter === 0;
}

const isVowel = (letter: string) => vowels.includes(letter.toLowerCase());
