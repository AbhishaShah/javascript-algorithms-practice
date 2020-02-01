/* 
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
input: [1, 2, 2, 3, 4], 4
output:[ [2,2], [3,1] ]
*/

const equalToSum = (array,sum) => {
    
    const pairs = [];
	const temp = [];

	for (let part1 of array) {
        const part2 = sum - part1;
		if (temp.indexOf(part2) !== -1) pairs.push([part1, part2]);
		temp.push(part1);
	}

	return pairs;

}

console.log(equalToSum([1, 2, 2, 3, 4], 4));

module.exports = equalToSum;

