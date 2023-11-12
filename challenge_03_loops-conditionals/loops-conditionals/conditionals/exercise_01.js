/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

function comparenumber(number) {
  let message = number + " it's odd";
  if (number % 2 === 0) {
    message = number + " it's even";
  }
  return message;
}
console.log(comparenumber(2));
console.log(comparenumber(19));
