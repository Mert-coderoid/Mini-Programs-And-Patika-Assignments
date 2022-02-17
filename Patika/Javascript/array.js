let items = [1,2,3,4,5,6];

let femaleUsers = ['Marie',"Camila","Rachel"];
let maleUsers = ['Kevin','David','Philipe'];

console.log(items);
console.log(femaleUsers);
console.log(maleUsers);

// Add to the end push()
items.push(femaleUsers);
console.log(items);
// Add to the start unshift()
items.unshift(maleUsers);
console.log(items);
// Remove from start shift()
items.shift();
console.log(items)
// Remove from end pop()
items.pop();
console.log(items);

// Getting a 3 elements of after specific elements splice(<element index>,<how many elements(includes element)>)
let newItems = items.splice(2,3);
console.log(newItems);

// To find index of an element in array indexof()
items.indexOf(2);
console.log(items.indexOf(2));

// In js it will be exact same array when you copy an array like that let copy = anarray;
// 
let copyItems = items.slice()
console.log(copyItems);
console.log(items);

// ES6 copy
let es6Copy = [...items];
console.log(es6Copy);

// Foreach Loop with array

const products = ["LAPTOP","PHONE","SPEAKER","DESPKTOP PC","SERVER","MOUSE","KEYBOARD"];

products.forEach((product,index,array)=>console.log(index));