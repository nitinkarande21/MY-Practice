

//= >> assignment opreator,-- to assign the value the varibles
//== >> equality opreator, --to compare value of two opreator
//===>> equality opreator --it will comapare value as well as data type

let a = 40 ;  // assignment opreator

let b = "40"

console.log(a == b); // only value equality 
console.log(a === b); // it will check value and string 

let c = 20;
let d = 30;

console.log(a !=b); // not operator
console.log(c != d);

let isFav= true;
console.log("!",!isFav);

let e = 40;
let f = 50;
console.log(">",e > f);
console.log("<", e < f);
console.log("<=", e <= f); // less than equal to 

// && AND : T && T --> T else f and || OR 
console.log(e < f && f > e);
console.log(e < f && f == e);

// ||  opreator
console.log(e < f || f == e);
console.log(e < f || f == e || a != b);