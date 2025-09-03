// 9-add.js

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Get the two arguments from command line
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Print the result
console.log(add(a, b));
