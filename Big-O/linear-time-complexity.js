/* Linear Time — O(n)
    * An algorithm is said to have a linear time when its running time dependent on the input data (n).
    * Ex: When algorithm having loop through each of items of array it means its linear time.
*/

function printData(items){
    items.forEach((item,index) => { // O(n)=> runtime increase linearly as the input increases. 
        console.log(`item ${index}: ${item}`);  // O(1)
    });
}

// BIG O(n + 1) => O(n) 