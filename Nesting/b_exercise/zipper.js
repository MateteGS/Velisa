// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the 
// same length.

function zipper(ar1,ar2){
    let newArr = [];
    for(let i = 0; i < ar1.length; i++){
        let one = ar1[i];
        for(let j = 0; j < ar2.length; j++){
            let two = ar2[j]
            if(i === j){
                newArr.push([one,two]); 
            }
           
        }
    }
    return newArr;
}

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]