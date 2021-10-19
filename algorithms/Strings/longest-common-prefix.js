/* 
    Write a function to find the longest common prefix string amongst an array of strings.
    Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    
    Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
*/

const longestCommonPrefix = strs => {
    let longestCommonPrefix = '';
    if(strs === null || strs.length === 0){
        return longestCommonPrefix;
    }
    // first find minimum length of string (because common characters cannot be more than the length of the shortest string of all the given strings.)
    let minLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        minLength = Math.min(minLength, strs[i].length);
    }

    // Loop for the minimum length
    for (let i = 0; i < minLength; i++) {
        let current = strs[0][i]; 
        
        for (let j = 1; j < strs.length; j++) {
            if(current !== strs[j][i]){
                return longestCommonPrefix;           
             }         
        }

        longestCommonPrefix += current;
        
    }
    return longestCommonPrefix;
 
}

//console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["a"])); // "a"

/*
Time Complexity
If n is the length of the array and m is the length of the shortest string, the worst case time complexity will be O(m × n).

Space Complexity
Since we are not using any internal data structure for intermediate computations, the space complexity will be O(1).
 */