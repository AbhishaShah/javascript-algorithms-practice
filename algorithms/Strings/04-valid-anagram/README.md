# Valid Anagram Problem
Given two strings s and t, return true if t is an anagram of s, and false otherwise. 

[LC-242](https://leetcode.com/problems/valid-anagram/)

## Examples
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

## Approach 
- **Counting Based algorithm: Storing/Comparing character and its count in object**
- Check if both strings length are not same then return false.
- Iterate through string s.
   - Check if character exist in object
    - If NO then, add character in object with value 1.
    - If YES then increment character value by 1.
- Iterate through string t.
   - Check if character exist in object.
    - If NO then, it means character is different in string t so return false.
    - IF YES then decrement character value by 1.If value become 0 then delete that characte from object.
- Check obejct length,if its greater then 0 it means both strings are not anagram return false
- otherwise return true.

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`

## References

- [YouTube](https://www.youtube.com/watch?v=rpMbqzlvKtA)