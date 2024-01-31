

//There are two types of data types 1) premitive 2) non premitive

//String, bigint, Boolean, number, undefined, null, symbol,object
//Object data type can be an Array,an object, a date

//string Datatypes

let state = "";       //empty string

let city = "pune";   //string data type

console.log(city);

city = "Mumbai";

console.log(city);

//Number Datatypes

var marks = 90;   //number
console.log('marks', marks);

var mobNo = 7972637703;
console.log(mobNo);

//boolean datatypes

var isfavfruit = false;
console.log(isfavfruit);

//typeof() it gives type of variable
console.log('data type of isfavfruit var', typeof (isfavfruit));

const match = undefined;
console.log(match);

let abc;
console.log(abc);
console.log(typeof (abc));

var myName = null;
console.log(myName);
console.log(typeof (myName));

//BigInt//
let d = 9999999999999999n
console.log(d);


//array// is used to store multiple items

let name = "Nitin live in pune"
console.log(name);

let cities = [];
cities = ['pune','mumbai','Beed','satara','nagar'];
console.log(cities);
console.log(typeof(cities));
console.log(cities[2]);
console.log(cities.length);
console.log(cities[0]);
console.log(cities[cities.lenght-1]);

//hetroArray//

let hetroArray = ['pune', 124, true, null, undefined, test(), 'nitin'];
console.log(hetroArray[5]);

function test(){
    return 'Karande';
}

//let cars = {}; object {key: value}
 let cars = {
    carName : "swift",
    carPrice : 1000000,
    carColor : "white",
    carModel : "new"
 }

 console.log(cars.carName);
 console.log(cars.carModel);
 console.log(typeof(cars));


