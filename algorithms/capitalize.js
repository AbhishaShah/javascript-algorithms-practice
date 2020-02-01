/*

Given a phrase, capitalize every word.

input: "hello world"
output: "Hello World"

*/

const capitalize = str => {

    const capitalizeAry = str.split(" ").map(str => str.slice(0,1).toUpperCase() + str.slice(1,str.length) );
  
     return capitalizeAry.join(" ");

}

console.log(capitalize("hello world!"));
module.exports = capitalize;