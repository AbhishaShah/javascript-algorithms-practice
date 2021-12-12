# First Unique Character in a String Problem
 Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.   

[LC-387](https://leetcode.com/problems/first-unique-character-in-a-string/)

## Examples
Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

## Approach 
- **Using Hashmap**
- Declare new map and Iterate through string
- Check if first element is in the map
    - If NO then store first element as key and its index as value in the map .
    - If YES then update element's value to -1 as we don't need that value now because character is repeating.
- Initialize firstUniqIndex as -1. [To handle edge case when string don't contain unique characters.For example string "aabb". As per test case it should return -1].
- Loop through map's values
    - Check for first value which is not -1, it means we found first non-repeating character's index so break the loop.

## Complexity

- **Time:** `O(n)` As the string need to be traversed at-least once.
- **Space:** `O(n)` Space is occupied by the use of hash map.