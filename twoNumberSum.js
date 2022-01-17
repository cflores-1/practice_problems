//Problem 1: twoNumberSum
/* 
Write a function that takes a non-empty array of distinct integers 
and an integer representing a target sum. If any two numbers in the input
array sum up to the target sum, the function should return them in an array, 
in any order. If no two numbers sum up to the target sum, the function 
should return an empty array.

*Note that the target sum has to be obtained by summing two different
integers in the array; you can't add a single integer to itself in 
order to obtain the target sum. 

*You can assume that there will be at most one pair of numbers 
summing up to the target sum. 

example: 
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
*/

/* we need to go through the array and add each number to check if it adds
you could go through and check if each pair add to the target sum 
or you could use a hash table
*/

//Non optimal approach
function twoNumberSum(array, targetSum) {
    //two loops
    for (let i = 0; i < array.length - 1; i++) {
        const numOne = array[i];
        for (let j = 0; j < array.length - 1; j++) {
            const numTwo = array[j];
            if (numOne + numTwo === targetSum) {
                return [numOne, numTwo];
            }
        }
    }
    return [];
}
//Time: O(n^2)
//Space: O(1)

//Using a hash table
function twoNumberSum(array, targetSum) {
    //store nums
    const nums = {};
    for (const num of array) {
        //checks to see if the number 
        const maybeMatch = targetSum - num;
        if (maybeMatch in nums) {
            return [maybeMatch, num];
        } else {
            nums[num]
        }
    }
}
