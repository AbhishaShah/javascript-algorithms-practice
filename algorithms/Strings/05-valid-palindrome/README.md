# Valid Palindrome Problem
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

[LC-125](https://leetcode.com/problems/valid-palindrome/)

## Examples
Input: s = "race a car"
Output: true
Explanation: "racaecar" is a palindrome.


## Approach 
- **Tow pointer based approach**
- First remove non-alphabetic character and space from the string.
- Take Two pointers. Pointer one startPointer initialized to 0 and second one will be endPointer initialized to string length - 1.
- Iterate over the strings with these pointers.
- Compare characters, if not match then return false.
- Increment startPointer and decrement endPointer and compare characters untill startPointer < endPointer.
- Return true.

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`

## References

- [YouTube](https://www.youtube.com/watch?v=3jjptAxlivQ)