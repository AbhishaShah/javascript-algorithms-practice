/* 
    LC-88
    Merge Sorted Array
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let p1 = m-1
    let p2 = n-1
    let index = nums1.length - 1

    while(p2 >= 0){
        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[index--] = nums1[p1--]            
        } else {
            nums1[index--] = nums2[p2--]
        }
    }
    
}

/* Time Complexity: O(n+m)
   Space Complexity: O(1)
*/