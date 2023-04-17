// Write a function `objectAdd` that accepts two objects as arguments. The function should return 
// a new object containing the same keys as the object arguments. If a key is found in both
// objects, its corresponding value should be the sum of the values in the object arguments. If a key 
// is only found in one of the objects, then it's corresponding value should be the same as that one 
// object.

function objectAdd(obj1,obj2){
    let obj = {};
    let k1 = Object.keys(obj1);
    let k2 = Object.keys(obj2);
    let newArr = [...k1,...k2];
    for(let i = 0; i < newArr.length; i++){
        let k = newArr[i];
       if(obj1.hasOwnProperty(k) && obj2.hasOwnProperty(k)){
        obj[k] = obj1[k] + obj2[k];
       } else if(obj1.hasOwnProperty(k)){
        obj[k] = obj1[k]
       } else {
        obj[k] = obj2[k]
       }
    }
   return obj
}
let obj1 = { x: 3, y: 10};
let obj2 = { y: 2, x: 1};
console.log(objectAdd(obj1, obj2)); // { x: 4, y: 12 } 

let obj3 = { a: 3, b: 2, c: -1};
let obj4 = { b: 5, c: 1, e: 4};
console.log(objectAdd(obj3, obj4)); // { a: 3, b: 7, c: 0, e: 4 }