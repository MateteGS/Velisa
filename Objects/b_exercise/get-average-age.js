// Write a function `getAverageAge` function that accepts an array of objects representing people.
// The function should return the average age of the people.

function getAverageAge(arr){
    let newArr = [];
    let Average = 0;
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].age)
        let numba;
        for(let j = 0; j < newArr.length; j++){      
            numba = newArr[j];   
        }
        Average += numba
    }
    return (Average / arr.length).toFixed(2);
}

let peeps = [
    { name: "Lovelace", age: 36, born: "London, UK" },
    { name: "Kleene", age: 85, born: "Connecticut, US" },
    { name: "Turing", age: 41, born: "London, UK" },
    { name: "Hopper", age: 85, born: "New York, US" },
  ];
  console.log(getAverageAge(peeps)); // 61.75
  
  let people = [
    { name: "Orwell", age: 46, born: "Bihar, India" },
    { name: "Bradbury", age: 91, born: "California, US" },
    { name: "Huxley", age: 69, born: "California, US" },
  ];
  console.log(getAverageAge(people)); // 68.66