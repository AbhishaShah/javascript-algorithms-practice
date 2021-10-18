/* 
    Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
    
    Example 1:
        Input: s = "loveleetcode"
        Output: 2
    Example 2:
        Input: s = "aabb"
        Output: -1
*/

/* Using Brute force approach: 
    * We will compare indexof first character with lastIndexOf method but it cause O(n^2)
 */

const firstUniqChar = s => {
    if(s.length > 0 && typeof(s) === 'string'){
        let uniqueCharacters = new Map();
        for (let i = 0; i < s.length; i++) {
            if(uniqueCharacters.has(s[i])) {
                uniqueCharacters.set(s[i],-1); // meaning character is repeating and we need unique one so can be set as -1 
            }
            else {
               uniqueCharacters.set(s[i],i);  // storing character with its index
            }
        }
        let firstUniqIndex = -1;
        for (let index of uniqueCharacters.values()) {
            if(index !== -1){
                firstUniqIndex = index;
                break;
            }
        }
        return firstUniqIndex;

    }
    
};

console.log(firstUniqChar('aabb')); // -1

// Time complexity: O(n)
// Space complexity: O(1)