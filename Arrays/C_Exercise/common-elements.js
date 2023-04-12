// Write a function `commonElements` that accepts two arrays as arguments. The function should return
// a new array containing the elements that are found in both of the input arrays. The order of
// the elements in the output array doesn't matter as long as the function returns the correct elements.

function commonElements(ar1,ar2){
    let pair = [];
    for(let i = 0; i < ar1.length; i++){
        let one = ar1[i]
        if(ar2.includes(one)){
            pair.push(one)
        }
    }
    return pair;
}

let arr1 = ["a", "c", "d", "b"];
let arr2 = ["b", "a", "y"];
console.log(commonElements(arr1, arr2)); // ['a', 'b']

let arr3 = [4, 7];
let arr4 = [32, 7, 1, 4];
console.log(commonElements(arr3, arr4)); // [4, 7]