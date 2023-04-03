// snippet 0-1
if (true) {
    console.log("foo");//foo
  }
  
  if (false) {
    console.log("bar");
  }

  // snippet 0-2
if (false || false) {
    console.log("boop");
  }
  
  if (true || false) {
    console.log("beep"); //beep
  }

  // snippet 0-3
let num = 40;

if (num > 0) {
  console.log("zip");//zip
}

if (num % 2 === 0) {
  console.log("zoop");//zoop
}

// snippet 0-5
let sentence = "roger that";

if (sentence[sentence.length - 1] === "t") {
  console.log("ends in t");//ends in t
} else {
  console.log("does not end in t");
}

if (sentence.length <= 4) {
  console.log("short");
} else {
  console.log("long");//long
}
