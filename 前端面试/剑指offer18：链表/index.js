/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let headNote = new ListNode()
  headNote.next = head
  let previous = headNote
  let current = head

  while (current) {
    if (current.val === val) {
      let temp = current.next
      previous.next = temp
      current.next = null
      break
    }
    previous = current
    current = current.next
  }
  return headNote.next
};