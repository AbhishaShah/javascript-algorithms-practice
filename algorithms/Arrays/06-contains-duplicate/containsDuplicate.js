/* Given an array, return true if any value appears at least twice in the array, and return false if every element is distinct.
    Input: nums = [1,2,3,1]
    Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Approach 1: Brute Force [O(n^2)] Compare each element with every other elements one by one.
 var containsDuplicate = function(nums) {
    if (nums == null || nums.length == 0) return false;
    
    const numsLen = nums.length;
    
    for(let i = 0; i< numsLen; i++){
        for(let j = i+1; j< numsLen; j++){
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// Approach 2: Storing value in Map data structure
var containsDuplicate = function(nums) {
    if (nums == null || nums.length == 0) return false;
    
    const numsLen = nums.length;
    
    let myMap = new Map();
    for(let i = 0; i< numsLen; i++){
        if(myMap.has(nums[i])){ // check current value is in the map. If found means value is repeating then return true
            return true;
        }
        myMap.set(nums[i]); // otherwise add value into the map
    }
    return false; 
};

// Time Complexity: O(n)
// Space Complexity: O(n) => We are using  Map to store elememts

// Approach 3: Using Set data structure:  Set only holds unique values. So if we add all the elements from the array into the set, the length of set and array should be equal if there are no duplicates.
var containsDuplicate = function(nums) { 

    const mySet = new Set(nums);
    if(mySet.size !== nums.length){
        return true;
    }
    return false;
}
// Time Complexity: O(n)
// Space Complexity: O(n) => We are using Set to store elememts