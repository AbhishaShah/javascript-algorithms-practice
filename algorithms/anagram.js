/*
 Given word or phrase that's formed by rearranging the letters of another word or phrase
 input: 
    "Hello world" "world hello"
    "Hello world" "hello there"
 output: 
    true
    false
*/

const anagarm = (str1,str2) => {

    let sortstr1 = str1.toLowerCase().split("").sort().join("");
    let sortstr2 = str2.toLowerCase().split("").sort().join("");

    if(sortstr1 == sortstr2){
        return true;
    }
    return false;
}

console.log(anagarm("Hello world","world hello"));

module.exports = anagarm;
