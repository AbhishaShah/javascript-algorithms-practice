# Implement Queue using Stacks
 Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

  [LC-232](https://leetcode.com/problems/implement-queue-using-stacks/)

## Example

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]

Output
[null, null, null, 1, 1, false]

## Approach 
- Using two stacks, one for pushing elements and second to pop the elements.
- For push operation: add items to the stack1
- For pop operation: first remove all items from stack1 and add into stack2. so first item will get on top.Then store first item and again remove all items from stack2 and add back into stack1.
- For peek operation: get first item from stack1 which is current item.

## Complexity

- **Time:** `O(1)` for Push operation and `O(n)` for Pop operation
- **Space:** `O(1)`

## References

- [YouTube](https://www.youtube.com/watch?v=mDcP7tLuBhc)