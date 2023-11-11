/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let evenNumbers = 10;
let oddNumbers = 10;
while (evenNumbers <= 40) {
  if (evenNumbers % 2 == 0) {
    console.log(evenNumbers);
  }
  evenNumbers++;
}
while (oddNumbers <= 40) {
  if (oddNumbers % 2 != 0) {
    console.log(oddNumbers);
  }
  oddNumbers++;
}
