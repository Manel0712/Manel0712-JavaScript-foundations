/*
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    Expected output:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/
let numbers = 1;
function readNumbers(number) {
  let message = "Checkpoint! " + number;
  if (number === 50) {
    message = "Half way there!";
  }
  if (number === 100) {
    message = "You made it!";
  }
  return message;
}
while (numbers <= 100) {
  if (numbers % 10 === 0) {
    console.log(readNumbers(numbers));
  }
  numbers++;
}
console.log("¡All, done!");
