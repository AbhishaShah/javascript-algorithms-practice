/* 
Given an integer, reverse the order of the digits.
input:
     1234
     -3400
output: 
      4321
      -43

*/

const reverse_integer = integer => {

 return parseInt(integer.toString().split("").reverse().join("")) * Math.sign(integer);

}
console.log(reverse_integer(-1200));

module.exports = reverse_integer;