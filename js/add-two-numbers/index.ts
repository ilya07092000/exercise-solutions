// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	const num1 = BigInt(traverseList(l1));
	const num2 = BigInt(traverseList(l2));

	const resultArray = String(num1 + num2).split('');
	const root = new ListNode(+resultArray[resultArray.length - 1]);
	let lastNode = root;

	for (let i = resultArray.length - 2; i >= 0; i -= 1) {
		const newNode = new ListNode(+resultArray[i]);
		lastNode.next = newNode;
		lastNode = newNode;
	}

	return root;
}

const traverseList = (list: ListNode): string => {
	let result = String(list.val);
	let item = list;

	while (item.next) {
		item = item.next;
		result = item.val + result;
	}

	return result;
};
