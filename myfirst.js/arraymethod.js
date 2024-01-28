
let city = ['pune', 'mumbai', 'nashik', 2100]; // hetrogenous array 
console.log(city.length);// it will return lenght of array 

// to string

console.log(city.toString());


// pop() popout delelte last item of array.

let popoutItem = city.pop();
console.log(popoutItem);
console.log(city);

//push (); to appaend / add item at the end of array and return the original length of array.
let returnedByPush = city.push(6000, 'nitin');
console.log(city);
console.log(returnedByPush);

//the shift() method removes the first element and shift all element to lower index
let color =['red', 'blew', 'green', 'white'];
let shiftMethodReturenedData = color.shift();
console.log(shiftMethodReturenedData);
console.log(color);

//unshift() add element at the from start index

let color2 =['pink','red', 'blew', 'green', 'white'];
let returnData =color2.unshift('yellow', 'black')
console.log(returnData);
console.log(color2);


// join()
let v = ['red','pink', 'yellow', 'black','white'];
let v1= v.join(' ');
console.log(v1);


//concat

cl2 = ['red','pink','yellow'];
cl3 = ['black','white'];
let cl4 = cl2.concat(cl3,v);
console.log(cl4);

//delete

const fruits= ['pull', 'push', 'git', 'reg'];
delete fruits[0];
console.log('>>',fruits);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits1);


const fruits2 = ["Banana", "Orange", "Apple", "Mango","Banana", "Orange", "Apple",];
fruits2.slice(2,4);
console.log(fruits2);


//Number methods

let no = 75455455;
let no1 = no.toString();
console.log(no1);

//tofixed()

let weight= 4.56789
let w2 = weight.toFixed(3);
console.log(w2);

//valueof()

let x = 52855;
console.log(x.valueOf());