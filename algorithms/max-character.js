/*
Given a string of characters, return the character that appears the most often.
input: "Hello world"
output: "l"
*/

const maxCharacter = str => {

    let charAry = [];
    for(let i = 0; i < str.length; i++) {
       if(charAry[str[i]]) {
           charAry[str[i]]++;
       }
       else {
           charAry[str[i]] = 1;
        }
    }
    let maxCount = 0;
    let maxChar = null;
    
    for(key in charAry){
     if(charAry[key] > maxCount){
        maxCount = charAry[key];
        maxChar = key;
     }
    }

    return maxChar;     
    
}

console.log(maxCharacter("Hello world"));

module.exports = maxCharacter;