
 const merge = (arr1, m, arr12, n) => {
    // created two pointers p1 and p2 pointing to the arr1 and arr2 respectively
    let p1 = m-1
    let p2 = n-1

    // get last position of arr1
    let k = arr1.length - 1

    while(p2 >= 0){
        // start comparing values at the pointers p1 and p2,
        // put the larger value at k and decreasing the pointer k by 1.
        if(p1 >= 0 && arr1[p1] > arr12[p2]){ 
            arr1[k--] = arr1[p1--]           
        } else {
            arr1[k--] = arr12[p2--]
        }
    }
    
}