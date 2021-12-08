/* Given two integer sorted arrays, merge arrays in sorted non-decreasing order.
    Input: arr1 = [0,3,4,31], arr2 = [3,4,6,30]
    Output:[0, 3, 3, 4, 4, 6, 30, 31]
 */

    function mergeSortedArrays(array1 = [],array2 = []){

        // check for input validation
        if(array1.length === 0 && array2.length === 0){
            return "Both arrays are empty";
        }
        else if(array1.length === 0) { // if array1 is empty then no need to follow merge steps and return array2
            return array2;
        }
        else if (array2.length === 0) { // if array2 is empty then no need to follow merge steps and return array1
            return array1;
        }
    
        const mergeArray = [];
        let array1Item = array1[0];
        let array2Item = array2[0];
        let i = 1;
        let j = 1;
    
        while(array1Item || array2Item){
            if(!array2Item || array1Item < array2Item){
                mergeArray.push(array1Item);
                array1Item = array1[i];
                i++;
            } else {
                mergeArray.push(array2Item);
                array2Item = array2[j];
                j++;
            }
        }
        return mergeArray;
    }
    
    //console.log(mergeSortedArrays()); // => "Both arrays are empty";
    
    //console.log(mergeSortedArrays([], [2,4,5]));  // => [2, 4, 5]
    
    console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));   // =>  [0, 3, 3, 4, 4, 6, 30, 31]
    