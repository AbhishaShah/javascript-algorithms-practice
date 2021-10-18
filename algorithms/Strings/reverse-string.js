/* Write a function that reverses a string. The input string is given as an array of characters s.
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]
*/  

/* Using Brute force approach: 
 * We will loop through the half of the elements of the given array.
 * And then we will swap the element at the first place with last place, second place with second last place and so on.
 */

const reverseString = s => {
    if( (Array.isArray(s)) ?? s !== null ?? s.length > 0 ){
        s.reverse();
     }
};

reverseString(["h","e","l","l","o"]);

// Time complexity: O(n)
// Space complexity: O(1)

