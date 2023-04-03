// snippet 0-1
let greet = function () {
    console.log("hey");
    console.log("programmers");
  };
  
  let whistle = function () {
    console.log("doot");
  };
  
  console.log("first");//first
  console.log("second");//second
  greet();//hey   , programmers
  console.log("third"); //third
  console.log("fourth"); //fourth
  whistle();//doot

// snippet 0-2
let howMany = function () {
    return 42;
  };
  
  console.log(howMany); //f(){}
  console.log(howMany());//42
  
  const theAnswer = howMany();
  console.log(theAnswer);//42
  
  let howMuch = function () {
    5;
  };
  console.log(howMuch());//undifined;

  // snippet 0-3
let average = function (num1, num2) {
    console.log("calculating...");
    return (num1 + num2) / 2;
  };
  
  console.log(average(5, 10));//calculating... , 7.5
  console.log(average(20, 26));//calculating... , 23
  console.log(average(50, 100) + 2);//calculating... , 76
  
  let a = 21 + 3;
  let b = 20;
  let n = average(a, b);
  console.log(average(n, 18)); //calculating... , 20

  // snippet 0-4
let exclaim = function (str) {
    let capitalized = str.toUpperCase();
    return capitalized + "!!";
  };
  
  let result = exclaim("potato");
  console.log(result);//POTATO!!
  console.log(result.length);//8
  console.log(result[0]);//P
  console.log(result[result.length - 1]);//!