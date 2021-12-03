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
    //possible min value is -10000 as defined in the question
    let maxSum = -10000
    let currSum = 0;
    
    let len = nums.length;
    
    for(let i = 0; i< len; i++){
        currSum = currSum + nums[i]
        
        if(currSum > maxSum){
            maxSum = currSum;
        }
        
        if(currSum < 0){
            currSum = 0;
        }
    }
    
    return maxSum;
};
