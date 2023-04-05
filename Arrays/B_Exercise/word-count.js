// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.

function wordCount(sentence, targetWords){
    let newWord = sentence.split(" ");
    let count = 0;
    for(let i = 0; i < newWord.length; i++){
        if(targetWords.includes(newWord[i])){
            count++
        }
    }
    return count
}

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3