const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var lovescore = Math.random() * 100;

rl.question("What is your name? ", function(name1) {
    rl.question("What is their name? ", function(name2){
    console.log("Hello, " + name1 + " and " + name2 +"!");
  var lovescore = Math.random() * 100;
  lovescore = Math.floor(lovescore) + 1;
  console.log("Your love score is " + lovescore + "%");
  rl.close();

    });
});
