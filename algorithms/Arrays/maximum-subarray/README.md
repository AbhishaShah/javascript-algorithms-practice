# Maximum Subarray Problem
 Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  [LC-53](https://leetcode.com/problems/maximum-subarray)

## Example

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

## Approach 
- First, we will declare two elements, one which stores the maximum end of the subarray and another which stores the maximum sum so far. Let these two variables be maxSum and currentSum, respectively. 
- Initialize maxSum as lowest negative value and currentSum as 0
- Iterate over the array
   - Add current sum with array ith value
   - Compare currentSum with maxSum. If currentMax is greater then assign its value to maxSum.
   - If current sum is negative then make it 0 as now we don't need previous array value and star over with new subarray
          
## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`

## References

- [YouTube](https://www.youtube.com/watch?v=HCL4_bOd3-4)