function lengthOfLastWord(s: string): number {
	const wordArr = s.trim().split(' ');
	return wordArr[wordArr.length - 1].length;
}
