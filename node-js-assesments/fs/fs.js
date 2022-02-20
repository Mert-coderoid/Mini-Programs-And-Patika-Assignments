const fs = require('fs');

// create file
fs.writeFileSync('notes.txt', 'This is my first file');

// add {"name":"Employee 1 Name", "salary": 2000} to file
fs.appendFileSync("notes.txt", JSON.stringify({ "name": "Employee 1 Name", "salary": 2000 }))

// read file
const data = fs.readFileSync("notes.txt");
console.log(data.toString());

// update file 
fs.writeFileSync("notes.txt", "Changed the file");

// delete file
fs.unlinkSync("notes.txt");