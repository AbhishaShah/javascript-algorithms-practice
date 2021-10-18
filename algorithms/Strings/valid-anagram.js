/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 ( An anagram is a word or phrase that's formed by rearranging the letters of another word or phrase.)
    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
*/

/* Brute force approach: 
    * Do comparison with nested Loop -> O(n*m)
 */


const isAnagram = (s,t) => {
    if(typeof s !== 'string' || typeof t !== 'string'|| s.length === 0 || t.length === 0 || s.length !== t.length){
        return false;
    }
    let sortS = s.toLowerCase().split("").sort().join();
    let sortT = t.toLowerCase().split("").sort().join();

    if(sortS === sortT){
        return true;
    } 
    return false;
}

console.log(isAnagram("anagram","nagaram")); // true
console.log(isAnagram("cat","rat")); //false

// Time complexity: O(n)
// Space complexity: O(1)