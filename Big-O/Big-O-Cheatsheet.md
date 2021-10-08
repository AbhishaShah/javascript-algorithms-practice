# Big O CheatSheet

- Big O notation, sometimes called **“asymptotic notation”**.

![Big O Chart](Big-O-chart.jpeg)


## Time Complexity: 
 - *The time complexity is the computational complexity that describes the amount of time it takes to run an algorithm.*

- Big O allows to measure the **time complexity** of an algorithm.

- Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm.


- When analyzing the time complexity of an algorithm we may find three cases: **best-case, average-case and worst-case.**

- Suppose we have the following unsorted list **[1, 5, 3, 9, 2, 4, 6, 7, 8]** and we need to find the index of a value in this list using linear search.

    
    - **best-case:** this is the complexity of solving the problem for the best input. In our example, the best case would be to search for the value 1. Since this is the first value of the list, it would be found in the first iteration.
    - **average-case:** this is the average complexity of solving the problem. We could say that the average-case would be when we’re searching for some value in the “middle” of the list, for example, the value 2 here.
    - **worst-case:** this is the complexity of solving the problem for the worst input of size n. In our example, the worst-case would be to search for the value 8, which is the last element from the list.
- Big-O notation gives us the algorithm’s approximate run time in the **worst case.**

## Calculating BIG O using Steps

**Step #1: Count the steps with worst case scenario**

```Javascript
const nemo = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']; // O(1);

function findNemo(array) {  
        for (let i = 0; i < array.length; i++) { // O(1);
            if (array[i] === 'nemo') { // O(n);
            console.log('Found NEMO!'); // O(n);
            break; // O(n);
            }
        }
    }

 // BIG O(1 + 1 + n + n + n ) => O(2 + 3n)  => O(3n) => O(n):Linear Time (Running time increases at most linearly with the size of the input data.)

 // Here worse case could be if "nemo" is the last element of the array

```
**Step #2: Different inputs should have different terms.**
- If there is more then one input then we need to use differnt term for each of them.
- In below examples time complexity depends on two inputs array1 and array2.

```Javascript
const array1 = [1,2,3,4,5];
const array2 = [10,20,30,40,50];

function arraySum(array1,array2){
        array1.forEach( element => console.log(element+10) ); // O(n)
        array2.forEach( element => console.log(element+10) ); // O(m)
    }
    arraySum(array1,array2);
    
    // BIG O(n + m) => + for steps in order
```
 ```Javascript
    const array1 = [1,2,3,4,5];
    const array2 = [10,20,30,40,50];

    function arraySum(array1,array2){
        array1.forEach( element =>  {  // O(n)
            console.log(element+10); 
            array2.forEach( element => console.log(element+10) ); // O(m)
        })
    }
    arraySum(array1,array2); 
    
    // BIG O(n * m) => * for nested steps
```

>  Gayle Laakmann McDowell, author of “Cracking the Coding Interview”, put it best:
*“If your algorithm is in the form ‘do this, then, when you’re all done, do that’ then you add the runtimes. If your algorithm is in the form ‘do this for each time you do that’ then you multiply the runtimes.”*

**Step #3: Drop constants and coefficients**
- Always needs to focus on scale of the algorithm, so we need to drop the constants and the coefficients first.
```Javascript
    function calculateNumbers(numbers){
         console.log('First display numbers and then do sum of them'); // O(1)
         console.log('these are the numbers:'); // O(1)
         numbers.forEach(num => console.log(num) ); // O(n)
        
         console.log('and these are their sums:'); // O(1)
          numbers.forEach( firstNumber =>  { // O(n)
            numbers.forEach( secondNumber => {  // O(n)
                console.log(firstNumber+secondNumber); // O(n)
            });
        });
    }
    calculateNumbers( [1,2,3,4,5]);
   //  BIG O(1 + 1 + n + 1 + n^2 + n ) => O(3 + 2n + n^2) => O(n + n^2)
```
- In this case, constant is 3. This makes sense to drop because 3 will never change even if our input of array increases by 1000%.
-  2 is our coefficient meaning that it is a numerical value which we are multiplying our variable by, so we can drop that too.

**Step #4: Drop non-dominants terms**
- Drop the non-dominant term, aka the part(s) of the expression that play a less significant role as our input increases. In our case, our non-dominant term would be n, leaving us with O(n^2) as our runtime.
    ```Javascript
    // BIG O(n + n^2) => O(n^2)
    ```

## - BigOs - 
**O(1)** Constant- no loops

**O(n)** Linear- for loops, while loops through n items

**O(n^2)** Quadratic- every element in a collection needs to be compared to ever other element. Two or more nested loops

**O(log N)** Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)

**O(n log(n))** Log Liniear- usually sorting operations

**O(2^n)** Exponential- recursive algorithms that solves a problem of size N

**O(n!)** Factorial- you are adding a loop for every element

**Iterating through half a collection is still O(n)**

**Two separate input:** 
-   O(n + m) => + for steps in order 
-   O(n * m) => * for nested steps

## Space Complexity: 
 - *Space complexity is the amount of memory used by the algorithm (including the input values to the algorithm) to execute and produce the result.*
 -  What causes Space complexity?
    -  Variables
    - Data Structures 
    - Function Call 
    - Allocations