/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/
for (let evenNumbers = 10; evenNumbers <= 40; evenNumbers++) {
  if (evenNumbers % 2 === 0) {
    console.log(evenNumbers);
  }
}
for (let oddNumbers = 10; oddNumbers <= 40; oddNumbers++) {
  if (oddNumbers % 2 !== 0) {
    console.log(oddNumbers);
  }
}
