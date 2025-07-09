const readline = require('readline');

const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

function pickRandomName(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    const randomGuest = pickRandomName(guestList);
    console.log("The randomly selected guest is: " + randomGuest);
  rl.close();
