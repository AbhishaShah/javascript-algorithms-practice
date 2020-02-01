/* 
Given an array and a size, split the array items into a list of arrays of the given size.
input: [1, 2, 3, 4], 2
output: [1,2],[3,4]
*/

const arrayChunk = (array,size) => {

    let chunks = [];    
    for(let i = 0; i < array.length; i += size){
        chunks.push(array.slice(i,i+size));
    }
    return chunks;
}

console.log(arrayChunk([10,20,30,40],2));
module.exports = arrayChunk;