# Longest Common Prefix Problem
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".  

[LC-14](https://leetcode.com/problems/longest-common-prefix/)

## Examples
Input: strs = ["flower","flow","flight"]
Output: "fl"

## Approach 
- **Vertical scanning**
- First find minimum length of string (because common characters cannot be more than the length of the shortest string of all the given strings.)
- Loop through minlength.
    - Take  character of first string as current value one by one.
    - Loop through other strings
    - Compare current value to the element of second string and third and  so on..
    - If NOT match then return longestCommonPrefix
    - If YES match then add current value to the longestCommonPrefix.

## Complexity

- **Time:** `O(m*n)`, where n is the length of the array and m is the length of the shortest string.
- **Space:** `O(1)`

## References

- [YouTube](https://www.youtube.com/watch?v=gJOgI8TpSgc)