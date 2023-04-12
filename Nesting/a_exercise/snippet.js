// snippet 1
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(i, j);
    }
  }
  //1 1 , 1 2, 1 3,
  //2 1 , 2 2, 3 3,
  //3 1 , 3 2, 3 3,
  //4 1 , 4 2, 4 3,

  // snippet 2
for (let n = 0; n < 2; n++) {
    console.log("n=" + n);
    for (let m = 0; m < 5; m++) {
      console.log("   m=" + m);
    }
    console.log("n=" + n);
  }

//n=0 , n1
//  m=0
//  m=1
//  m=2
//  m=3
//  m=4
//n=0 ,  n1

// snippet 3
let friends = ["philip", "abby", "phelipe", "simcha"];

for (let i = 0; i < friends.length; i++) {
  for (let j = 0; j < friends.length; j++) {
    console.log(friends[i], friends[j]);
  }
}

//philip ["philip", "abby", "phelipe", "simcha"]
// abby ["philip", "abby", "phelipe", "simcha"]
// phelipe ["philip", "abby", "phelipe", "simcha"]
//simcha ["philip", "abby", "phelipe", "simcha"]

// snippet 4
let locations = ["flatbush", "williamsburg", "bushwick", "greenpoint"];

for (let i = 0; i < locations.length; i++) {
  for (let j = i + 1; j < locations.length; j++) {
    console.log(locations[i], locations[j]);
  }
}

//flatbush ["williamsburg", "bushwick", "greenpoint"],
//williamburg ["bushwick", "greenpoint"],
//bushwick ["greenpoint"]

// snippet 5
let colors = ["red", "purple", "orange"];

for (let i = 0; i < colors.length; i++) {
  let colorStr = colors[i];
  console.log(colorStr);

  for (let j = 0; j < colorStr.length; j++) {
    let char = colorStr[j];
    console.log(char);
  }
}

//red
//r e d
//purple 
//p u r p l e
//orange
//o r a n g e



