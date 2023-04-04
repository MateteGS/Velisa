// snippet 1
console.log("hello"); //hello

for (let i = 0; i < 5; i++) {
  console.log("code"); // 5 * code
}

console.log("goodbye"); // goodbye

// snippet 2
console.log("hi"); // hi

for (let i = 3; i <= 7; i++) {
  console.log("program"); // 5*program   concurently 
  console.log(i); //3 , 4, 5, 6, 7    concurently   
}

console.log("bye"); //bye

// snippet 3
let foo = function () {
    for (let num = 10; num > 0; num -= 2) {
      console.log(num);
    }
  };
  
  console.log("begin"); //begin
  foo(); // 10, 8, 6, 4, 2
  console.log("end");//end
  foo();// 10, 8, 6, 4, 2 

  // snippet 4
let word = "street";
for (let i = 0; i < word.length; i++) {
  console.log(i); //0, 1, 2, 3, 4, 5      concurently
  console.log(word[i]); // s, t, r, e, e, t concurently
}

// snippet 5
let total = 0;
for (let i = 1; i < 5; i++) {
  total += i;
  console.log(total); // 1 , 3, 6, 10
}

console.log("grand total: " + total); // grand total: 10