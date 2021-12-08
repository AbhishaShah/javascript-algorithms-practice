/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
        
    let numsLen = nums.length;
    let index = 0;
        
    for(let i = 0; i < numsLen ; i++){
        
        if(nums[i] !== 0){ // will be storing non-zero elements in nums
            nums[index] = nums[i];
            index++;
        }
    }

    // once all non zero element fill in array then
    // will be filling remaining array position with zero
    
    for(let j = index; j < numsLen;j++){
        nums[j] = 0;
    }
};