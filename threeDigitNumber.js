const prompt = require("prompt-sync")();

let userInput = parseInt(prompt("Enter a 3 digit number"));

while (userInput < 100 || userInput > 999) {
    userInput = parseInt(prompt("Enter a 3 digit number"));
}
console.log("You have entered", userInput);

/* let userInput2 = null;
while (true) {
    userInput = parseInt(prompt("Enter the number:"));
    if (userInput >= 100 && userInput <= 999) {
        break;
    }
} */

