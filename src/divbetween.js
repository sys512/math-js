let num1 = 0; //make sure to set this correctly
let num2 = 0; //make sure to set this correctly
//Program will search between top 2 numbers, num1 is lower
let divisor = 0; //make sure to set this correctly
//Program will check division of each number with divisor
for (let i = num1; i <= num2; i++) {
  //this runs the below code for every number between num1 and num2
  if (i % divisor === 0) {
    //this divides with remainder, if it is 0, then it is divisible, and runs the below line
    console.log(i);
    //this prints the number to the console
  }
}
//the answers are in the console, just make sure to enter the right numbers
