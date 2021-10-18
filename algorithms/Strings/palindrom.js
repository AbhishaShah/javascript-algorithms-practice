/* A palindrome word reads the same backward or forward.
    Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
    
    Example 1:

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:

    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
*/

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

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Time complexity: O(n)
// Space complexity: O(1)