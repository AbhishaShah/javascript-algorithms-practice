/* Given two integer sorted arrays, merge arrays in sorted non-decreasing order.
    Input: arr1 = [1,2,3,0,0,0], m = 3, arr2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
 */

 const merge = (arr1, m, arr2, n) => {
    // created two pointers p1 and p2 pointing to the arr1 and arr2 respectively
    let p1 = m-1
    let p2 = n-1

    // get last position of arr1
    let i = arr1.length - 1

    while(p2 >= 0){
        // start comparing values at the pointers p1 and p2,
        // put the larger value at i and decreasing the pointer i by 1.
        if(p1 >= 0 && arr1[p1] > arr2[p2]){ 
            arr1[i--] = arr1[p1--]           
        } else {
            arr1[i--] = arr2[p2--]
        }
    }
    
}