/* Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
    Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2

    Example 2:
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1

    Example 3:
    Input: haystack = "", needle = ""
    Output: 0
*/  

const strStr = (haystack, needle) => {
    if(needle === ""){
        return 0;
    }
    if(haystack === needle){
        return 0;
    }
    let firstOccurIndex = -1;
    for (let i = 0; i < haystack.length; i++) {
            if(haystack[i] === needle[0]){
                if(haystack.substring(i,i+needle.length) === needle){
                    firstOccurIndex = i;
                    break;
                }
            }
        
    }
    return firstOccurIndex;
   
};

//console.log(strStr("hello","ll")); // 2
console.log(strStr("aaa","a")); // 0

/* Time complexity
We are using a simple for loop to loop over the haystack, however, we are also using a substring method inside the loop with also has linear complexity, so complexity becomes O(n*m). where n is the length of haystack and m is the length of the needle

Space complexity = O(1)
*/