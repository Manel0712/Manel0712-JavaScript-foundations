/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/
for (let evennumbers = 10; evennumbers <= 40; evennumbers++) {
  if (evennumbers % 2 === 0) {
    console.log(evennumbers);
  }
}
for (let oddnumbers = 10; oddnumbers <= 40; oddnumbers++) {
  if (oddnumbers % 2 !== 0) {
    console.log(oddnumbers);
  }
}
