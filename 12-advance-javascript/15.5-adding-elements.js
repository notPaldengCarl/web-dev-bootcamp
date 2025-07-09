const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askName() {
  rl.question("Enter a name to add (or type 'done' to finish): ", function(newGuest) {
    if (newGuest.toLowerCase() === 'done') {
      console.log("Final guest list:");
      console.log(guestList);
      rl.close();
    } else {
      guestList.push(newGuest);
      console.log(newGuest + " has been added.");
      console.log("Current guest list:", guestList);
      askName();
    }
  });
}

askName(); 
