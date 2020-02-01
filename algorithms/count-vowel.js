/* 
Given a string of words or phrases, count the number of vowels.
input:"hello world"
output:3
*/

const vowelList = ['a','e','i','o','u'];
const countVowel = str => {

   const vowels = str.toLowerCase().split("").filter(item => vowelList.includes(item) );
   return vowels.length;
}

console.log(countVowel("hellO world"));

module.exports = countVowel;