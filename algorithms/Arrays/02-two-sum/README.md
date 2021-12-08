# Two sum Problem
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  [LC-1](https://leetcode.com/problems/two-sum/)

## Example

Input: nums = [2,7,11,15], target = 9

Output: [0,1]

## Approach
- Create a new Map
- Iterate over the array
  - Subtract current array element from target.[ (9 - 2 = 7), so 7 is compliment here.]
  - Check if the above difference exists in Map
    - If YES, then return the current index and the value of the difference in Map
    - If NO, then store the compliment as Map key and current index as its value [we will store [7,0] in the map]
- Return empty array as a result if nums array iteration is completed in the above step
           

## Complexity

- **Time:** `O(n)` : As the whole array is needed to be traversed only once.
- **Space:** `O(n)` : We are using map to store data

## References

- [YouTube](https://www.youtube.com/watch?v=flnRuCf9Kko)