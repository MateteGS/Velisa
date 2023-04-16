// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

function removeDupes(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let char = arr[i];
        if(!newArr.includes(char)){
            newArr.push(char)
        }

    }
    return newArr;
}

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]