// Here only variable i stored in memory so space complexity is O(1). 

function printHello(n){
    for (let i = 0; i < n.length; i++) {
        console.log("Hello"); 
 
    }
}
printHello([1,2,3,4,5]); // O(1)

// Here with variable i, data structure array also using memory  
function arrayOfHi(n) {
    let hiArray = [];
    for (let i = 0; i < n ; i++) {
        hiArray[i] = "hi";
    }
}
arrayOfHi(5) // O(n)