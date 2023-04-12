// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.

function lengthiestWord(str){
    let long = str.split(" ");
    let longer = "";
    for(let i = 0; i < long.length; i++){
        if(long[i].length > longer.length){
            longer = long[i]
            if(long[i].length === longer.length){
                longer = long[i]
            }
        }
    }
    return longer
}

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'