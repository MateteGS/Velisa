// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

function removeCapitals(str){
    let newWord = "";
   for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
        newWord += str[i]
    }
   }
    return newWord
}

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'