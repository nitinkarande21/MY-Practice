//deafult var keyword

//scope level diff

// let : block level scope      var : function level scope 


function test (){
    let  a =10;
    if (a < 20){
        let b = 30;
        var c = 60;
    }
  console.log(b); // it will shows error becuase its let and block level keywards
  console.log(c); // it will executive because its fucntion level keywords 
}

console.log(test());

//Redeclearation is not possible with let keywords

/*let city = mumnbai ;
let city = pune ;
*/
//let city = mumbai ;
  

var city = pune ;
var city = mumbai ;

// Redecleartion is possible using var 

const city = pune ;
//const city = mumbai;

// reasign the value is possible to the variable using let and var but not using const 
let marks = 60;
marks = 47 ;



// hoisting : first define the value and then decleare it 

    // hoisting is possible using var keywords 
// not possible with let and const keywords 

// not only for const at the time of declearation we have to define 
/*const y;
y = 10;*/














