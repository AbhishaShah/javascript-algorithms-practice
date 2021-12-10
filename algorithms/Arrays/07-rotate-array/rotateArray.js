/* Given an array, rotate the array to the right by k steps, where k is non-negative.    
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Using Reversal Algorithm
 var rotate = function(nums, k) {
     
    const len = nums.length;

    // if k is larger than array, Ex k = 10 and len = 7 then insetad of rotating 10 times, simpley rotate 10%7= 3 times
    k = k % len; 

    // First reverse whole array
    reverse(nums, 0, len - 1);

    // Reverse first k elements
    reverse(nums, 0, k - 1);

    // Reverse remaining elements
    reverse(nums, k, len - 1);

 }

 var reverse = function(nums, start, end){
     while(start < end){
         let temp = nums[start];
         nums[start] = nums[end];
         nums[end] = temp;

         start++;
         end--;
     }
 }