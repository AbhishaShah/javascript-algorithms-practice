/* Create a function that reverse a string:
    * 'Hi My name is Abhisha' should be 'ahsihbA si eman yM iH'
*/


// This is one way to solve, but we should avoid as it contains lots of code and we can simplify by using built in method of array 
function reverse(str){
    // First check for input 
    if(!str || str.length < 2 || typeof(str) !== 'string') {
        return "Provide valid string";
    } 
    let reverseStrArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStrArray.push(str[i]);
    }

    return reverseStrArray.join("");    
}
console.log(reverse("Hi My name is Abhisha"));

// Using built-in method
function reverse2(str) {
    if(!str || str.length < 2 || typeof(str) !== 'string') {
        return "Provide valid string";
    } 
    return str.split("").reverse().join("");
}
console.log(reverse2("Hi My name is Abhisha"));

// Using ES6 syntax
const reverse3 = str => {
    if(!str || str.length < 2 || typeof(str) !== 'string') {
        return "Provide valid string";
    } 
    return [...str].reverse().join("");
}
console.log(reverse3("Hi My name is Abhisha"));
