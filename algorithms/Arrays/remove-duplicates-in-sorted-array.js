/* 
    Remove Duplicates In Sorted Array

    Example 1:
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]

    Example 2:
    Input: nums = [0,1,2,3,4,_,_,_,_,_]
    Output: 5, nums = [0,1,2,3,4]
*/

const removeDuplicates = nums => {
    if(nums === null || nums.length <= 1){
        return nums;
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) { 
        if(nums[i] === nums[i+1]){
            continue;
        }        
        nums[count] = nums[i];
        count++;
    }
    return count;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5

/* Time Complexity: We are scanning the array once, hence the time complexity will be O(n).
   Space Complexity:o=We have not used the external data structure so its O(1).
*/