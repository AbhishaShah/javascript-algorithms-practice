/* Check if given array has 2 elements whose sum is equal to the given value
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*  Approach 1: Brute Force [O(n^2)]
    start at the first number, and try adding it to every possible number in the list,
    then repeat the same with the next number, until either a solution is found, or we run out of numbers. 
*/
 var twoSum = function(nums, target) {
    let ans = [];
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length-1; j++){
            if(nums[i]+nums[j] === target){
                ans.push(i,j);
                return ans;
            }
        }
    }
}

/*  Approach 2 : By creating map and store compliment value as key and current index as value */

var twoSum = function(nums, target) {

    // if empty array
    if(nums.length === 0 ){
        return 'Array is empty';
    }

    const compMap = new Map();
    const numLen = nums.length; // calculate length always outside of loop to reduce complexity of calculating it over and over inside loop
    
    for(let i = 0; i< numLen; i++){
        let currValue = nums[i];
        if(compMap.has(currValue)) { // check if compliment already in map 
            return [compMap.get(currValue), i]; // yes, return complement's value and current index
        }
            compMap.set([target-currValue], i); // store compliment as key and current index as value
    }

    return []; // if not find the indices then return empty array
    
};