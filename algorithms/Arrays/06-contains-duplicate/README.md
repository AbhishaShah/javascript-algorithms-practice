# Move Zeroes Problem
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

  [LC-217](https://leetcode.com/problems/contains-duplicate)

## Examples
Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

## Approach 
- **Using Set Data Structure**
- Add all the elements of the array to the set.
- Check length of array with size of set.
- Set only holds unique values. So if we add all the elements from the array into the set, the length of set and array should be equal if there are no duplicates. Return true.
- Otherwise we should return false as there are all distinct values.
          
## Complexity

- **Time:** `O(n)` As We are adding all the numbers from the array into the set. 
- **Space:** `O(n)` As We are using Set data structure to store all the elements of the array.

## References

- [Medium](https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-contains-duplicate)