//using simple loop 
const number = [4, 5, 6, 85, 25, 85, 3];

let num = [];

for (i = 0; i < number.length; i++) {
    if (number[i] != 6) {
        num.push(number[i])

    }

}
console.log(num);

// using forEach() array ittration method
let num2 = [];
number.forEach(item => {
    if (item != 6) {
        num2.push(item)
    }

})
console.log(num2);
//find() it will retun first match that passes frist codition 
const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let v = item.find(item => {
    return item > 7;
})
console.log(v);

//indexOf is case sensetive if value no match found it will return -1

let fruits = ["apple", "mango", "orange", "banana"];
//console.log(fruits.indexOf(banana));

//map
emp = [
    {
        empName: "Nitin", city: "Pune"
    },
    {
        empName: "dilip", city: "Beed "
    },
    {
        empName: "shidu", city: "Mumbai"
    }

]
let names = emp.map(empData => {
    return empData.empName;

})
console.log(names);


const array = [10, 20, 30, 20, 40, 20, 50, 20, 20, 70];
const serachElement = 20;
let foundIndex = [];

array.forEach((element, index) => {
    if (element === serachElement) {
        foundIndex.push(index);
    }
});
console.log(foundIndex);//

const array1 = [10, 20, 30, 20, 40, 20, 50, 20, 20, 70];
console.log(array1.includes(100));//false


let char = ['a', 'b', 'a', 'c', 'd', 'f', 'a'];
let char2 = new Set(char);// to remove dupicate item using Set()
console.log(char2);


//filter()
let data = char.filter((item, index) => {
    if (char.indexOf(item) === index) {
        return item

    }
})
console.log(data);

