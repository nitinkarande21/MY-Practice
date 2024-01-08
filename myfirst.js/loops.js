// for loop
//for in loop 
// for of loop
// do while loop

//for loop

for (let a =1; a <=10; a++){
    console.log(a);
}

//for(;;){ // infinite loop and page will crash
   // console.log(Prince);
//}

//for in loop = it is used to itrate object 
let student = {
name: 'prince',
contact: 1234,
add:'Pune'
}

for (let x in student){
    console.log(student [x]); // property symbol
}

// for of loop

let color =['red', 'blue','white','green','yellow'];

for (item of color){
    console.log(item);
}

//do while loop
let a =0

do{
    console.log(a);
    a++;
}
while(a <=5){
   // console.log(a);
}





