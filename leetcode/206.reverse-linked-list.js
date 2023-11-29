/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (71.95%)
 * Likes:    20110
 * Dislikes: 370
 * Total Accepted:    3.6M
 * Total Submissions: 4.8M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: head = []
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 * 
 * 
 * 
 * Follow up: A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let cur = head;
    let prev = null;
    let next;

    while (cur !== null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};

var reverseListEs6 = function (head) {
    let [prev, current] = [null, head]
    while (current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

// https://youtu.be/hMnwCgnfND4 - Reverse Linked List Solution Explained with Introduction to Linked Lists - Javascript
// @lc code=end

