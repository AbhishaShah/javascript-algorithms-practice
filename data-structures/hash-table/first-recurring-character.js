/* Given an array find first recurring character (which one get repeated first)
    Input: [2,5,1,2,5,6]
    Output: 2

    Input: [2,1,1,5,6]
    Output: 1

    Input: [2,1,9,3]
    Output: undefined
 */


// Naive way by using array we are nesting two loops so runtime is O(n^2) which is slower.
function firstRecurringCharacter(input){
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]){
                return input[i];
            }
        }        
    }
    return undefined;

} // O(n^2)

// using hash table, we are adding key in map and when key repeat we will return.
function firstRecurringCharacter2(input){
    let map = {}
    for (let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined){   // if key exist in map it means character came again and we can directly return it without continuing loop
            return input[i];
        }
        map[input[i]] = i;        
    }
    return undefined;
    
} // O(n)


console.log(firstRecurringCharacter2([2,5,5,1,2,5,6])); // 2

console.log(firstRecurringCharacter2([2,1,1,5,6])); // 1

console.log(firstRecurringCharacter2([2,1,9,3])); // undefined

console.log(firstRecurringCharacter2([2])); // undefined

console.log(firstRecurringCharacter2([])); // undefined