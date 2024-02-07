/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
  stack: any[];

  constructor(root: TreeNode | null) {
    this.stack = [];
    let currNode = root;
    while (currNode !== null) {
      this.stack.push(currNode);
      currNode = currNode.left;
    }
  }

  next(): number {
    const node = this.stack.pop();
    if (node?.right) {
      this.stack.push(node.right);
      let currNode = node.right;
      let leftNode = currNode.left;
      while (leftNode) {
        this.stack.push(leftNode);
        leftNode = leftNode.left;
      }
    }
    return node?.val;
  }

  hasNext(): boolean {
    return !!this.stack.length;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
