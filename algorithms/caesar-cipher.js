/*
Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
input: "I love JavaScript!", 100
output: "E hkra FwrwOynelp!" 
*/

const caesarCipher = (str,num) => {
    
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    const input =  str.toLowerCase();

    let output = '';
    for(let i = 0; i < input.length; i++){

        let letter = input[i];
        if(alphabets.indexOf(input[i]) === -1){
            output += letter;
            continue;
        }

        let index = alphabets.indexOf(letter) + num % 26;
        if(index > 25) {
            index -=26;
        }
        else if(index < 0) {
            index +=26;
        }

        output += str[i].toUpperCase() === str[i] ? alphabets[index].toUpperCase() : alphabets[index];  
    }
    return output;
}

console.log(caesarCipher("I love JavaScript!", 100));

module.exports = caesarCipher;