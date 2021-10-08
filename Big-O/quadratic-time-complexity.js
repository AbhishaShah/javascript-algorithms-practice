/* Quadratic Time — O(n^2)
    * It is commonly found if nested loops are used in program.
    * If function with 3 nested loops, then it will likely be O(n³) or cubic time. Four nested loops would be O(n⁴) and so on.
    * In short add the number of nested loops.
*/

const array_2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function sumOfNestedArrays(array_2d){
    let count = 0;
    array_2d.forEach(element => {    // O(n)
        element.forEach(item => count = count + item); // O(n)
    });
    console.log(count); // 45
}

sumOfNestedArrays(array_2d);

// BIG O(n * n) => O(n^2) 