
//text.lenght
let text = "user live in pune and i like pune";

let textLength = text.length;
console.log(textLength);

console.log(text.length);


//text.slice
let slicedtext = text.slice(2,6); // start index: incluive && end index: excluive
console.log(slicedtext);

console.log(text.slice(3,17));
console.log(text.slice(10,15));

console.log(text.slice(-13,-4));//start index: excluive && end index: incluive
console.log(text.slice(18));

console.log(text.substring(-1, 10)); // negative value count as 0 and end index as excliuve

console.log(text.substr(2,6));

// replace mathod

console.log(text.replace('pune', 'beed')); // replace will replace first finder value 
console.log(text.replace('abchdd', 'beed'));  // original string 
console.log(text.replace('Pune', 'beed')); //  original string replace is case sensetive
console.log(text.replace('/pune/ig/', 'beed'));
console.log(text.replaceAll('pune','beed'));