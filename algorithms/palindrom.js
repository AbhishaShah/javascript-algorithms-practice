/* 
A palindrome is a word or phrase that reads the same backward as forward.

input:
     "Never odd or eve1n"
     "Surprice"
output: 
      true
      false

*/

const palindrom = str => {
    
 const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
 const validStr = str.toLowerCase().
                        split("").
                        reduce((result,item) => 
                        validCharacters.indexOf(item) > 1? result.concat(item) : result, []);

 if(validStr.join("") === validStr.reverse().join("")){
      return true;
  }
  return false;
}
console.log(palindrom("Never odd or eve1n"));

module.exports = palindrom;