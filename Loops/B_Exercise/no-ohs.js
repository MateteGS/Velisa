// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

function noOhs(str){
    let value = "o";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(!value.includes(char)){
            console.log(char)
        }
    }
}

noOhs("code");
// prints
//  c
//  d
//  e

noOhs("school");
// prints
//  s
//  c
//  h
//  l