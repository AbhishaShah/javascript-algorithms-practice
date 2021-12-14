/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 ( An anagram means both strings should have same characters and count should also be same)
    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
*/

/* Approach1: Brute force approach: 
    * Do comparison with nested Loop -> O(n*m)
 */

/* Approach2: Using Sorting algorithm */

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

// Time complexity: O(nlogn) As we are using sorting algorithm
// Space complexity: O(1) 

/* Approach 3: Storing in object */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s,t) => {
    // if both string counts are not same then they are not anagarm
    if(typeof s !== 'string' || typeof t !== 'string'|| s.length === 0 || t.length === 0 || s.length !== t.length){
        return false;
    }
    
    // create object to store letter and its count
    let letterCount = {}
    
    for(let i = 0; i < s.length; i++){ // loop through string s
        let char = s[i];
        if(char in letterCount) { // check if character is exist in object
            letterCount[char]++; // yes, then increase counter
        }
        else{
            letterCount[char] = 1; // add character in object with value 1
        }
    }
    
    for(let i = 0; i < t.length; i++){ // loop through string t
        let char = t[i];
        if(char in letterCount){ // check if character is exist in object
            letterCount[char]--; // if character exist then decrease its counter
            if(letterCount[char] === 0){  // if character counter become 0 then delete item from object.
                delete letterCount[char];
            }
        }
        else { // if not exist it means character is different in string t immediatly return false
            return false;
        }
    }
    
    // if object become empty it means both strings have same characters
    if(Object.keys(letterCount).length > 0){
        return false;
    }
    
    return true;
}

// we used two iterations (one per string) and provided a solution in linear time, so the time complexity is O(n), where n is the length of the string. Note that we are looping over both strings only once.