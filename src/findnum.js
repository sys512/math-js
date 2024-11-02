let rannum = 500 //make sure to change this number randomly each time you use the program, THIS IS IMPORTANT TO AVOID SUSPICIOUS ANSWERS
let divisor1 = 2 //this is the first number that result must be divisible by, make sure to set this correctly
let divisor2 = 3 //this is the second number that result must be divisible by, make sure to set this correctly
let divisor3 = 10 //this is the third number that result must be divisible by, make sure to set this correctly
//if you have only 2 divisors, make 2 and 3 the same
while(rannum%divisor1 !== 0 | rannum%divisor2 !== 0 | rannum%divisor3 !==0){
  rannum++ //this code increases rannum by one until it is divisible by all divisors, consider changing ++ to -- sometimes, and back
}
console.log(rannum)