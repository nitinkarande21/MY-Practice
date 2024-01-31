

// the java script spreadOpreator allow us to 
// qualickly copy of all or part of exeacting array or object 
// in to another part of object

let num = [40, 50, 60, 70, 8, 3, 23];
/*let num2 =[];
num.forEach(ele =>{
    num.push(ele);
})
console.log(num2); // using for each opreator we can find out this but using spread opreator ois below 
*/

let num2 =[...num];
console.log(num2);

// using part

let = [item1, item2, ...item3] = num;
console.log(item1);
console.log(item2);
console.log(item3);

// obj

let emp = {
    name: "Nitin",
    age:"28",
    city: "pune"

// do not use spreade opreator with obj it might chance chance to loose data
};

let emp2 = {...emp};
console.log(emp2);

//concatination of array
let color1 = ['red', 'black', 'blue' ];
let color2 = ['orange' , 'white', 'darkblue'];
color = [...color1, ...color2];
console.log(color);



// if else
let mark = 30;
 if(mark > 40){
    console.log('pass');

 }
 else{
    console.log('fail');
 }


 //ternory opreator 
 // we can use turnery opreartor to resolve above

 mark > 40 ? console.log('pass') : console.log('fail');

