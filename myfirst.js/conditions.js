
//if consitions, if else, else if, switch

let item = 0;

//if(){
 //   code block
//}

//if item is greater thha or equal to 

if (item > 50){
console.log("stock availabe");
}

//if else

if(item >= 50){
console.log("stock available");
}
else{
console.log("limited stock available");
}

//else if used for multi conditions

if(item >= 50){
    console.log("stock available");
}
else if(item >= 20 && item <= 50){
console.log("limited stock available");
}
else if(item >= 1 && item <=20){
    console.log("few items left");
}
else{
    console.log("out of stock");
}
