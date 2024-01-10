
//text.lenght
let text = "user live in pune and i like pune";

let textLength = text.length;
console.log(textLength);

console.log(text.length);


//text.slice
let slicedtext = text.slice(2, 6); // start index: incluive && end index: excluive
console.log(slicedtext);

console.log(text.slice(3, 17));
console.log(text.slice(10, 15));

console.log(text.slice(-13, -4));//start index: excluive && end index: incluive
console.log(text.slice(18));

console.log(text.substring(-1, 10)); // negative value count as 0 and end index as excliuve

console.log(text.substr(2, 6));

// replace mathod

console.log(text.replace('pune', 'beed')); // replace will replace first finder value 
console.log(text.replace('abchdd', 'beed'));  // original string 
console.log(text.replace('Pune', 'beed')); //  original string replace is case sensetive
console.log(text.replace('/pune/ig/', 'beed'));
console.log(text.replaceAll('pune', 'beed'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

//concatination
let firstName = 'nitin';
let lastName = 'Karande';
let no = 112445;
 //let fullName = firstName + " " + lastName;

 let fullName = firstName.concat(' ',no,' ',lastName, ' ', 50000);
console.log(fullName);

    console.log('low>',text.toLowerCase(),'up>',text.toUpperCase());

    // Trim() method remove white spaces

    let data = '   nkmlmomoqo     ';
    console.log(data.trim());

    var string = "nnoinn     kjnnnnq     nrnofqom  coming  else to .";
    stringData = string.trim().replace(/\s+/g, " ");
    console.log(stringData);

    //toString method

    let No = 56325;
    let data1 = No.toString();
    console.log(data1);

let text1= "HELLO WORLD";
let char = text1.charAt(1);
console.log(char);


//split-it split out data and return array 
let date = 12222;
//let h = date.toString;
let newDate = date.split('-')
console.log(newDate);


