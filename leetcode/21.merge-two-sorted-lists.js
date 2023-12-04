/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (61.51%)
 * Likes:    20471
 * Dislikes: 1913
 * Total Accepted:    3.7M
 * Total Submissions: 5.8M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * 
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: list1 = [], list2 = []
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 * 
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// initialize a dummy head node

// initialize a crtNode variable to keep track of the current node, starting with the dummy head node

// while there are still nodes to compare in two lists
// if value of 2nd node is less than value of 1st node
// set the current node's link to l2 node
// set the l2 node to l2's next node
// else
// set the current node's link to l1 node
// set the l1 node to l1's next node

// move on to the next node

// if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
// if both lists are empty, point crt's link to null

// return merged linked list

function mergeTwoListsCrt(l1, l2) {
    let dummy = new ListNode();
    let crtNode = dummy;

    while (l1 !== null && l2 !== null) {
        if (l2.val < l1.val) {
            crtNode.next = l2;
            l2 = l2.next;
        } else {
            crtNode.next = l1;
            l1 = l1.next;
        }
        crtNode = crtNode.next;
    }

    if (l1 !== null) {
        crtNode.next = l1;
    }
    if (l2 !== null) {
        crtNode.next = l2;
    }

    return dummy.next;
}


var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(-Infinity);
    let prev = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    if (!list1) prev.next = list2;
    if (!list2) prev.next = list1;

    return dummy.next;
}

// https://leetcode.com/problems/merge-two-sorted-lists/solutions/2705782/js-recursion-with-exlanation/?envType=study-plan-v2&envId=top-interview-150
var mergeTwoListsRecursion = function (list1, list2) {
    if (!list1) return list2;
    else if (!list2) return list1;
    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2
    }
};

// @lc code=end

