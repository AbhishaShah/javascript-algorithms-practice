# Reverse Linked List Problem
 Given the head of a singly linked list, reverse the list, and return the reversed list.

 [LC-206](https://leetcode.com/problems/reverse-linked-list)

## Examples
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

## Approach 
- **Iterative Approach**
- First we will get current variable with value head and previous variable with value null.
- Iterate loop untill current not equal to null because last element is always point to null.
- Take temporay variable temp with value current.next so that we don't miss next node.
- now assign previous value to the current's next value.
- current value becomes previous.
- temp becomes current value.
- Return previous variable because that is our new head.
          
## Complexity

- **Time:** `O(n)` 
- **Space:** `O(1)`

## References

- [YouTube](https://www.youtube.com/watch?v=ugQ2DVJJroc)