# Merge Sorted Array into new Array Problem
 Given two sorted arrays arr1[] and arr2[]  Write a program to merge two arrays into new array

## Example

Input: arr1 = [0,3,4,31], arr2 = [3,4,6,30]

Output: [0, 3, 3, 4, 4, 6, 30, 31]

## Approach 
- Manage two pointers for each array
- Assign first index value to those pointers.
- Compare both pointers, whichever is greater add that pointer's value into new array and increment that pointer.

## Complexity

- **Time:** `O(m+n)` As we have two input arrays with different input size.
- **Space:** `O(1)`
