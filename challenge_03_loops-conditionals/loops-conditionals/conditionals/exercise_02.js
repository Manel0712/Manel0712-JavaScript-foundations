/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const howOldAreYou = function (age) {
  if (typeof age !== "number") {
    return "What? How did this happen!?";
  }

  if (age >= 18) {
    return "Most places consider you an adult.";
  }

  if (age >= 13) {
    return "Nice, you're a teenager!";
  }

  if (age >= 3) {
    return "You are in elementary school, kid.";
  }

  return "You're just a baby!";
};

/**
 * Program execution
 */
console.log("###############################");
console.log("--- Spot the bug 🐞 Program ---");

for (let iteration = 0; iteration < 5; iteration++) {
  const age = Math.floor(Math.random() * 20);

  const result = howOldAreYou(age);
  console.log(`You are ${age}: ${result}`);
}

const ageAsNull = null;
console.log(howOldAreYou(ageAsNull));

console.log("--- Spot the bug 🐞 complete ---");

/*
  The error is that the conditions only check that the age is greater than the number indicated, but not that they are less than the number indicated in the following condition.
*/
