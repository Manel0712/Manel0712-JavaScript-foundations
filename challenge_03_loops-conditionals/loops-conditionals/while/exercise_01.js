/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let evennumbers = 10;
let oddnumbers = 10;
while (evennumbers <= 40) {
  if (evennumbers%2==0) {
    console.log(evennumbers);
  }
  evennumbers++;
}
while (oddnumbers <= 40) {
  if (oddnumbers%2!=0) {
    console.log(oddnumbers);
  }
  oddnumbers++;
}
