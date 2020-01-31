/* 
Given a string of characters as input, write a function that returns it with the characters reversed. 

input: "Hello World!";
output: "!dlroW olleH";

*/

const stringReversal = str => {
    return str.split("").reverse().join("");
}

const reverse_reduce = str => {
    return str.split("").reduce((result,item) => item + result )
}
    
console.log(reverse_reduce("Hello World!"));

module.exports = {reverse_reduce,stringReversal};



