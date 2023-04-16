// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

function twoSumPairs(numbers, target){
    let pair =[];
    for(let i = 0; i <  numbers.length; i++){
       let one = numbers[i];
       for(let j = i + 1; j < numbers.length; j++){
          let two = numbers[j];
          if(one + two === target){
           pair.push([one, two]);
          }
          
       }
    }
 return pair;
}

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]