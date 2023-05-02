function fibonacci(num) {
  // type your code here
  if(num < 2) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num -2)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log(fibonacci(10));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(1));

  console.log("");

  console.log("Expecting: 6765");
  console.log(fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// take a number starting with 1 and add it to the previous number in the sequence
// if the number given is 0 it should return
// return the resulting product
// And a written explanation of your solution
// if the number given is either 1 or 0, return num
// make 2 recursive calls with num - 1 and num - 2 to get the previous values and add those values together
// repeat until either 1 or 0 is returned at which point everything "resolves" to give the result
