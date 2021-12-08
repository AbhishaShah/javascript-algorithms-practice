/* Find contiguous subarray which has the largest sum and return its sum.
    Input: [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Using Kadane's Algorithm
 var maxSubArray = function(nums) {
    
    if(nums.length === 0) {
        return 0;
    }
    
    if(nums.length === 1) {
        return nums;
    }
    // possible min value is -10000 as defined in the question
    let maxSum = -10000 // or -Infinity => To handle edge case of all negetaive elements in the array
    let currSum = 0;
    
    let len = nums.length;
    
    for(let i = 0; i< len; i++){
        currSum = currSum + nums[i]
        
        if(currSum > maxSum){ // update the maxsum if the current subarray sum is found to be greater
            maxSum = currSum;
        }
        
        if(currSum < 0){ //   // if the currSum sum is negative, set it to 0 (which represents  an empty subarray)
            currSum = 0;
        }
    }
    
    return maxSum;
};
