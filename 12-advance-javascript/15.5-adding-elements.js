var guestList= ["Angela","Jack","Pam","James","Lara","Jason"];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function (newGuest){
var guestList= ["Angela","Jack","Pam","James","Lara","Jason"];
    guestList.push(newGuest);
  console.log("You have been added to the guest list!");
  console.log("Updated Guest List:");
  console.log(guestList);
    rl.close()
});
