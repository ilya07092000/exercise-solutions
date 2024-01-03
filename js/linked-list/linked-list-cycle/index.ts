/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
	let slowPointer = head;
	let fastPointer = head?.next?.next;

	while (slowPointer?.next && fastPointer?.next?.next) {
		if (slowPointer === fastPointer) {
			return true;
		}

		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next.next;
	}

	return false;
}
