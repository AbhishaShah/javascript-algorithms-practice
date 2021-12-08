# Move Zeroes Problem
 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 Note that you must do this in-place without making a copy of the array.

  [LC-283](https://leetcode.com/problems/move-zeroes)

## Example

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

## Approach 
- First we will store all non-zero elements in the same array based on new index which start from 0
- Then we will fill remaining array with 0 untill array length
          
## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`

## References

- [Medium](https://medium.com/@jayram_manale/leetcode-week-1-move-zeroes-703f03b27cb1)