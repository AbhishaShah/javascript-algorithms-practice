# Maximum Subarray Problem
 Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  [LC-53](https://leetcode.com/problems/maximum-subarray)

## Example

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

## Approach 
- **Using Kadane's Algorithm**
- Define two variables, currentSum which store the maximum sum of the subarray ending at the current position and maxSum which stores maximum sum so far.
- Initialize maxSum as lowest negative value and currentSum as 0
- Iterate over the arra and add the value of the current element to currSum and check-
   - If currentSum is greater than maxSum, update maxSum equals to currSum.
   - If currentSum is less than zero, make currentSum equal to zero as now we don't need previous array value and star over with new subarray.

- Why define -10000 // or -Infinity as maxSum
   - To handle edge case of all negetaive elements in the array. [ex:-2,-1,-3]
   - When we compre (currSum > maxSum) which is -2 > -1000 so maxSum become -2 and then continue.
   - But if we define maxSum as 0 then -2 > 0 always false so result will be 0 which is incorrect.
          
## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`

## References

- [YouTube](https://www.youtube.com/watch?v=HCL4_bOd3-4)