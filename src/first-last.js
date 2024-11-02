let num = 4871 //this is the number, program will find first number below and above num that is divisible by divisor
let divisor = 3 //this is the divisor that program will check divisibility with
let count = num //this is count, do not change it

//this piece of code decreases count, which is equal to num, but keeps num the same, until it is divisible by divisor, then prints the number
while(count%divisor !== 0 | count === num) {
  count-- //this decreases count by one
}
console.log(count) //this prints out the number to the console

count = num //this resets count to be used again
//this piece of code increases count, which is equal to num, but keeps num the same, until it is divisible by divisor, then prints the number
while(count%divisor !== 0 | count === num) {
  count++ //this increases count by one
}
console.log(count) //this prints out the number to the console
//at the end you will have the first number below num that is divisible by divisor, and the first number above num that is divisible by divisor in the console