// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

function makeAcronym(str){
    let newStr = str.split(" ");
    let Acronym = "";
    for(let i = 0; i < newStr.length; i++){
        let word = newStr[i]
        Acronym += word[0]
    }
    return Acronym.toUpperCase();
}

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS