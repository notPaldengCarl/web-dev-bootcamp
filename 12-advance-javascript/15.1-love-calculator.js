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
  if (lovescore > 80){
  console.log("Your love score is " + lovescore + "%" + " like I love you!");
  }
  if (lovescore >= 30 && lovescore <= 70){
  console.log("Your love score is " + lovescore + "%" + " maybe there's a chance.");  
  }
  if (lovescore <= 30){
  console.log("Your love score is " + lovescore + "%" + " like it's too low.");  
  }
  rl.close();
    });
});
