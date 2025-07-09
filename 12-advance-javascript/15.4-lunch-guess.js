var guestList= ["Angela","Jack","Pam","James","Lara","Jason"];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function (newGuest){
var guestList= ["Angela","Jack","Pam","James","Lara","Jason"];

    if (guestList.includes(newGuest)){
        console.log("Welcome!");
    } else{
        console.log("Sorry, not allowed!");
    }
    rl.close()
});
