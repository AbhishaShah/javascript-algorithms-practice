/* Given a string s, return true if it is a palindrome, or false otherwise.
    Input: s = "racecar"
    Output: true
    Explanation: "racecar" is a palindrome.
*/

/* Approach 1: Using reverse built-in function */

const isPalindrome = s => {
    if(typeof s !== 'string' || s.length < 0){
        return false;
    }

    let newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if(newS === newS.split("").reverse().join("")){
        return true;
    }
    return false;

}

// Time complexity: O(n)
// Space complexity: O(1) 

/* Approach 2: Using Two Pointer */

/**
 * @param {string} s
 * @return {boolean}
 */

 const isPalindrome = s => {
    if(typeof s !== 'string' || s.length === 0){
        return false;
    }
    
    let newS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let startPointer = 0;
    let endPointer = newS.length-1;
    
    while(startPointer < endPointer) {
        if(newS[startPointer] !== newS[endPointer]) {
            return false;
        }
        startPointer++;
        endPointer--;
    }
     
    return true;
}

console.log(isPalindrome("raceacar")); // false

// Time complexity: O(n)
// Space complexity: O(1) 